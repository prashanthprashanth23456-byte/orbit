import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: '💻',
      title: 'Web Development',
      description: 'I specialize in designing and developing modern, responsive, and scalable web applications using the MERN stack.',
      features: ['Responsive Design', 'Modern UI/UX', 'Performance Optimization', 'Cross-browser Compatibility']
    },
    {
      icon: '⚛️',
      title: 'React Applications',
      description: 'Building dynamic and interactive user interfaces with React.js, including state management and component architecture.',
      features: ['Component Design', 'State Management', 'API Integration', 'Testing & Debugging']
    },
    {
      icon: '🛠️',
      title: 'Full-Stack Solutions',
      description: 'End-to-end development services from database design to frontend implementation using modern technologies.',
      features: ['Database Design', 'API Development', 'Authentication', 'Deployment & Hosting']
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 section-fade">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            What I can do for you - from concept to deployment
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={service.title} className="hero-card section-fade" style={{animationDelay: `${index * 0.2}s`}}>
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl">{service.icon}</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 gradient-text">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={scrollToContact}
                  variant="outline" 
                  className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center section-fade">
          <Card className="hero-card max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Let's discuss your ideas and turn them into reality with cutting-edge web technologies.
              </p>
              <Button 
                onClick={scrollToContact}
                className="accent-button text-lg px-8 py-3"
              >
                Let's Work Together
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;