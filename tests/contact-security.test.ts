import assert from 'node:assert/strict'
import test from 'node:test'
import { contactSchema, createRateLimiter, escapeHtml } from '../lib/contact-security'

test('escapes user-controlled HTML before email rendering', () => {
  assert.equal(
    escapeHtml(`<img src=x onerror="alert('xss')">`),
    '&lt;img src=x onerror=&quot;alert(&#039;xss&#039;)&quot;&gt;'
  )
})

test('preserves legitimate contact form input', () => {
  const result = contactSchema.safeParse({
    name: 'Pape Diawara',
    email: 'pape@example.com',
    message: 'I would like to discuss a backend engineering project.',
    company: '',
  })

  assert.equal(result.success, true)
})

test('rejects the honeypot and header injection input', () => {
  assert.equal(
    contactSchema.safeParse({
      name: 'Attacker\r\nBcc: victim@example.com',
      email: 'attacker@example.com',
      message: 'This message is long enough.',
      company: '',
    }).success,
    false
  )

  assert.equal(
    contactSchema.safeParse({
      name: 'Automated bot',
      email: 'bot@example.com',
      message: 'This message is long enough.',
      company: 'Spam company',
    }).success,
    false
  )
})

test('limits repeated submissions within the configured window', () => {
  const limiter = createRateLimiter(2, 1000)

  assert.equal(limiter.check('visitor', 0).allowed, true)
  assert.equal(limiter.check('visitor', 1).allowed, true)
  assert.equal(limiter.check('visitor', 2).allowed, false)
  assert.equal(limiter.check('visitor', 1001).allowed, true)
})
