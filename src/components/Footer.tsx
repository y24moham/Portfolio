import { Github, Linkedin, Mail } from 'lucide-react';
import { ContactInfo } from '../types';

interface FooterProps {
  contactInfo: ContactInfo;
}

const Footer = ({ contactInfo }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">
              YM<span className="text-blue-500">.</span>
            </h3>
            <p className="text-gray-400">
              Mechatronics Engineer & Developer
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://github.com/y24moham"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href={`mailto:${contactInfo.email}`}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Yaseen Mohamed. All rights reserved.
          </p>
          
          <ul className="flex space-x-8">
            <li>
              <a href="#about" className="text-gray-400 hover:text-white text-sm transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#experience" className="text-gray-400 hover:text-white text-sm transition-colors">
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" className="text-gray-400 hover:text-white text-sm transition-colors">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-400 hover:text-white text-sm transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;