import { motion } from 'framer-motion';
import { TimelineItem } from '../types';
import AnimatedSection from './AnimatedSection';

interface TimelineProps {
  items: TimelineItem[];
  title: string;
}

const Timeline = ({ items, title }: TimelineProps) => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            {title}
          </h2>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          {items.map((item, index) => (
            <AnimatedSection key={item.id} delay={index}>
              <div className="mb-12 relative">
                {/* Timeline line */}
                {index < items.length - 1 && (
                  <div className="absolute left-8 md:left-1/2 top-8 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-900 transform md:-translate-x-1/2"></div>
                )}
                
                <div className="flex flex-col md:flex-row items-start">
                  {/* Date section - left on desktop, top on mobile */}
                  <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                    <div className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-sm inline-block">
                      <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                        {item.date}
                      </h3>
                      <p className="text-blue-500 dark:text-blue-400 font-medium">
                        {item.organization}
                      </p>
                    </div>
                  </div>

                  {/* Circle in the middle */}
                  <div className="hidden md:block absolute left-1/2 top-6 w-4 h-4 rounded-full bg-blue-500 transform -translate-x-1/2 z-10"></div>
                  
                  {/* Circle for mobile view */}
                  <div className="md:hidden absolute left-8 top-6 w-4 h-4 rounded-full bg-blue-500 z-10"></div>

                  {/* Content section - right on desktop, bottom on mobile */}
                  <div className="md:w-1/2 md:pl-12 pl-16 md:pl-12">
                    <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
                      <div className="flex items-center gap-4 mb-4">
                        {item.image && (
                          <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                            <img 
                              src={item.image} 
                              alt={item.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        <h3 className="font-bold text-xl text-gray-900 dark:text-white">
                          {item.title}
                        </h3>
                      </div>
                      <ul className="space-y-2">
                        {item.description.map((desc, i) => (
                          <li key={i} className="text-gray-700 dark:text-gray-300 pl-4 border-l-2 border-gray-200 dark:border-gray-700">
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;