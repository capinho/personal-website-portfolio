import { z } from 'zod'

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, 'Name is required')
    .max(100, 'Name must be 100 characters or fewer')
    .refine((value) => !/[\r\n]/.test(value), 'Name contains invalid characters'),
  email: z
    .string()
    .trim()
    .email('Invalid email address')
    .max(254, 'Email address is too long'),
  message: z
    .string()
    .trim()
    .min(10, 'Message must be at least 10 characters long')
    .max(4000, 'Message must be 4,000 characters or fewer'),
  company: z.string().max(0, 'Invalid submission').optional().default(''),
})

export function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;',
    }

    return entities[character]
  })
}

interface RateLimitEntry {
  count: number
  resetAt: number
}

export function createRateLimiter(limit: number, windowMs: number) {
  const attempts = new Map<string, RateLimitEntry>()

  return {
    check(key: string, now = Date.now()) {
      const current = attempts.get(key)

      if (!current || current.resetAt <= now) {
        attempts.set(key, { count: 1, resetAt: now + windowMs })
        return { allowed: true, retryAfterMs: 0 }
      }

      if (current.count >= limit) {
        return { allowed: false, retryAfterMs: current.resetAt - now }
      }

      current.count += 1
      return { allowed: true, retryAfterMs: 0 }
    },
  }
}
