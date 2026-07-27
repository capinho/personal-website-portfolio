'use client'

import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { useIntersectionObserver } from '@/hooks/use-intersection-observer'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { submitContactForm } from '@/app/actions'
import { useToast } from '@/components/ui/use-toast'

export function Contact() {
  const ref = useRef<HTMLElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const isIntersecting = useIntersectionObserver(ref, { threshold: 0.5 })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formData = new FormData(e.currentTarget)
      const result = await submitContactForm(formData)

      if (result.success) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon!",
          variant: "default"
        })
        formRef.current?.reset()
      } else {
        const errorMessages = Object.entries(result.errors)
          .map(([field, errors]) => errors?.join(', '))
          .filter(Boolean)
          .join('. ')

        toast({
          title: "Error",
          description: errorMessages || "Failed to send message. Please try again.",
          variant: "destructive"
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="-mt-24 mb-20 pt-24"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-10 flex items-center gap-4">
        <span className="h-px w-10 bg-primary" aria-hidden="true" />
        <h2 className="text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl">Contact</h2>
      </div>
      <motion.div
        className="space-y-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <motion.p 
          className="max-w-[60ch] text-lg leading-relaxed text-muted-foreground"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          I'm always interested in hearing about new projects and opportunities.
          Whether you have a question or just want to say hi, feel free to reach out!
        </motion.p>
        
        <motion.form 
          ref={formRef}
          onSubmit={handleSubmit}
          className="max-w-2xl space-y-6 rounded-2xl border border-border bg-card/70 p-6 shadow-sm backdrop-blur-sm sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-foreground">Name</label>
            <Input
              id="name"
              name="name"
              autoComplete="name"
              className="h-12 w-full rounded-lg border-input bg-background/80 px-4 text-base text-foreground shadow-none placeholder:text-muted-foreground/70 focus-visible:border-primary"
              required
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-foreground">Email</label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="h-12 w-full rounded-lg border-input bg-background/80 px-4 text-base text-foreground shadow-none placeholder:text-muted-foreground/70 focus-visible:border-primary"
              required
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-foreground">Message</label>
            <Textarea
              id="message"
              name="message"
              rows={6}
              className="min-h-[150px] w-full resize-y rounded-lg border-input bg-background/80 px-4 py-3 text-base text-foreground shadow-none placeholder:text-muted-foreground/70 focus-visible:border-primary"
              required
            />
          </div>
          
          <Button
            type="submit"
            disabled={isSubmitting}
            className="h-12 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground hover:bg-primary/90 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </motion.form>
      </motion.div>
    </motion.section>
  )
}
