import { Mail, Phone, MapPin, Github, Linkedin, Code2, Send } from 'lucide-react';

interface ContactProps {
  personal: {
    name: string;
    email: string;
    phone: string;
    location: string;
  };
  social: {
    linkedin: string;
    github: string;
    leetcode: string;
  };
}

export function Contact({ personal, social }: ContactProps) {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              
              <a
                href={`mailto:${personal.email}`}
                className="glass-card p-5 flex items-center gap-4 project-card group"
              >
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium group-hover:text-primary transition-colors">{personal.email}</p>
                </div>
              </a>

              <a
                href={`tel:${personal.phone}`}
                className="glass-card p-5 flex items-center gap-4 project-card group"
              >
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium group-hover:text-primary transition-colors">{personal.phone}</p>
                </div>
              </a>

              <div className="glass-card p-5 flex items-center gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">{personal.location}</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-6">
                <h4 className="text-sm font-medium text-muted-foreground mb-4">Connect on Social</h4>
                <div className="flex gap-3">
                  <a
                    href={social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl bg-card border border-border hover:border-primary hover:bg-accent transition-all duration-300 group"
                    aria-label="GitHub"
                  >
                    <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                  <a
                    href={social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl bg-card border border-border hover:border-primary hover:bg-accent transition-all duration-300 group"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                  <a
                    href={social.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl bg-card border border-border hover:border-primary hover:bg-accent transition-all duration-300 group"
                    aria-label="LeetCode"
                  >
                    <Code2 className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Message CTA */}
            <div className="glass-card p-8 flex flex-col items-center justify-center text-center">
              <div className="p-4 rounded-2xl bg-primary/10 text-primary mb-6 animate-pulse-glow">
                <Send className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Ready to Collaborate?</h3>
              <p className="text-muted-foreground mb-6">
                Whether you have a project in mind, an opportunity to discuss, or just want to say hello — I'd love to hear from you!
              </p>
              <a
                href={`mailto:${personal.email}?subject=Let's Connect - From Portfolio`}
                className="btn-primary w-full sm:w-auto"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Me an Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
