import { Button } from '@/components/ui/button';
import prashanthProfile from '@/assets/prashanth-profile-new.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-up">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="gradient-text">Prashanth S</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Aspiring Web & MERN Stack Developer | AI Enthusiast | Hackathon Winner
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Currently pursuing B.E. in Artificial Intelligence at Atria Institute of Technology. 
              Passionate about creating impactful digital solutions and building modern web applications.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={() => scrollToSection('portfolio')}
                className="accent-button text-lg px-8 py-3"
              >
                View My Work
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="text-lg px-8 py-3 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              >
                Get In Touch
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="hero-card rounded-2xl p-8 max-w-md">
              <div className="relative">
                <img 
                  src={prashanthProfile} 
                  alt="Prashanth S - Profile" 
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-xl"></div>
              </div>
              
              <div className="mt-6 text-center">
                <h3 className="text-xl font-semibold mb-2">Prashanth S</h3>
                <p className="text-muted-foreground mb-3">B.E. AI Student | Web Developer</p>
                <div className="flex justify-center space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center animate-float">
                    <span className="text-accent font-bold">JS</span>
                  </div>
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center animate-float" style={{animationDelay: '0.5s'}}>
                    <span className="text-accent font-bold">React</span>
                  </div>
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center animate-float" style={{animationDelay: '1s'}}>
                    <span className="text-accent font-bold">AI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;