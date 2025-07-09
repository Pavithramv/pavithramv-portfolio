
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
      title: 'Weather Analysis',
      description: 'Built a comprehensive weather data processing tool with an intuitive UI for analyzing weather patterns and providing detailed forecasts.',
      technologies: ['Python', 'UI/UX', 'Data Processing', 'Weather API'],
      github: 'https://github.com/Pavithramv/Weather-project',
      demo: 'https://weather-project-rouge-alpha.vercel.app/',
      image: '/lovable-uploads/b251a1ce-ad60-465b-8174-aa5dc53f5645.png'
    },
    {
      title: 'Spiogen – 3D LiDAR Data Rendering & Classification Tool',
      description: 'Developed a C++ application to render and process 3D LiDAR data using OpenGL. The system includes manual and automated classification of features such as powerlines and terrain points. Built for high-performance spatial analysis with real-time visualization capabilities.',
      technologies: ['C++', 'GLSL', 'OpenGL', 'Qt Creator', 'GIS'],
      github: '#',
      demo: '#',
      image: '/lovable-uploads/b251a1ce-ad60-465b-8174-aa5dc53f5645.png'
    },
    {
      title: 'Agriculture Data Analysis and Yield Prediction',
      description: 'Analyzed agricultural datasets to identify patterns in crop yield based on factors like soil type, rainfall, and fertilizer usage. Built a machine learning model to predict optimal crop production.',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Jupyter Notebook'],
      github: 'https://github.com/Pavithramv/Agriculture',
      demo: '#',
      image: '/lovable-uploads/b251a1ce-ad60-465b-8174-aa5dc53f5645.png'
    },
    {
      title: 'Flood Prediction and Risk Analysis',
      description: 'Processed weather and geographical data to build a flood prediction model using historical rainfall and water level data, aiding in early warning systems.',
      technologies: ['Python', 'NumPy', 'Pandas', 'Random Forest', 'Matplotlib'],
      github: 'https://github.com/Pavithramv/Flood',
      demo: '#',
      image: '/lovable-uploads/b251a1ce-ad60-465b-8174-aa5dc53f5645.png'
    },
    {
      title: 'Kannada Hate Speech Detection',
      description: 'Built a natural language processing (NLP) model to detect hate speech in Kannada text using labeled datasets and feature extraction techniques.',
      technologies: ['Python', 'NLTK', 'Scikit-learn', 'TF-IDF', 'NLP'],
      github: 'https://github.com/Pavithramv/Hate-Speech-in-Kannada',
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
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-purple-300 hover:text-white transition-colors duration-300 group/link"
                  >
                    <Github size={18} className="group-hover/link:scale-110 transition-transform duration-300" />
                    <span className="text-sm">Code</span>
                  </a>
                  {project.demo !== '#' && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-purple-300 hover:text-white transition-colors duration-300 group/link"
                    >
                      <ExternalLink size={18} className="group-hover/link:scale-110 transition-transform duration-300" />
                      <span className="text-sm">Demo</span>
                    </a>
                  )}
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
