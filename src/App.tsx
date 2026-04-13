
import React from 'react'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#1f2937',
            color: '#f9fafb',
            border: '1px solid #374151'
          },
          success: {
            style: {
              background: '#065f46',
              color: '#ecfdf5'
            }
          }
        }}
      />
      
      <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <SkillsSection />
        <ProjectsSection />
        <Footer />
      </div>
    </>
  )
}

export default App
