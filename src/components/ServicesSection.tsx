import React from 'react';
import { motion } from 'framer-motion';
import { Code, Wrench, Network, BookOpen, Smartphone, Code2 } from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: 'Manutenção de Computadores',
    description: 'Manutenção, reparação e otimização de computadores com segurança total.',
  },
  {
    icon: Network,
    title: 'Redes de Computadores',
    description: 'Configuração, gerenciamento e suporte de infraestrutura de redes.',
  },
  {
    icon: Code,
    title: 'Desenvolvimento de Sistemas',
    description: 'Criação de sistemas e aplicações personalizadas e escaláveis.',
  },
  {
    icon: Code2,
    title: 'Criação de Sites',
    description: 'Design e desenvolvimento de sites modernos, responsivos e otimizados.',
  },
  {
    icon: BookOpen,
    title: 'Mentorias Personalizadas',
    description: 'Orientação personalizada em programação, desenvolvimento e tecnologia.',
  },
];

const ServicesSection: React.FC = () => (
  <section id="servicos" className="py-20 md:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
      >
        Serviços
      </motion.h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
        {services.map((service, idx) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + idx * 0.1, duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="group bg-gray-800/40 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 md:p-8 shadow-lg border border-gray-700/50 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 transform hover:scale-105"
          >
            <div className="flex justify-center mb-4 md:mb-6">
              <div className="p-3 md:p-4 bg-blue-500/20 rounded-xl group-hover:bg-blue-500/40 transition-all duration-300">
                <service.icon size={32} className="text-blue-400 md:w-10 md:h-10" />
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-3 text-center">{service.title}</h3>
            <p className="text-gray-300 text-center text-sm md:text-base leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;