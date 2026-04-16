'use client'

import { Card } from '@/components/ui/card'
import { CheckCircle2, Zap, Target, Trophy } from 'lucide-react'
import { portfolioData } from '@/lib/portfolio-data'

export function About() {
  const highlights = [
    {
      icon: Trophy,
      title: 'Projects Completed',
      value: `${portfolioData.stats.projectsCompleted}+`,
      color: 'from-amber-500/20 to-orange-500/20',
    },
    {
      icon: Zap,
      title: 'Years Experience',
      value: `${portfolioData.stats.yearsExperience}+`,
      color: 'from-yellow-500/20 to-orange-500/20',
    },
    {
      icon: Target,
      title: 'Clients Satisfied',
      value: `${portfolioData.stats.clientsSatisfied}+`,
      color: 'from-green-500/20 to-emerald-500/20',
    },
  ]

  const features = [
    {
      icon: '⚛️',
      title: 'React & Next.js',
      description: 'Building fast, scalable frontend applications with modern React patterns',
    },
    {
      icon: '🔧',
      title: 'Full Stack',
      description: 'Complete end-to-end solutions from frontend to backend and databases',
    },
    {
      icon: '🚀',
      title: 'Performance',
      description: 'Optimized applications with lightning-fast load times and smooth interactions',
    },
    {
      icon: '🔐',
      title: 'Secure & Scalable',
      description: 'Building robust systems that grow with your business needs',
    },
  ]

  return (
    <section id="about" className="py-20 md:py-32 px-4 md:px-8 bg-card relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-full border border-border/50 w-fit">
                <span className="text-sm font-medium text-foreground/70">About</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-primary leading-tight">
                About <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Me</span>
              </h2>
            </div>

            <p className="text-lg text-foreground/60 leading-relaxed font-light">
              I&apos;m {portfolioData.personal.name}, a full-stack developer with {portfolioData.stats.yearsExperience}+ years of experience building scalable web applications. My passion is creating elegant solutions to complex problems using modern technologies like React, Next.js, and Node.js.
            </p>

            <p className="text-lg text-foreground/60 leading-relaxed font-light">
              I specialize in building complete end-to-end solutions, from beautiful responsive frontends to robust backend architectures. Every project I work on reflects my commitment to clean code, performance optimization, and exceptional user experiences.
            </p>

            <p className="text-lg text-foreground/60 leading-relaxed font-light">
              When I&apos;m not coding, you&apos;ll find me exploring emerging technologies, contributing to open-source projects, or sharing knowledge with the developer community. I&apos;m always excited to work on challenging projects that make a real impact.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {highlights.map((stat) => {
                const Icon = stat.icon
                return (
                  <Card
                    key={stat.title}
                    className={`p-6 text-center bg-gradient-to-br ${stat.color} border border-border/50 hover:border-accent/50 transition-all`}
                  >
                    <Icon className="w-6 h-6 text-accent mx-auto mb-3" />
                    <div className="text-3xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-1">
                      {stat.value}
                    </div>
                    <p className="text-xs text-foreground/60 font-medium">{stat.title}</p>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Right Content - Features Grid */}
          <div className="grid grid-cols-2 gap-5">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                className="p-6 border border-border/50 bg-gradient-to-br from-card to-card/50 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 group hover:-translate-y-1"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors text-sm">
                  {feature.title}
                </h3>
                <p className="text-xs text-foreground/60 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
