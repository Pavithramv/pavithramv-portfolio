
import { Code, Database, Lightbulb, Users } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { number: '1+', label: 'Years Experience' },
    { number: '15+', label: 'Projects Completed' },
    { number: '5+', label: 'Technologies Mastered' },
    { number: '100%', label: 'Client Satisfaction' }
  ];

  const highlights = [
    {
      icon: Code,
      title: 'Software Development',
      description: 'Skilled in multiple programming languages with focus on efficient algorithm design and data transformations.'
    },
    {
      icon: Database,
      title: 'Data Analysis',
      description: 'Expert in exploratory data analysis, pattern recognition, and building data-driven insights using Python and SQL.'
    },
    {
      icon: Lightbulb,
      title: 'Problem Solving',
      description: 'Strong analytical mindset with experience in spatial computing, 3D data processing, and complex system optimization.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Proven ability to work effectively in cross-functional teams and deliver scalable solutions.'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-purple-950/30 to-indigo-950/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-900/50 to-indigo-900/50 p-8 rounded-2xl backdrop-blur-sm border border-purple-700/30 shadow-2xl shadow-purple-500/10">
              <h3 className="text-2xl font-semibold text-white mb-4">My Journey</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm a passionate Software Developer and Data Analyst with over 1+ years of experience in designing 
                efficient algorithms, data transformations, and scalable solutions. My expertise spans across 
                multiple programming languages and cutting-edge technologies.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Currently working as a Software Developer Trainee at Q-gate Infotech, I specialize in 3D spatial 
                data analysis, geometric computations, and advanced data processing. I have a strong foundation 
                in machine learning, data visualization, and system optimization.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I'm passionate about leveraging technology to solve complex problems and drive innovation. 
                Whether it's developing AI-powered solutions, analyzing large datasets, or creating intuitive 
                user experiences, I thrive on turning ideas into reality.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-purple-900/50 to-indigo-900/50 p-6 rounded-xl backdrop-blur-sm border border-purple-700/30 text-center transform hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/20"
                >
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-purple-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-4">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 p-4 rounded-xl backdrop-blur-sm border border-purple-700/20 transform hover:scale-105 transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-300">
                      <highlight.icon size={20} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-1">{highlight.title}</h4>
                      <p className="text-gray-400 text-sm">{highlight.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
