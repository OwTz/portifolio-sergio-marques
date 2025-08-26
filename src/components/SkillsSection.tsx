import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Server, Layers, Feather, ShieldCheck } from 'lucide-react';

const skillsTimeline = [
  {
    category: 'Linguagens de Programação',
    items: [
      { name: 'Java', icon: Code },
      { name: 'PHP', icon: Code },
      { name: 'Python', icon: Code },
    ],
  },
  {
    category: 'SGBDs',
    items: [
      { name: 'MySql', icon: Database },
      { name: 'PostgresSql', icon: Database },
    ],
  },
  {
    category: 'Softwares',
    items: [
      { name: 'API', icon: Server },
      { name: 'SPA', icon: Layers },
    ],
  },
  {
    category: 'Frameworks',
    items: [
      { name: 'Springboot', icon: Feather },
      { name: 'TailwindCSS', icon: Feather },
      { name: 'Wordpress', icon: Feather },
    ],
  },
];

const SkillsSection: React.FC = () => (
  <section id="skills" className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
    <div className="container mx-auto px-6 relative z-10">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
      >
        Skills & Tecnologias
      </motion.h2>
      <div className="flex flex-col items-center max-w-4xl mx-auto relative">
        {/* Linha vertical da timeline */}
        <div className="absolute left-1/3 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 opacity-40" />
        {skillsTimeline.map((section, idx) => (
          <motion.div
            key={section.category}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + idx * 0.2, duration: 0.6 }}
            className="relative w-full flex items-center mb-12"
          >
            {/* Ponto da timeline */}
            <div className="absolute left-1/3 transform -translate-x-1/2 w-8 h-8 bg-blue-500/80 rounded-full flex items-center justify-center shadow-lg border-4 border-purple-400">
              <ShieldCheck size={24} className="text-white" />
            </div>
            <div className="ml-auto w-2/3 flex flex-col items-start">
              <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {section.category}
              </h3>
              <div className="flex flex-wrap gap-6">
                {section.items.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-2 bg-gray-800/60 px-4 py-2 rounded-full shadow hover:bg-blue-500/20 transition-all duration-300">
                    <skill.icon size={20} className="text-blue-400" />
                    <span className="text-lg text-gray-200 font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;