const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary/20 border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 gradient-text">Prashanth S</h3>
            <p className="text-muted-foreground mb-4">
              Aspiring Web & MERN Stack Developer passionate about creating innovative digital solutions.
            </p>
            <p className="text-sm text-muted-foreground">
              B.E. AI Student | Hackathon Winner | Web Developer
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  About Me
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  Skills
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-sm">
              <a 
                href="mailto:prashanth1082003@gmail.com" 
                className="text-muted-foreground hover:text-accent transition-colors block"
              >
                prashanth1082003@gmail.com
              </a>
              <a 
                href="tel:916424167" 
                className="text-muted-foreground hover:text-accent transition-colors block"
              >
                +91 6424167
              </a>
              <p className="text-muted-foreground">
                Bangalore, Karnataka, India
              </p>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {currentYear} Prashanth S. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-sm text-accent hover:text-accent/80 transition-colors"
          >
            <span>Back to Top</span>
            <span>↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;