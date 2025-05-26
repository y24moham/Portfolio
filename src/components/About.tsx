import AnimatedSection from './AnimatedSection';
import { aboutMe } from '../data/profile';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            About Me
          </h2>
        </AnimatedSection>
        
        <div className="max-w-4xl mx-auto">
          <AnimatedSection delay={1}>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-sm">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                {aboutMe}
              </p>
              
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow-sm">
                  <h3 className="font-semibold text-blue-500 dark:text-blue-400 mb-2">Education</h3>
                  <p className="text-gray-700 dark:text-gray-300">BASc. of Mechatronics Engineering at University of Waterloo</p>
                </div>
                
                <div className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow-sm">
                  <h3 className="font-semibold text-blue-500 dark:text-blue-400 mb-2">Location</h3>
                  <p className="text-gray-700 dark:text-gray-300">Waterloo, Ontario, Canada</p>
                </div>
                
                <div className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow-sm">
                  <h3 className="font-semibold text-blue-500 dark:text-blue-400 mb-2">Interests</h3>
                  <p className="text-gray-700 dark:text-gray-300">Robotics, Embedded Systems, IoT, Control Systems</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;