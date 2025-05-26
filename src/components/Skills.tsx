import { motion } from 'framer-motion';
import { SkillCategory, Skill } from '../types';
import AnimatedSection from './AnimatedSection';

interface SkillsProps {
  categories: SkillCategory[];
}

const SkillBar = ({ skill }: { skill: Skill }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
        {skill.level && (
          <span className="text-gray-500 dark:text-gray-400 text-sm">{skill.level}%</span>
        )}
      </div>
      
      {skill.level && (
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <motion.div 
            className="bg-blue-500 h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${skill.level}%` }}
            transition={{ duration: 1, delay: 0.2 }}
          ></motion.div>
        </div>
      )}
    </div>
  );
};

const Skills = ({ categories }: SkillsProps) => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            Skills
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, categoryIndex) => (
            <AnimatedSection key={category.id} delay={categoryIndex}>
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-blue-500 dark:text-blue-400 mb-6">
                  {category.title}
                </h3>
                
                <div>
                  {category.skills.map((skill) => (
                    <SkillBar key={skill.id} skill={skill} />
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;