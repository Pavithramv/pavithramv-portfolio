
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'AI-Based Hospital Recommendation Using Blockchain',
      description: 'Developed a secure platform for predicting hospital and treatment costs using AI, integrated with blockchain for fundraising and data integrity.',
      technologies: ['AI/ML', 'Blockchain', 'Python', 'Data Analysis'],
      github: '#',
      demo: '#',
      image: '/lovable-uploads/b251a1ce-ad60-465b-8174-aa5dc53f5645.png'
    },
    {
      title: 'Weather Analysis & Aeroplane Game',
      description: 'Built a weather data processing tool with UI and designed a 2D obstacle-avoidance game with interactive gameplay mechanics.',
      technologies: ['Python', 'UI/UX', 'Game Development', 'Data Processing'],
      github: '#',
      demo: '#',
      image: '/lovable-uploads/b251a1ce-ad60-465b-8174-aa5dc53f5645.png'
    },
    {
      title: 'Data Analysis Dashboard',
      description: 'Performed exploratory data analysis (EDA) on large datasets using Python and SQL, identifying key patterns and trends to enhance model accuracy.',
      technologies: ['Python', 'SQL', 'Pandas', 'Data Visualization'],
      github: '#',
      demo: '#',
      image: '/lovable-uploads/b251a1ce-ad60-465b-8174-aa5dc53f5645.png'
    },
    {
      title: 'Spatial Data Analysis Tool',
      description: 'Designed and implemented optimized algorithms for advanced data transformations and spatial computations for complex datasets.',
      technologies: ['Python', 'Spatial Analysis', 'Algorithms', 'Data Processing'],
      github: '#',
      demo: '#',
      image: '/lovable-uploads/b251a1ce-ad60-465b-8174-aa5dc53f5645.png'
    },
    {
      title: '3D Spatial Computing Platform',
      description: 'Worked on projects involving 3D spatial data analysis and geometric computations, ensuring scalability and accuracy in deliverables.',
      technologies: ['3D Computing', 'Geometric Analysis', 'Python', 'Algorithms'],
      github: '#',
      demo: '#',
      image: '/lovable-uploads/b251a1ce-ad60-465b-8174-aa5dc53f5645.png'
    },
    {
      title: 'Machine Learning Model Pipeline',
      description: 'Built comprehensive ML pipeline for data preprocessing, model training, and deployment with focus on system reliability.',
      technologies: ['Machine Learning', 'Python', 'Model Deployment', 'Data Pipeline'],
      github: '#',
      demo: '#',
      image: '/lovable-uploads/b251a1ce-ad60-465b-8174-aa5dc53f5645.png'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-purple-900/50 to-indigo-900/50 rounded-2xl overflow-hidden backdrop-blur-sm border border-purple-700/30 transform hover:scale-105 transition-all duration-500 shadow-2xl shadow-purple-500/10"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative p-6">
                <div className="w-full h-48 bg-gradient-to-br from-purple-800/50 to-indigo-800/50 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <div className="text-6xl text-purple-400 opacity-50">💻</div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-purple-800/50 text-purple-300 text-xs rounded-full border border-purple-600/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center space-x-2 text-purple-300 hover:text-white transition-colors duration-300 group/link"
                  >
                    <Github size={18} className="group-hover/link:scale-110 transition-transform duration-300" />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center space-x-2 text-purple-300 hover:text-white transition-colors duration-300 group/link"
                  >
                    <ExternalLink size={18} className="group-hover/link:scale-110 transition-transform duration-300" />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>

              <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500/50 rounded-2xl transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
