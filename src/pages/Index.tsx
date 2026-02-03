import { useResumeData } from '@/hooks/useResumeData';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Experience } from '@/components/Experience';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  const { data, loading, error } = useResumeData();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          <p className="text-muted-foreground">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-destructive mb-2">Error Loading Portfolio</h1>
          <p className="text-muted-foreground">{error || 'Failed to load resume data'}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar social={data.social} />
      
      <main>
        <Hero personal={data.personal} social={data.social} />
        <About
          personal={data.personal}
          education={data.education}
          achievements={data.achievements}
          strengths={data.strengths}
        />
        <Skills skills={data.skills} />
        <Projects projects={data.projects} />
        <Experience experience={data.experience} achievements={data.achievements} />
        <Contact personal={data.personal} social={data.social} />
      </main>
      
      <Footer personal={data.personal} social={data.social} />
    </div>
  );
};

export default Index;
