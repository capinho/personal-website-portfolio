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
      className="pt-24 -mt-24 mb-24"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-5xl font-bold text-[#ccd6f6] mb-12">Contact</h2>
      <motion.div
        className="space-y-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <motion.p 
          className="text-xl text-[#8892b0] hover:bg-[#111111] rounded-lg p-6"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          I'm always interested in hearing about new projects and opportunities.
          Whether you have a question or just want to say hi, feel free to reach out!
        </motion.p>
        
        <motion.form 
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-8 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="space-y-2">
            <label htmlFor="name" className="block text-xl text-[#ccd6f6]">Name</label>
            <Input
              id="name"
              name="name"
              className="w-full p-4 text-xl bg-[#112240] text-[#ccd6f6] rounded-lg border border-[#233554] focus:border-[#64ffda] focus:ring-1 focus:ring-[#64ffda]"
              required
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="block text-xl text-[#ccd6f6]">Email</label>
            <Input
              id="email"
              name="email"
              type="email"
              className="w-full p-4 text-xl bg-[#112240] text-[#ccd6f6] rounded-lg border border-[#233554] focus:border-[#64ffda] focus:ring-1 focus:ring-[#64ffda]"
              required
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="block text-xl text-[#ccd6f6]">Message</label>
            <Textarea
              id="message"
              name="message"
              rows={6}
              className="w-full p-4 text-xl bg-[#112240] text-[#ccd6f6] rounded-lg border border-[#233554] focus:border-[#64ffda] focus:ring-1 focus:ring-[#64ffda]"
              required
            />
          </div>
          
          <Button
            type="submit"
            disabled={isSubmitting}
            className="px-8 py-4 text-xl bg-[#64ffda] text-[#0a192f] hover:bg-[#64ffda]/90 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </motion.form>
      </motion.div>
    </motion.section>
  )
}
