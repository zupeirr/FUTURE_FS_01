'use client'

import { Heart, Github, Linkedin, Twitter, Mail, ExternalLink } from 'lucide-react'
import { portfolioData } from '@/lib/portfolio-data'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ]

  const resources = [
    { label: 'Blog', href: '#' },
    { label: 'Case Studies', href: '#' },
    { label: 'Resume', href: '#' },
    { label: 'Privacy Policy', href: '#' },
  ]

  const socialLinks = [
    { icon: Github, href: portfolioData.socialLinks.github, label: 'GitHub' },
    { icon: Linkedin, href: portfolioData.socialLinks.linkedin, label: 'LinkedIn' },
    { icon: Twitter, href: portfolioData.socialLinks.twitter, label: 'Twitter' },
    { icon: Mail, href: `mailto:${portfolioData.socialLinks.email}`, label: 'Email' },
  ]

  return (
    <footer className="bg-gradient-to-b from-background to-primary/5 border-t border-border/50 py-16 px-4 md:px-8 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 pb-12 mb-12 border-b border-border/50">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent/70 rounded-lg flex items-center justify-center mb-4 shadow-lg">
              <span className="text-xl font-bold text-white">S</span>
            </div>
            <h3 className="text-xl font-bold text-primary">{portfolioData.personal.name}</h3>
            <p className="text-foreground/60 text-sm leading-relaxed">
              {portfolioData.personal.bio}
            </p>
            <div className="flex gap-3 mt-6">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="w-10 h-10 rounded-full bg-muted/50 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all duration-300 border border-border/50 hover:border-accent group"
                    aria-label={link.label}
                  >
                    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-primary mb-6 text-sm uppercase tracking-wider">Navigation</h4>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-foreground/60 hover:text-accent transition-colors text-sm flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-primary mb-6 text-sm uppercase tracking-wider">Resources</h4>
            <div className="space-y-3">
              {resources.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-foreground/60 hover:text-accent transition-colors text-sm flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter or CTA */}
          <div>
            <h4 className="font-semibold text-primary mb-6 text-sm uppercase tracking-wider">Let's Connect</h4>
            <p className="text-foreground/60 text-sm mb-4 leading-relaxed">
              Have a project in mind? Let's create something amazing together.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent to-accent/80 hover:shadow-lg hover:shadow-accent/30 text-accent-foreground rounded-lg font-medium text-sm transition-all duration-300"
            >
              Get in Touch
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-foreground/60">
          <p>
            © {currentYear} {portfolioData.personal.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            Built with <Heart className="w-4 h-4 fill-accent text-accent" /> using React & Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  )
}
