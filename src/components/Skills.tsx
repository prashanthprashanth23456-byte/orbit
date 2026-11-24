import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const skills = [
    { name: 'JavaScript', level: 85, category: 'Languages' },
    { name: 'Python', level: 80, category: 'Languages' },
    { name: 'Java', level: 75, category: 'Languages' },
    { name: 'React.js', level: 90, category: 'Frontend' },
    { name: 'HTML/CSS', level: 95, category: 'Frontend' },
    { name: 'Node.js', level: 75, category: 'Backend' },
    { name: 'MongoDB', level: 80, category: 'Database' },
    { name: 'Express.js', level: 70, category: 'Backend' }
  ];

  const categories = ['Languages', 'Frontend', 'Backend', 'Database'];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 section-fade">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {categories.map((category, index) => (
            <Card key={category} className="hero-card section-fade" style={{animationDelay: `${index * 0.1}s`}}>
              <CardContent className="p-6 text-center">
                <h4 className="text-lg font-bold mb-4 gradient-text">{category}</h4>
                <div className="space-y-4">
                  {skills
                    .filter(skill => skill.category === category)
                    .map(skill => (
                      <div key={skill.name} className="text-left">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-xs text-accent">{skill.level}%</span>
                        </div>
                        <Progress 
                          value={skill.level} 
                          className="h-2 bg-secondary"
                        />
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 section-fade">
          <Card className="hero-card text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="text-xl font-bold mb-3">Problem Solving</h4>
              <p className="text-muted-foreground">
                Strong analytical thinking and creative problem-solving abilities developed through hackathons and projects.
              </p>
            </CardContent>
          </Card>

          <Card className="hero-card text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="text-xl font-bold mb-3">Fast Learner</h4>
              <p className="text-muted-foreground">
                Quick to adapt to new technologies and frameworks, always staying updated with industry trends.
              </p>
            </CardContent>
          </Card>

          <Card className="hero-card text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h4 className="text-xl font-bold mb-3">Team Player</h4>
              <p className="text-muted-foreground">
                Excellent collaboration skills with experience in team projects and hackathon environments.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;