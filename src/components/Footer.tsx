import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/OwTz', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/sergiomqs/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:suporte.sergio244@gmail.com', label: 'Email' },
];

const Footer: React.FC = () => (
  <footer className="fixed bottom-0 left-0 w-full bg-gray-900/95 backdrop-blur-md border-t border-gray-700 z-50">
    <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between">
      <div className="text-sm text-gray-400 text-center md:text-left mb-2 md:mb-0">
        © {new Date().getFullYear()} Sérgio Marques. Todos os direitos reservados.
      </div>
      <div className="flex space-x-4 justify-center md:justify-end">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-800/60 border border-gray-700 hover:border-blue-400 hover:bg-blue-500/20 transition-all duration-300"
            aria-label={social.label}
          >
            <social.icon size={20} className="text-blue-400" />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
