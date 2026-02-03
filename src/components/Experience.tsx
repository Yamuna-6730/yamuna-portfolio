import { Briefcase, MapPin, Calendar, Trophy } from 'lucide-react';

interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  highlights: string[];
}

interface Achievement {
  title: string;
  year: string;
  description: string;
  type: string;
}

interface ExperienceProps {
  experience: ExperienceItem[];
  achievements: Achievement[];
}

export function Experience({ experience, achievements }: ExperienceProps) {
  return (
    <section id="experience" className="py-20 md:py-32 bg-muted/30">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Leadership roles, community involvement, and recognition that shaped my growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Timeline */}
          <div>
            <h3 className="flex items-center gap-3 text-xl font-semibold mb-8">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Briefcase className="w-5 h-5" />
              </div>
              Leadership & Community
            </h3>
            
            <div className="relative">
              <div className="timeline-line" />
              
              {experience.map((exp, index) => (
                <div key={index} className="relative pl-10 pb-8 last:pb-0">
                  <div className="timeline-dot" style={{ top: '6px' }} />
                  
                  <div className="glass-card p-6 project-card">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h4 className="font-semibold text-lg">{exp.role}</h4>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium">
                        {exp.type}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground text-sm mb-4">{exp.description}</p>
                    
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="flex items-center gap-3 text-xl font-semibold mb-8">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Trophy className="w-5 h-5" />
              </div>
              Notable Achievements
            </h3>
            
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="glass-card p-6 project-card group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-accent text-accent-foreground group-hover:scale-110 transition-transform duration-300">
                      <Trophy className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <h4 className="font-semibold text-lg group-hover:text-primary transition-colors">
                          {achievement.title}
                        </h4>
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">
                          {achievement.year}
                        </span>
                      </div>
                      <span className="inline-block px-2 py-0.5 rounded-md bg-accent text-accent-foreground text-xs mb-3">
                        {achievement.type}
                      </span>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
