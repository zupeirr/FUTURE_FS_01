'use client'

import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { portfolioData } from '@/lib/portfolio-data'

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 md:px-8 py-20 md:py-0 pt-24">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-8 text-left md:text-left pt-16 md:pt-32">
            <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-1000">
              <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-3">
                  <span className="text-primary">Hi, I&apos;m</span>
                  <br />
                  <span className="bg-gradient-to-r from-accent via-accent to-primary bg-clip-text text-transparent">{portfolioData.personal.name}</span>
                </h1>
                <h2 className="text-lg font-semibold text-accent">{portfolioData.personal.title}</h2>
              </div>

              <p className="text-lg md:text-xl text-foreground/60 leading-relaxed font-light max-w-2xl">
                {portfolioData.personal.shortBio}. I specialize in building full-stack applications with React, Next.js, and Node.js that solve real-world problems.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-in fade-in slide-in-from-left-4 duration-1000" style={{ animationDelay: '200ms' }}>
              <Button
                onClick={() => scrollToSection('#projects')}
                className="bg-gradient-to-r from-accent to-accent/80 hover:shadow-lg hover:shadow-accent/40 text-accent-foreground text-base px-8 py-6 h-auto border-0 transition-all duration-300 group w-fit"
              >
                View My Projects
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => scrollToSection('#contact')}
                className="border-2 border-primary/30 hover:border-primary text-primary bg-transparent hover:bg-muted/50 text-base px-8 py-6 h-auto transition-all duration-300"
              >
                Get in Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-6 animate-in fade-in duration-1000" style={{ animationDelay: '400ms' }}>
              <a href={portfolioData.socialLinks.github} className="w-12 h-12 rounded-full bg-muted/50 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all duration-300 border border-border/50 hover:border-accent group" title="GitHub">
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href={portfolioData.socialLinks.linkedin} className="w-12 h-12 rounded-full bg-muted/50 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all duration-300 border border-border/50 hover:border-accent group" title="LinkedIn">
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href={`mailto:${portfolioData.socialLinks.email}`} className="w-12 h-12 rounded-full bg-muted/50 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all duration-300 border border-border/50 hover:border-accent group" title="Email">
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Side - Profile Picture */}
          <div className="flex justify-center md:justify-end animate-in fade-in slide-in-from-right-4 duration-1000">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-accent/30 overflow-hidden bg-muted/50 flex items-center justify-center group-hover:border-accent/60 transition-colors duration-300 shadow-2xl">
                <img
                  src="/profile.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                    target.nextElementSibling?.classList.remove('hidden')
                  }}
                />
                <div className="hidden absolute inset-0 flex items-center justify-center bg-gradient-to-br from-accent/20 to-primary/20">
                  <span className="text-7xl">👤</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center pt-20 animate-bounce">
          <div>
            <p className="text-sm text-foreground/40 mb-2 text-center">Scroll to discover more</p>
            <div className="text-2xl text-foreground/30 text-center">↓</div>
          </div>
        </div>
      </div>
    </section>
  )
}
