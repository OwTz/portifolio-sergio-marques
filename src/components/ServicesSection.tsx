import React from 'react';
import { motion } from 'framer-motion';
import { Code, ShieldCheck, MonitorSmartphone } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Desenvolvimento Web',
    description: 'Criação de sites e aplicações modernas, responsivas e escaláveis.',
  },
  {
    icon: ShieldCheck,
    title: 'Cyber Security',
    description: 'Proteção de sistemas, análise de vulnerabilidades e consultoria em segurança.',
  },
  {
    icon: MonitorSmartphone,
    title: 'UX/UI Design',
    description: 'Design de interfaces intuitivas e experiências digitais envolventes.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Manutenção de Computadores',
    description: 'Manutenção rápida e segura, desde formatação até limpeza completa.',
  },
    {
      icon: MonitorSmartphone,
      title: 'Edição de Imagens e Vídeos',
      description: 'Edição profissional de imagens e vídeos utilizando ferramentas como Photoshop para resultados de alta qualidade.',
    },
];

const ServicesSection: React.FC = () => (
  <section id="servicos" className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
    <div className="container mx-auto px-6 relative z-10">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
      >
        Serviços
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {services.map((service, idx) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + idx * 0.2, duration: 0.6 }}
            className="bg-gray-800/60 rounded-3xl p-8 shadow-lg flex flex-col items-center text-center hover:bg-blue-500/10 transition-all duration-300"
          >
            <service.icon size={48} className="mb-4 text-blue-400" />
            <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-300">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;