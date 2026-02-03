import { GraduationCap, Trophy, Target, Sparkles } from 'lucide-react';

interface AboutProps {
  personal: {
    shortBio: string;
  };
  education: {
    degree: string;
    specialization: string;
    institution: string;
    location: string;
    cgpa: string;
    period: string;
    status: string;
  }[];
  achievements: {
    title: string;
    year: string;
    description: string;
    type: string;
  }[];
  strengths: string[];
}

export function About({ personal, education, achievements, strengths }: AboutProps) {
  const edu = education[0];

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Passionate about <span className="gradient-text">Data & Technology</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {personal.shortBio}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Education Card */}
          <div className="glass-card p-6 md:p-8 project-card">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Education</h3>
                <p className="text-sm text-muted-foreground">{edu.status}</p>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-medium">{edu.degree}</h4>
              <p className="text-sm text-accent-foreground bg-accent inline-block px-3 py-1 rounded-full">
                {edu.specialization}
              </p>
              <p className="text-muted-foreground">{edu.institution}, {edu.location}</p>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-sm text-muted-foreground">{edu.period}</span>
                <span className="font-bold text-primary">CGPA: {edu.cgpa}</span>
              </div>
            </div>
          </div>

          {/* Achievements Card */}
          <div className="glass-card p-6 md:p-8 project-card">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <Trophy className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Achievements</h3>
                <p className="text-sm text-muted-foreground">Recognition & Awards</p>
              </div>
            </div>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="relative pl-4 border-l-2 border-primary/30">
                  <span className="absolute left-0 top-0 w-2 h-2 rounded-full bg-primary -translate-x-[5px]" />
                  <h4 className="font-medium text-sm">{achievement.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{achievement.year} • {achievement.type}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Strengths Card */}
          <div className="glass-card p-6 md:p-8 project-card md:col-span-2 lg:col-span-1">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Core Strengths</h3>
                <p className="text-sm text-muted-foreground">What drives me</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {strengths.map((strength, index) => (
                <span
                  key={index}
                  className="skill-badge"
                >
                  {strength}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          <div className="glass-card p-6 text-center project-card">
            <div className="text-3xl font-bold gradient-text mb-2">3+</div>
            <p className="text-sm text-muted-foreground">Projects Built</p>
          </div>
          <div className="glass-card p-6 text-center project-card">
            <div className="text-3xl font-bold gradient-text mb-2">9.35</div>
            <p className="text-sm text-muted-foreground">CGPA</p>
          </div>
          <div className="glass-card p-6 text-center project-card">
            <div className="text-3xl font-bold gradient-text mb-2">2</div>
            <p className="text-sm text-muted-foreground">National Awards</p>
          </div>
          <div className="glass-card p-6 text-center project-card">
            <div className="text-3xl font-bold gradient-text mb-2">10+</div>
            <p className="text-sm text-muted-foreground">Technologies</p>
          </div>
        </div>
      </div>
    </section>
  );
}
