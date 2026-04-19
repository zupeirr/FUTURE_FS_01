'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Mail, Linkedin, Github, Twitter, ArrowRight, Send, MessageSquare, Clock } from 'lucide-react'
import { portfolioData } from '@/lib/portfolio-data'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setSubmitted(false), 3000)
      } else {
        const data = await response.json()
        alert(`Error: ${data.error || 'Failed to send message'}`)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert('Error sending message. Please try again.')
    }
  }

  const socialLinks = [
    { icon: Github, href: portfolioData.socialLinks.github, label: 'GitHub', color: 'hover:bg-gray-600 hover:text-white' },
    { icon: Linkedin, href: portfolioData.socialLinks.linkedin, label: 'LinkedIn', color: 'hover:bg-blue-600 hover:text-white' },
    { icon: Twitter, href: portfolioData.socialLinks.twitter, label: 'Twitter', color: 'hover:bg-blue-400 hover:text-white' },
    { icon: Mail, href: `mailto:${portfolioData.socialLinks.email}`, label: 'Email', color: 'hover:bg-red-500 hover:text-white' },
  ]

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      description: 'Drop me an email anytime',
      value: portfolioData.personal.email,
      link: `mailto:${portfolioData.personal.email}`,
    },
    {
      icon: MessageSquare,
      title: 'Message',
      description: 'Connect via social media',
      value: '@subertech',
      link: portfolioData.socialLinks.linkedin,
    },
    {
      icon: Clock,
      title: 'Availability',
      description: 'Open for freelance & full-time work',
      value: 'Available Now',
      link: '#',
    },
  ]

  return (
    <section id="contact" className="py-20 md:py-32 px-4 md:px-8 bg-background relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-full border border-border/50 mb-6">
            <span className="text-sm font-medium text-foreground/70">Get in Touch</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
            Let&apos;s <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Collaborate</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl font-light">
            Have an exciting project in mind? I&apos;d love to hear from you. Reach out and let&apos;s create something exceptional together.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method) => {
            const Icon = method.icon
            return (
              <Card
                key={method.title}
                className="p-8 border border-border/50 bg-gradient-to-br from-card to-card/50 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 group cursor-pointer hover:-translate-y-1"
              >
                <div className="p-4 bg-muted/50 rounded-lg w-fit mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                  {method.title}
                </h3>
                <p className="text-sm text-foreground/60 mb-3">{method.description}</p>
                <a href={method.link} className="text-accent font-semibold text-sm hover:underline">
                  {method.value} →
                </a>
              </Card>
            )
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 md:p-10 border border-border/50 bg-gradient-to-br from-card to-card/50 shadow-lg">
            <h3 className="text-2xl font-bold text-primary mb-8 flex items-center gap-3">
              <Send className="w-6 h-6 text-accent" />
              Send Me a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-primary mb-3">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder=""
                  required
                  className="w-full px-4 py-3 bg-muted/50 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-foreground placeholder:text-foreground/30 transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-primary mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder=""
                  required
                  className="w-full px-4 py-3 bg-muted/50 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-foreground placeholder:text-foreground/30 transition-all"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-primary mb-3">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  required
                  className="w-full px-4 py-3 bg-muted/50 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-foreground placeholder:text-foreground/30 transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-primary mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project vision..."
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-muted/50 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-foreground placeholder:text-foreground/30 transition-all resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-accent to-accent/80 hover:shadow-lg hover:shadow-accent/40 text-accent-foreground font-semibold py-3 h-auto border-0 transition-all duration-300 group"
              >
                {submitted ? (
                  <>
                    <span>Message Sent! ✓</span>
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </Card>

          {/* Contact Info & Social */}
          <div className="space-y-6">
            {/* Status Card */}
            <Card className="p-8 border border-border/50 bg-gradient-to-br from-accent/10 to-primary/5 border-accent/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-foreground/70">Currently Available</span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">Open for Opportunities</h3>
              <p className="text-foreground/60 leading-relaxed mb-6">
                I&apos;m actively seeking exciting projects and collaborations. Whether it&apos;s full-time, part-time, or freelance work, I&apos;m ready to help bring your vision to life.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground/60 font-medium">Response time: 24h</span>
                <div className="text-2xl">⚡</div>
              </div>
            </Card>

            {/* Social Links */}
            <Card className="p-8 border border-border/50 bg-gradient-to-br from-card to-card/50">
              <h3 className="text-xl font-bold text-primary mb-6">Connect on Social</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`flex items-center justify-center gap-3 p-4 rounded-lg bg-muted/50 border border-border/50 hover:border-accent/50 transition-all duration-300 group ${link.color}`}
                  >
                    <link.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="font-medium text-sm">{link.label}</span>
                  </a>
                ))}
              </div>
            </Card>

            {/* Quick Stats */}
            <Card className="p-8 border border-border/50 bg-gradient-to-br from-card to-card/50">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">50+</div>
                  <p className="text-sm text-foreground/60 mt-2">Projects Completed</p>
                </div>
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">30+</div>
                  <p className="text-sm text-foreground/60 mt-2">Happy Clients</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
