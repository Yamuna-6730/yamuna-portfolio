import { Code, Brain, Database, Cloud, BarChart3, Globe } from 'lucide-react';

interface SkillsProps {
  skills: {
    programming: string[];
    machineLearning: string[];
    mlFrameworks: string[];
    dataVisualization: string[];
    webDevelopment: string[];
    cloudAndTools: string[];
  };
}

const skillCategories = [
  { key: 'programming', label: 'Programming Languages', icon: Code, color: 'from-blue-500 to-cyan-500' },
  { key: 'machineLearning', label: 'Machine Learning', icon: Brain, color: 'from-purple-500 to-pink-500' },
  { key: 'mlFrameworks', label: 'ML Frameworks', icon: Database, color: 'from-orange-500 to-red-500' },
  { key: 'dataVisualization', label: 'Data Visualization', icon: BarChart3, color: 'from-green-500 to-emerald-500' },
  { key: 'webDevelopment', label: 'Web Development', icon: Globe, color: 'from-indigo-500 to-violet-500' },
  { key: 'cloudAndTools', label: 'Cloud & Tools', icon: Cloud, color: 'from-teal-500 to-cyan-500' },
];

export function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className="py-20 md:py-32 bg-muted/30">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Technical Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning machine learning, data analytics, and full-stack development.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            const categorySkills = skills[category.key as keyof typeof skills] || [];
            
            return (
              <div key={category.key} className="glass-card p-6 project-card group">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-lg">{category.label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {categorySkills.map((skill, index) => (
                    <span
                      key={index}
                      className="skill-badge"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
