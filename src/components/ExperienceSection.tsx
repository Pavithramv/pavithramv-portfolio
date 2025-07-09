
import { Calendar, MapPin, Building, GraduationCap } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Software Developer Trainee',
      company: 'Q-gate Infotech Private Limited',
      location: 'Bengaluru, Karnataka',
      period: 'November 2024 - Present',
      description: [
        'Designed and implemented optimized algorithms for advanced data transformations and spatial computations',
        'Enhanced performance and precision in processing complex datasets',
        'Worked on projects involving 3D spatial data analysis and geometric computations',
        'Ensured scalability and accuracy in deliverables'
      ],
      icon: Building
    },
    {
      type: 'work',
      title: 'Data Analyst Intern',
      company: 'AI Bricks',
      location: 'Bengaluru, Karnataka',
      period: 'October 2023 - April 2024',
      description: [
        'Performed exploratory data analysis (EDA) on large datasets using Python and SQL',
        'Identified key patterns and trends to enhance model accuracy and system reliability',
        'Collaborated with cross-functional teams to deliver data-driven insights',
        'Developed automated data processing pipelines'
      ],
      icon: Building
    }
  ];

  const education = [
    {
      degree: 'B.E. in Computer Science and Engineering',
      institution: 'T John Institute of Technology',
      location: 'Bangalore, Karnataka',
      period: 'August 2020 - July 2024',
      cgpa: '8.43',
      icon: GraduationCap
    },
    {
      degree: 'Pre-University Course (PCMCs)',
      institution: 'NMKRV PU College',
      location: 'Bangalore, Karnataka',
      period: 'October 2018 - May 2020',
      percentage: '73.8%',
      icon: GraduationCap
    },
    {
      degree: 'High School',
      institution: 'St Joseph Public School',
      location: 'Bangalore, Karnataka',
      period: 'April 2018',
      percentage: '89.6%',
      icon: GraduationCap
    }
  ];

  const achievements = [
    'Active participant in "Sentinel Hack" 3.0 and 4.0 (2022, 2023)',
    'Python and Data Analyst Certified',
    'Strong foundation in multiple programming languages',
    'Experience in collaborative team environments'
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-b from-purple-950/50 to-indigo-950/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </div>

        {/* Work Experience */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-white mb-8 text-center">Work Experience</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-r from-purple-900/50 to-indigo-900/50 p-8 rounded-2xl backdrop-blur-sm border border-purple-700/30 transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-purple-500/10"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
                    <exp.icon size={24} className="text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-1">{exp.title}</h4>
                        <p className="text-purple-300 font-medium">{exp.company}</p>
                      </div>
                      <div className="flex flex-col md:items-end text-sm text-gray-400 mt-2 md:mt-0">
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center mt-1">
                          <MapPin size={16} className="mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-300 flex items-start">
                          <span className="text-purple-400 mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-white mb-8 text-center">Education</h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-purple-900/50 to-indigo-900/50 p-6 rounded-xl backdrop-blur-sm border border-purple-700/30 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/20"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                    <edu.icon size={24} className="text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">{edu.degree}</h4>
                        <p className="text-purple-300">{edu.institution}</p>
                        <p className="text-gray-400 text-sm">{edu.location}</p>
                      </div>
                      <div className="text-right mt-2 md:mt-0">
                        <p className="text-gray-400 text-sm">{edu.period}</p>
                        {edu.cgpa && (
                          <p className="text-purple-300 font-semibold">CGPA: {edu.cgpa}</p>
                        )}
                        {edu.percentage && (
                          <p className="text-purple-300 font-semibold">{edu.percentage}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-3xl font-semibold text-white mb-8 text-center">Certifications & Achievements</h3>
          <div className="bg-gradient-to-r from-purple-900/50 to-indigo-900/50 p-8 rounded-2xl backdrop-blur-sm border border-purple-700/30 shadow-2xl shadow-purple-500/10">
            <div className="grid md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-purple-800/30 rounded-lg hover:bg-purple-700/40 transition-all duration-300"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />
                  <span className="text-gray-300">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
