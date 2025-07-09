
import { Database, Globe, Server, Code } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      skills: ['Python', 'Java', 'C++', 'SQL', 'JavaScript'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Globe,
      title: 'Web Development',
      skills: ['HTML', 'CSS', 'React.js', 'Node.js', 'Express.js'],
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: Database,
      title: 'Database & Analytics',
      skills: ['MongoDB', 'MySQL', 'Data Analysis', 'Power BI', 'Pandas'],
      color: 'from-green-500 to-blue-500'
    },
    {
      icon: Server,
      title: 'Tools & Platforms',
      skills: ['PyCharm', 'VS Code', 'Jupyter Notebook', 'Git', 'NetBeans IDE'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const certifications = [
    'Python Certification',
    'Data Analyst Certification',
    'Hackathon Participant - Sentinel Hack 3.0 & 4.0 (2022, 2023)'
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-purple-950/50 to-indigo-950/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 p-6 rounded-2xl backdrop-blur-sm border border-purple-700/30 transform hover:scale-105 transition-all duration-500 shadow-2xl shadow-purple-500/10 group"
            >
              <div className={`inline-block p-3 bg-gradient-to-r ${category.color} rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon size={32} className="text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                {category.title}
              </h3>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="px-3 py-2 bg-purple-800/30 rounded-lg text-purple-300 text-sm hover:bg-purple-700/50 transition-all duration-300 transform hover:scale-105"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-900/50 to-indigo-900/50 p-8 rounded-2xl backdrop-blur-sm border border-purple-700/30 shadow-2xl shadow-purple-500/10">
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">
            Certifications & Achievements
          </h3>
          
          <div className="grid md:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-purple-800/40 to-indigo-800/40 p-4 rounded-xl text-center transform hover:scale-105 transition-all duration-300 border border-purple-600/30 hover:border-purple-500/50"
              >
                <div className="text-purple-300 font-medium">{cert}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
