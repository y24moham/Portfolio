import { motion } from 'framer-motion';
import { Project } from '../types';
import AnimatedSection from './AnimatedSection';

interface ProjectsProps {
  projects: Project[];
}

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            Projects
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index}>
              <motion.div 
                className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="h-48 bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center">
                  <h3 className="text-xl font-bold text-white px-4 text-center">
                    {project.title}
                  </h3>
                </div>
                
                <div className="p-6">
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    {project.date}
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, i) => (
                      <span 
                        key={i} 
                        className="text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;