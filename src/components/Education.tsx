import { GraduationCap as Graduation } from 'lucide-react';
import { Education as EducationType, Certificate } from '../types';
import AnimatedSection from './AnimatedSection';

interface EducationProps {
  education: EducationType;
  certificates: Certificate[];
}

const Education = ({ education, certificates }: EducationProps) => {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            Education & Certifications
          </h2>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedSection delay={1} className="md:col-span-2">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm h-full">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                  <Graduation className="text-blue-500 dark:text-blue-400" size={24} />
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {education.degree}
                  </h3>
                  <p className="text-blue-500 dark:text-blue-400 font-medium mb-1">
                    {education.institution}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                    {education.date}
                  </p>
                  {education.gpa && (
                    <p className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm px-2 py-1 rounded-full mb-4">
                      {education.gpa}
                    </p>
                  )}
                  <p className="text-gray-700 dark:text-gray-300">
                    {education.details}
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={2}>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm h-full">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Certifications
              </h3>
              
              <ul className="space-y-4">
                {certificates.map((cert) => (
                  <li key={cert.id} className="border-l-2 border-blue-500 pl-4 py-1">
                    <p className="font-medium text-gray-800 dark:text-gray-200">
                      {cert.name}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      {cert.date}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Education;