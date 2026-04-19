'use client'

import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { portfolioData } from '@/lib/portfolio-data'

export function Projects() {
  const projects = portfolioData.projects.map((project, index) => {
    const gradients = [
      'from-blue-500/20 via-blue-600/20 to-cyan-500/10',
      'from-purple-500/20 via-purple-600/20 to-pink-500/10',
      'from-pink-500/20 via-pink-600/20 to-rose-500/10',
      'from-green-500/20 via-green-600/20 to-emerald-500/10',
      'from-orange-500/20 via-orange-600/20 to-amber-500/10',
      'from-red-500/20 via-red-600/20 to-orange-500/10',
    ]
    return {
      ...project,
      gradient: gradients[index % gradients.length],
    }
  })

  return (
    <section id="projects" className="py-20 md:py-32 px-4 md:px-8 bg-background relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-full border border-border/50 mb-6">
            <span className="text-sm font-medium text-foreground/70">Portfolio</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
            Featured <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl font-light">
            Showcasing a selection of carefully crafted projects that demonstrate design excellence, technical expertise, and creative problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="group overflow-hidden border border-border/50 hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/20 bg-gradient-to-br from-card to-card/50 cursor-pointer hover:-translate-y-1"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center text-6xl overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {project.image.startsWith('/') ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                ) : (
                  <span className="relative group-hover:scale-110 transition-transform duration-300">{project.image}</span>
                )}
              </div>
              
              <div className="p-8 space-y-5">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300 line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-foreground/60 text-sm leading-relaxed line-clamp-2">
                    {project.shortDesc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      className="bg-muted/70 text-foreground/70 hover:bg-accent/20 hover:text-accent border-0 text-xs font-medium transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-border/30 group-hover:border-accent/30 transition-colors">
                  <div className="flex items-center text-accent text-sm font-semibold group-hover:gap-2 transition-all duration-300">
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
