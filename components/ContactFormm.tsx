import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'

interface ContactFormProps {
  projectSlug?: string
}

export const ContactForm = ({ projectSlug }: ContactFormProps) => {
  const [formState, setFormState] = useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormState('submitting')
    setErrorMessage('')

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      city: formData.get('city') as string,
      message: formData.get('message') as string,
      company: formData.get('company') as string, // honeypot
      projectSlug,
    }

    // Basic client-side validation
    if (!data.name || data.name.length < 2) {
      setErrorMessage('Name must be at least 2 characters')
      setFormState('error')
      return
    }
    if (!data.email || !data.email.includes('@')) {
      setErrorMessage('Please enter a valid email')
      setFormState('error')
      return
    }
    if (!data.phone || data.phone.length < 7) {
      setErrorMessage('Phone must be at least 7 characters')
      setFormState('error')
      return
    }
    if (!data.message || data.message.length < 5) {
      setErrorMessage('Message must be at least 5 characters')
      setFormState('error')
      return
    }

    // API call to submit enquiry
    try {
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const json = await response.json()

      if (!response.ok || !json.ok) {
        throw new Error(json.error || 'Failed to submit enquiry')
      }

      setFormState('success')
      toast.success('Thank you! We have received your enquiry.')
      e.currentTarget.reset()
    } catch (error: any) {
      setFormState('error')
      setErrorMessage(error.message || 'Failed to submit. Please try again.')
      toast.error('Failed to submit enquiry')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            required
            disabled={formState === 'submitting'}
            className="transition-all duration-300 focus:shadow-soft focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your.email@example.com"
            required
            disabled={formState === 'submitting'}
            className="transition-all duration-300 focus:shadow-soft focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone *</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+91 9135556106"
            required
            disabled={formState === 'submitting'}
            className="transition-all duration-300 focus:shadow-soft focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="city">City</Label>
          <Input
            id="city"
            name="city"
            type="text"
            placeholder="Your city"
            disabled={formState === 'submitting'}
            className="transition-all duration-300 focus:shadow-soft focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

      {/* Honeypot field for spam protection */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
      />

      <div className="space-y-2">
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your requirements..."
          rows={5}
          required
          disabled={formState === 'submitting'}
          className="resize-none transition-all duration-300 focus:shadow-soft focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>

      {formState === 'error' && errorMessage && (
        <div className="rounded-lg border border-destructive/50 bg-destructive/15 p-3 text-sm text-destructive font-medium">
          {errorMessage}
        </div>
      )}

      {formState === 'success' && (
        <div className="rounded-lg border border-primary/50 bg-gradient-to-r from-primary/10 to-accent/10 p-3 text-sm text-primary font-medium">
          Thank you! We have received your enquiry and will get back to you
          soon.
        </div>
      )}

      <Button
        type="submit"
        disabled={formState === 'submitting'}
        className="w-full bg-gradient-to-r from-primary to-primary/90 text-primary-foreground font-semibold shadow-medium transition-all duration-300 hover:shadow-large hover:scale-[1.02] hover:from-primary/90 hover:to-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {formState === 'submitting' ? 'Submitting...' : 'Send Enquiry'}
      </Button>
    </form>
  )
}
