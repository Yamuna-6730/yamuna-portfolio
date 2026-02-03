import { ArrowDown, Github, Linkedin, Code2, Download, Mail } from 'lucide-react';

interface HeroProps {
  personal: {
    name: string;
    title: string;
    tagline: string;
    photo: string;
    bio: string;
    resumeUrl: string;
    email: string;
  };
  social: {
    linkedin: string;
    github: string;
    leetcode: string;
  };
}

export function Hero({ personal, social }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Animated Background */}
      <div className="animated-bg" />

      <div className="section-container py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="opacity-0 animate-fade-in-up">
              <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
                👋 Welcome to my portfolio
              </span>
            </div>

            <h1 className="opacity-0 animate-fade-in-up delay-100 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Hi, I'm{' '}
              <span className="gradient-text">{personal.name.split(' ')[0]}</span>
            </h1>

            <p className="opacity-0 animate-fade-in-up delay-200 text-xl sm:text-2xl text-muted-foreground font-medium mb-6">
              {personal.title}
            </p>

            <p className="opacity-0 animate-fade-in-up delay-300 text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
              {personal.bio}
            </p>

            {/* CTA Buttons */}
            <div className="opacity-0 animate-fade-in-up delay-400 flex flex-wrap gap-4 mb-8">
              <a href={personal.resumeUrl} download className="btn-primary gap-2">
                <Download className="w-5 h-5" />
                Download Resume
              </a>
              <a href={`mailto:${personal.email}`} className="btn-secondary gap-2">
                <Mail className="w-5 h-5" />
                Get in Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="opacity-0 animate-fade-in-up delay-500 flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Find me on:</span>
              <div className="flex items-center gap-2">
                <a
                  href={social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={social.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                  aria-label="LeetCode"
                >
                  <Code2 className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="opacity-0 animate-fade-in delay-200 relative">
              {/* Decorative Elements */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl" />
              <div className="absolute -inset-8 bg-gradient-to-br from-transparent to-primary/10 rounded-full blur-2xl animate-pulse-glow" />
              
              {/* Image Container */}
              <div className="relative profile-image w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                <img
                  src={personal.photo}
                  alt={personal.name}
                  className="w-full h-full object-cover rounded-full transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 sm:bottom-4 sm:right-0 glass-card px-4 py-3 animate-slide-in-right delay-500">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm font-medium">Open to opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in delay-600">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
