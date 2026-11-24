import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 section-fade">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get to know more about my journey, education, and passion for technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="section-fade">
            <h3 className="text-2xl lg:text-3xl font-bold mb-6">My Story</h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm Prashanth S, currently pursuing a B.E. in Artificial Intelligence at Atria Institute of Technology 
              (3rd year, graduating 2027). My passion lies in web development and MERN stack technologies.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I have participated and won in Cyber 2.0 Hackathon, which reinforced my commitment to building 
              innovative digital solutions. My goal is to bridge the gap between artificial intelligence and 
              practical web applications that solve real-world problems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or mentoring fellow students in web development.
            </p>
          </div>

          <div className="section-fade">
            <Card className="hero-card">
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold mb-6 gradient-text">Education</h4>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-accent pl-6">
                    <h5 className="text-xl font-semibold mb-2">B.E. Artificial Intelligence</h5>
                    <p className="text-accent font-medium mb-2">Atria Institute of Technology</p>
                    <p className="text-muted-foreground">Expected Graduation: 2027</p>
                    <p className="text-muted-foreground mt-2">Currently in 3rd year</p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <h5 className="text-lg font-semibold mb-4">Achievements</h5>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-accent rounded-full animate-glow"></div>
                    <span className="text-muted-foreground">Cyber 2.0 Hackathon Winner</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;