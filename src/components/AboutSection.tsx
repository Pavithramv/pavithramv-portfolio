
import { Award, Code, GraduationCap, MapPin } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: Code, value: '10+', label: 'Projects Completed' },
    { icon: GraduationCap, value: '8.43', label: 'CGPA' },
    { icon: Award, value: '2+', label: 'Years Learning' },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-900/50 to-indigo-900/50 p-8 rounded-2xl backdrop-blur-sm border border-purple-700/30 transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-purple-500/10">
              <div className="flex items-center mb-4">
                <MapPin className="text-purple-400 mr-2" size={20} />
                <span className="text-purple-300">Bengaluru, Karnataka</span>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm a passionate Software Developer with expertise in designing efficient algorithms, 
                data transformations, and scalable solutions. Currently working as a Software Developer 
                Trainee at Q-gate Infotech Private Limited, where I focus on advanced data transformations 
                and spatial computations.
              </p>

              <p className="text-gray-300 leading-relaxed mb-6">
                My journey in technology started with a strong foundation in Computer Science and Engineering 
                from T John Institute of Technology. I have hands-on experience with multiple programming 
                languages including Python, Java, C++, and modern web technologies.
              </p>

              <p className="text-gray-300 leading-relaxed">
                I believe in continuous learning and have actively participated in hackathons like 
                'Sentinel Hack' 3.0 and 4.0. I'm committed to driving organizational success as a 
                collaborative team player and always eager to take on new challenges.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-purple-900/50 to-indigo-900/50 p-6 rounded-xl backdrop-blur-sm border border-purple-700/30 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/20 group"
              >
                <div className="flex items-center">
                  <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg mr-4 group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-300">
                    <stat.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                      {stat.value}
                    </div>
                    <div className="text-purple-300">{stat.label}</div>
                  </div>
                </div>
              </div>
            ))}

            <div className="bg-gradient-to-r from-purple-900/50 to-indigo-900/50 p-6 rounded-xl backdrop-blur-sm border border-purple-700/30 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/20">
              <h3 className="text-xl font-semibold text-white mb-4">Quick Facts</h3>
              <ul className="space-y-2 text-gray-300">
                <li>📧 pavithramv064@gmail.com</li>
                <li>📱 +91 6361009538</li>
                <li>🎓 B.E. Computer Science & Engineering</li>
                <li>💼 Software Developer Trainee @ Q-gate Infotech</li>
                <li>🏆 Hackathon Participant (Sentinel Hack 3.0 & 4.0)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
