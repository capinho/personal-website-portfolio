'use server'

import { headers } from 'next/headers'
import nodemailer from 'nodemailer'
import { contactSchema, createRateLimiter, escapeHtml } from '@/lib/contact-security'

let transporter: ReturnType<typeof nodemailer.createTransport> | null = null
const submissionLimiter = createRateLimiter(5, 10 * 60 * 1000)

function getTransporter() {
  const user = process.env.GMAIL_USER
  const pass = process.env.GMAIL_APP_PASSWORD

  if (!user || !pass) {
    throw new Error('Contact form email configuration is missing')
  }

  if (!transporter) {
    transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user, pass },
    })
  }

  return { transporter, user }
}

export async function submitContactForm(formData: FormData) {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
    company: formData.get('company') ?? '',
  })

  if (!validatedFields.success) {
    const fieldErrors = validatedFields.error.flatten().fieldErrors

    if (fieldErrors.company) {
      return {
        success: false,
        errors: {
          _form: ['Unable to send this submission. Please try again.']
        }
      }
    }

    return {
      success: false,
      errors: fieldErrors
    }
  }

  const { name, email, message } = validatedFields.data
  const requestHeaders = await headers()
  const clientKey =
    requestHeaders.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    requestHeaders.get('x-real-ip') ||
    'unknown'
  const rateLimit = submissionLimiter.check(clientKey)

  if (!rateLimit.allowed) {
    return {
      success: false,
      errors: {
        _form: ['Too many messages were sent recently. Please try again in a few minutes.']
      }
    }
  }

  try {
    const mail = getTransporter()
    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br>')

    await mail.transporter.sendMail({
      from: `"Portfolio Contact Form" <${mail.user}>`,
      to: mail.user,
      replyTo: {
        name,
        address: email,
      },
      subject: `New Contact Form Message from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Message:

${message}
      `,
      html: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${safeName}</p>
<p><strong>Email:</strong> ${safeEmail}</p>
<p><strong>Message:</strong></p>
<p>${safeMessage}</p>
      `,
      disableFileAccess: true,
      disableUrlAccess: true,
    })

    return {
      success: true,
      errors: {}
    }
  } catch {
    console.error('Contact form email delivery failed')
    return {
      success: false,
      errors: {
        _form: ['Failed to send message. Please try again later.']
      }
    }
  }
}
