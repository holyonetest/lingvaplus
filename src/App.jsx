import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Programs from './components/Programs'
import WhyUs from './components/WhyUs'
import Quiz from './components/Quiz'
import Reviews from './components/Reviews'
import Gallery from './components/Gallery'
import Faq from './components/Faq'
import Footer from './components/Footer'
import Modal from './components/Modal'
import OrgInfoDrawer from './components/OrgInfoDrawer'

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isOrgInfoOpen, setIsOrgInfoOpen] = useState(false)
  const [selectedProgram, setSelectedProgram] = useState('')

  const openModal = (program = '') => {
    setSelectedProgram(program)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProgram('')
  }

  return (
    <div className="min-h-screen relative overflow-clip">
      {/* Global Background Blobs */}
      <div className="bg-blobs fixed inset-0 pointer-events-none z-[-1]">
        <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-brand-orangeLight/80 blur-[120px] animate-blob" />
        <div className="absolute top-[40%] right-[-5%] w-[500px] h-[500px] rounded-full bg-blue-100/60 blur-[100px] animate-blob" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-[-10%] left-[20%] w-[700px] h-[700px] rounded-full bg-pink-100/50 blur-[120px] animate-blob" style={{ animationDelay: '4s' }} />
      </div>

      {/* Header Navigation */}
      <Header onOpenModal={openModal} onOpenOrgInfo={() => setIsOrgInfoOpen(true)} />

      <main>
        {/* Hero Section */}
        <Hero onOpenModal={openModal} />

        {/* Directions / Programs */}
        <Programs onOpenModal={openModal} />

        {/* Benefits & Summer Intensive */}
        <WhyUs onOpenModal={openModal} />

        {/* Quiz Section */}
        <Quiz />

        {/* Reviews Section */}
        <Reviews />

        {/* Gallery Grid */}
        <Gallery />

        {/* FAQ Section */}
        <Faq />
      </main>

      {/* Footer & Contacts */}
      <Footer onOpenOrgInfo={() => setIsOrgInfoOpen(true)} />

      {/* Booking Form Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        defaultProgram={selectedProgram}
      />

      {/* Legal Org Info Drawer */}
      <OrgInfoDrawer 
        isOpen={isOrgInfoOpen}
        onClose={() => setIsOrgInfoOpen(false)}
      />
    </div>
  )
}
