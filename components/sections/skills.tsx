'use client'

import { Card } from '@/components/ui/card'
import { CheckCircle2, Code2, Palette, Zap } from 'lucide-react'
import { portfolioData } from '@/lib/portfolio-data'

export function Skills() {
  const skillCategories = [
    {
      category: 'Frontend Development',
      icon: Code2,
      color: 'from-blue-500/20 to-cyan-500/20',
      skills: portfolioData.skills.frontend,
    },
    {
      category: 'Backend & Databases',
      icon: Zap,
      color: 'from-purple-500/20 to-pink-500/20',
      skills: portfolioData.skills.backend,
    },
    {
      category: 'Tools & Technologies',
      icon: Palette,
      color: 'from-orange-500/20 to-red-500/20',
      skills: portfolioData.skills.tools,
    },
  ]

  return (
    <section id="skills" className="py-20 md:py-32 px-4 md:px-8 bg-background relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-full border border-border/50 mb-6">
            <span className="text-sm font-medium text-foreground/70">Expertise</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
            Skills & <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl font-light">
            Comprehensive technical skills across modern web development, design, and enterprise tools
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <Card
                key={category.category}
                className="p-8 border border-border/50 hover:border-accent/50 bg-gradient-to-br from-card to-card/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10 group"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-3 bg-gradient-to-br ${category.color} rounded-lg border border-border/50 group-hover:border-accent/30 transition-colors`}>
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary group-hover:text-accent transition-colors">
                    {category.category}
                  </h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-foreground/80">{skill.name}</span>
                        <span className="text-xs text-accent font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-muted/50 rounded-full overflow-hidden border border-border/30">
                        <div
                          className="h-full bg-gradient-to-r from-accent to-primary transition-all duration-500 group-hover:shadow-lg group-hover:shadow-accent/50"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            )
          })}
        </div>


      </div>
    </section>
  )
}
