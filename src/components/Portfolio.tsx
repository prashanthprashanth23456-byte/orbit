import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Portfolio = () => {
  const projects = [
    {
      title: 'Drop Are Never Out',
      description: 'A comprehensive web application designed to help students who have dropped out of traditional education by setting personalized goals aligned with their passions and interests.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript'],
      category: 'Web Development',
      status: 'Completed',
      highlights: [
        'User-friendly goal setting interface',
        'Personalized learning paths',
        'Progress tracking system',
        'Responsive design for all devices'
      ]
    },
    {
      title: 'DDCO - Automatic Door Bell System',
      description: 'An innovative digital systems project that showcases practical problem-solving and hardware-software integration for automated door bell functionality.',
      technologies: ['Digital Circuits', 'Hardware Design', 'System Integration'],
      category: 'Digital Systems',
      status: 'Completed',
      highlights: [
        'Automated detection system',
        'Smart notification alerts',
        'Energy-efficient design',
        'Real-world application focus'
      ]
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and Tailwind CSS, showcasing professional work and skills with elegant animations.',
      technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Vite'],
      category: 'Web Development',
      status: 'In Progress',
      highlights: [
        'Modern dark theme design',
        'Smooth animations and transitions',
        'Fully responsive layout',
        'SEO optimized'
      ]
    }
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 section-fade">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing my latest projects and achievements in web development and digital innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card key={project.title} className="hero-card section-fade" style={{animationDelay: `${index * 0.2}s`}}>
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <Badge 
                    variant="secondary" 
                    className="bg-accent/10 text-accent border-accent/20"
                  >
                    {project.category}
                  </Badge>
                  <Badge 
                    variant={project.status === 'Completed' ? 'default' : 'secondary'}
                    className={project.status === 'Completed' ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20'}
                  >
                    {project.status}
                  </Badge>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 gradient-text">{project.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold mb-3 text-accent">Key Highlights:</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-start text-sm">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline" 
                        className="text-xs border-border text-muted-foreground"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <Button variant="outline" className="flex-1 border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                    View Details
                  </Button>
                  {project.status === 'Completed' && (
                    <Button className="flex-1 accent-button">
                      Live Demo
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center section-fade">
          <Card className="hero-card max-w-3xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Cyber 2.0 Hackathon Winner 🏆</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Successfully participated and won the Cyber 2.0 Hackathon, demonstrating strong problem-solving skills, 
                teamwork, and innovative thinking under time constraints.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge className="bg-accent/10 text-accent border-accent/20 px-4 py-2">
                  Winner
                </Badge>
                <Badge className="bg-accent/10 text-accent border-accent/20 px-4 py-2">
                  Innovation
                </Badge>
                <Badge className="bg-accent/10 text-accent border-accent/20 px-4 py-2">
                  Team Leadership
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;