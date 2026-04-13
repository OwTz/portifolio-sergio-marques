import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, BookMarked } from 'lucide-react';

const skillsData = [
  {
    category: 'Linguagens de Programação',
    icon: Code,
    items: ['Java', 'PHP', 'Node.js', 'Python'],
  },
  {
    category: 'Frameworks',
    icon: BookMarked,
    items: ['Spring Boot', 'Django', 'WordPress', 'Bootstrap'],
  },
  {
    category: 'SGBDs',
    icon: Database,
    items: ['MongoDB', 'MySQL', 'PostgreSQL'],
  },
];

const SkillsSection: React.FC = () => (
  <section id="skills" className="py-20 md:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
      >
        Skills & Tecnologias
      </motion.h2>

      {/* Grid para dispositivos móveis e desktop */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-12">
        {skillsData.map((skillGroup, idx) => (
          <motion.div
            key={skillGroup.category}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + idx * 0.1, duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-gray-800/40 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 md:p-8 border border-gray-700/50 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300"
          >
            <div className="flex items-center gap-3 md:gap-4 mb-6">
              <div className="p-2 md:p-3 bg-purple-500/20 rounded-lg">
                <skillGroup.icon size={28} className="text-purple-400 md:w-8 md:h-8" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {skillGroup.category}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2 md:gap-3">
              {skillGroup.items.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 md:px-4 py-1 md:py-2 bg-gray-700/50 hover:bg-blue-500/30 rounded-full text-xs md:text-sm text-gray-200 font-medium transition-all duration-300 border border-gray-600/50 hover:border-blue-400/50"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;