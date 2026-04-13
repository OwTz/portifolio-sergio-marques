import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  githubLink?: string;
  isExternal?: boolean;
}

const projects: Project[] = [
  {
    title: 'Linktree | Página de Contato',
    description: 'Página de contato moderna para gerenciar links pessoais e profissionais com interface responsiva.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://nutrikassia.netlify.app',
    isExternal: true,
  },
  {
    title: 'Site de Serviços',
    description: 'Site institucional para divulgação de serviços profissionais com apresentação visual atrativa.',
    technologies: ['PHP', 'WordPress', 'MySQL'],
    link: 'https://sergiodev.gt.tc',
    isExternal: true,
  },
  {
    title: 'Consumidor de API Gemini',
    description: 'Aplicação que consome a API do Gemini via requisições HTTP com interface intuitiva.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://ia-gemini.netlify.app/',
    isExternal: true,
  },
  {
    title: 'Pokecreate',
    description: 'Projeto CRUD completo com arquitetura MVC (Model-View-Controller) implementado com versionamento.',
    technologies: ['Python', 'Bootstrap', 'HTML', 'CSS', 'Git/GitHub'],
    link: 'https://github.com/OwTz/Pokecreate',
    githubLink: 'https://github.com/OwTz/Pokecreate',
    isExternal: true,
  },
  {
    title: 'CAR API',
    description: 'API REST completa para gerenciamento de carros com todos os métodos HTTP implementados.',
    technologies: ['Java', 'Spring Boot', 'REST API'],
    link: 'https://github.com/OwTz/car-api-rest',
    githubLink: 'https://github.com/OwTz/car-api-rest',
    isExternal: true,
  },
];

const ProjectsSection: React.FC = () => (
  <section id="projetos" className="py-20 md:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
      >
        Projetos
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + idx * 0.1, duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="group h-full bg-gray-800/40 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 md:p-8 shadow-lg border border-gray-700/50 hover:border-pink-500/50 hover:bg-pink-500/10 transition-all duration-300 flex flex-col"
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-3 text-white group-hover:text-pink-300 transition-colors duration-300">
              {project.title}
            </h3>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 flex-grow">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 md:px-3 py-1 text-xs md:text-sm bg-gray-700/50 text-gray-200 rounded-full font-medium border border-gray-600/50 hover:border-pink-400/50 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-3 flex-wrap">
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 shadow-lg"
              >
                <span>Acessar</span>
                <ExternalLink size={18} />
              </motion.a>

              {project.githubLink && (
                <motion.a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 border border-gray-600 hover:border-gray-500"
                >
                  <span>GitHub</span>
                  <Github size={18} />
                </motion.a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
