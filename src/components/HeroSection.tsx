
import React from 'react';
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import { ChevronDown, Github, Linkedin, Mail, Instagram } from 'lucide-react';

const HeroSection: React.FC = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/OwTz', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/sergiomqs/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:suporte.sergio244@gmail.com', label: 'Email' },
    { icon: Instagram, href: 'https://www.instagram.com/m4rquesszx/', label: 'Instagram' },
  ];

  return (
  <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/20 to-purple-500/20"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8"
          >
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg md:text-xl lg:text-2xl text-gray-300 font-light"
            >
              Olá, eu sou
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight"
            >
              Sérgio Marques
            </motion.h1>

            {/* Typed Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-200 font-medium h-12 md:h-16 flex items-center justify-center"
            >
              <ReactTyped
                strings={[
                  'Desenvolvedor Full-Stack',
                  'Cyber Security',
                  'API padrão Restful',
                  'JAVA',
                  'PHP',
                  'Python'
                ]}
                typeSpeed={50}
                backSpeed={30}
                backDelay={2000}
                loop
                className="text-blue-400"
              />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="text-base md:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed px-4"
            >
              Desenvolvedor Full-stack com foco em Java, PHP e Node.js. Especializado na criação de
aplicações web utilizando padrão RESTful, desenvolvimento de APIs robustas e escaláveis.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mt-8 md:mt-12 px-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 text-sm md:text-base"
              >
                Ver Meu Trabalho
              </motion.button>
              
              <motion.a
                href="https://www.linkedin.com/in/sergiomqs/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 border-2 border-gray-400 text-gray-300 font-semibold rounded-full hover:border-white hover:text-white transition-all duration-300 cursor-pointer text-sm md:text-base"
              >
                Entrar em Contato
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.0, duration: 0.6 }}
              className="flex justify-center gap-4 md:gap-6 mt-8 md:mt-12 flex-wrap"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.2 + index * 0.1, duration: 0.4 }}
                  className="p-2 md:p-3 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700 hover:border-blue-400 hover:bg-blue-500/20 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} className="md:w-6 md:h-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.6 }}
            className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center text-gray-400"
            >
              <span className="text-sm mb-2">Scroll</span>
              <ChevronDown size={24} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
