'use client'

import { Card } from '@/components/ui/card'
import { Star, Quote } from 'lucide-react'
import { portfolioData } from '@/lib/portfolio-data'

export function Testimonials() {
  const testimonials = portfolioData.testimonials

  return (
    <section className="py-20 md:py-32 px-4 md:px-8 bg-background relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-full border border-border/50 mb-6">
            <span className="text-sm font-medium text-foreground/70">Testimonials</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
            What <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl font-light">
            Real feedback from amazing clients I&apos;ve had the pleasure of working with on transformative projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="p-8 border border-border/50 bg-gradient-to-br from-card to-card/50 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Decorative background */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-300" />

              {/* Quote icon */}
              <Quote className="w-10 h-10 text-accent/20 mb-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/70 leading-relaxed mb-6 font-light">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Divider */}
              <div className="border-t border-border/30 pt-6 group-hover:border-accent/30 transition-colors" />

              {/* Author */}
              <div className="flex items-center gap-3 mt-6">
                <div className="w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center text-xl border border-border/50 group-hover:border-accent/30 transition-colors">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-primary group-hover:text-accent transition-colors text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-foreground/60">
                    {testimonial.role} • {testimonial.company}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
