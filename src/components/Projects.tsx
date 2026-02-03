import { ExternalLink, Github, Sparkles } from 'lucide-react';

interface Project {
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  highlights: string[];
  category: string;
  featured: boolean;
}

interface ProjectsProps {
  projects: Project[];
}

const categoryColors: Record<string, string> = {
  'Machine Learning': 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
  'Deep Learning': 'bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/20',
  'Full Stack': 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
};

export function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Featured Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Projects & <span className="gradient-text">Innovations</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world applications showcasing machine learning, data science, and full-stack development expertise.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card overflow-hidden project-card group"
            >
              {/* Project Header */}
              <div className="relative h-48 bg-gradient-to-br from-primary/10 via-accent to-primary/5 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent z-10" />
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-4 left-4 w-24 h-24 rounded-full bg-primary/20 blur-2xl" />
                  <div className="absolute bottom-4 right-4 w-32 h-32 rounded-full bg-primary/10 blur-3xl" />
                </div>
                <Sparkles className="w-16 h-16 text-primary/40 group-hover:text-primary/60 transition-colors duration-300" />
                
                {/* Category Badge */}
                <span className={`absolute top-4 left-4 z-20 px-3 py-1 rounded-full text-xs font-medium border ${categoryColors[project.category] || 'bg-accent text-accent-foreground border-border'}`}>
                  {project.category}
                </span>

                {project.featured && (
                  <span className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground">
                    Featured
                  </span>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="font-bold text-xl mb-1 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{project.subtitle}</p>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-6">
                  {project.highlights.slice(0, 2).map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 rounded-md bg-muted text-muted-foreground text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 rounded-md bg-muted text-muted-foreground text-xs font-medium">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
