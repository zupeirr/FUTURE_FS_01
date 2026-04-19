'use client'

import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { portfolioData } from '@/lib/portfolio-data'
import { Briefcase, Calendar, ArrowRight } from 'lucide-react'

export function Experience() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-8 bg-card relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-full border border-border/50 mb-6">
            <span className="text-sm font-medium text-foreground/70">Experience</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
            Work <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl font-light">
            My professional journey building innovative solutions for leading companies
          </p>
        </div>

        <div className="space-y-8">
          {portfolioData.experience.map((job, index) => (
            <Card
              key={job.id}
              className="p-8 border border-border/50 bg-gradient-to-br from-background to-background/50 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 group"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="grid md:grid-cols-4 gap-8">
                {/* Left - Company & Title */}
                <div className="md:col-span-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                      {job.company}
                    </h3>
                    <p className="text-lg font-semibold text-accent mb-4">
                      {job.position}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground/60">
                    <Calendar className="w-4 h-4" />
                    <span>{job.duration}</span>
                  </div>
                </div>

                {/* Middle - Description & Achievements */}
                <div className="md:col-span-2 space-y-4">
                  <p className="text-foreground/70 leading-relaxed">
                    {job.description}
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-primary">Key Achievements:</p>
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-foreground/60">
                          <ArrowRight className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right - Technologies */}
                <div className="md:col-span-1">
                  <p className="text-sm font-semibold text-primary mb-3">Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        className="bg-muted/70 text-foreground/70 hover:bg-accent/20 hover:text-accent border-0"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
