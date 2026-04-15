import React from 'react';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const socialLinks = [
  { icon: Github, href: 'https://github.com/OwTz', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/sergiomqs/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:suporte.sergio244@gmail.com', label: 'Email' },
  { icon: Instagram, href: 'https://www.instagram.com/_.m4rquessz/', label: 'Instagram' },
];

const Footer: React.FC = () => (
  <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-t border-gray-700 z-40">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-8">
        {/* Branding */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center sm:text-left"
        >
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
            Sérgio Marques
          </h3>
          <p className="text-gray-400 text-sm md:text-base">Desenvolvedor Full-Stack</p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center"
        >
          <h4 className="font-semibold text-white mb-3 text-sm md:text-base">Links Rápidos</h4>
          <div className="flex flex-col gap-1 md:gap-2 text-gray-400 text-xs md:text-sm">
            <a href="#hero" className="hover:text-blue-400 transition-colors">Início</a>
            <a href="#servicos" className="hover:text-blue-400 transition-colors">Serviços</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
            <a href="#projetos" className="hover:text-blue-400 transition-colors">Projetos</a>
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center sm:text-right"
        >
          <h4 className="font-semibold text-white mb-3 text-sm md:text-base">Contato</h4>
          <div className="text-gray-400 text-xs md:text-sm space-y-1">
            <p>suporte.sergio244@gmail.com</p>
            <p>+55 (88) 99815-3524</p>
          </div>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-6"></div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="flex justify-center gap-4 mb-6"
      >
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 + index * 0.05 }}
            viewport={{ once: true }}
            className="p-2 md:p-3 rounded-full bg-gray-800/60 border border-gray-700 hover:border-blue-400 hover:bg-blue-500/20 transition-all duration-300"
            aria-label={social.label}
          >
            <social.icon size={18} className="md:w-6 md:h-6 text-blue-400" />
          </motion.a>
        ))}
      </motion.div>

      {/* Copyright */}
      <div className="text-center text-xs md:text-sm text-gray-400 border-t border-gray-700 pt-6">
        <p>© {new Date().getFullYear()} Sérgio Marques. Todos os direitos reservados.</p>
        <p className="mt-2">Desenvolvido com o <span className="text-pink-400">♥</span> usando React, TypeScript e Tailwind CSS</p>
      </div>
    </div>
  </footer>
);

export default Footer;
