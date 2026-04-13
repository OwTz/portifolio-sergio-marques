
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, MessageCircle } from 'lucide-react'
import toast from 'react-hot-toast'

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { label: 'Início', target: 'hero' },
    { label: 'Skills', target: 'skills' },
    { label: 'Serviços', target: 'servicos' },
    { label: 'Projetos', target: 'projetos' }
  ];

  const handleWhatsAppContact = () => {
    const phoneNumber = '5588998153524' // Substitua pelo número real
    const message = 'Olá! Gostaria de conversar sobre seus serviços.'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    toast.success('Redirecionando para WhatsApp...')
  }

  const handleMenuClick = (item: { label: string; target: string }) => {
    setIsMenuOpen(false);
    const section = document.getElementById(item.target);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      toast.success(`Navegando para: ${item.label}`);
    } else {
      toast.error('Seção não encontrada!');
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-700"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Sérgio Marques
            </h1>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.target}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, color: '#60a5fa' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleMenuClick(item)}
                  className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </div>

          {/* WhatsApp Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWhatsAppContact}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full flex items-center space-x-2 transition-colors duration-200"
            >
              <MessageCircle size={16} />
              <span className="hidden sm:inline">WhatsApp</span>
            </motion.button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-800 border-t border-gray-700"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.target}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleMenuClick(item)}
                  className="text-gray-300 hover:text-blue-400 block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200"
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
