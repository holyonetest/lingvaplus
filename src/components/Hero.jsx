import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Hero({ onOpenModal }) {
  const [isCtaHovered, setIsCtaHovered] = useState(false)

  const handleScrollToQuiz = (e) => {
    e.preventDefault()
    const element = document.querySelector('#quiz')
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center py-12 pb-16">


      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center relative z-10">
        {/* Left column */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="md:col-span-7 flex flex-col items-start space-y-6 text-left"
        >
          <div className="inline-flex items-center space-x-2 bg-brand-orangeLight text-brand-orange px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide animate-pulse">
            <span>🦊 Языковая школа в Ульяновске</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-brand-dark leading-[1.1] tracking-tight">
            Английский, который <br className="hidden sm:inline" />
            <span className="text-brand-orange">нравится детям</span>
          </h1>

          <p className="text-lg sm:text-xl text-brand-gray font-medium max-w-xl">
            Учим понимать, говорить и не бояться языка 💬
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
            <button 
              onClick={() => onOpenModal('english-school')}
              onMouseEnter={() => setIsCtaHovered(true)}
              onMouseLeave={() => setIsCtaHovered(false)}
              className="px-8 py-4 bg-brand-orange hover:bg-brand-orangeHover text-white font-bold rounded-2xl shadow-xl shadow-brand-orange/20 hover:shadow-2xl hover:shadow-brand-orange/30 transform active:scale-98 transition-all duration-200 text-center text-lg"
            >
              Записаться на урок
            </button>
            <a 
              href="#quiz"
              onClick={handleScrollToQuiz}
              className="px-8 py-4 bg-brand-lightGray border border-gray-200 hover:border-brand-orange hover:text-brand-orange text-brand-gray font-semibold rounded-2xl transition-all duration-200 text-center text-lg flex items-center justify-center space-x-2"
            >
              <span>Подобрать программу 🎯</span>
            </a>
          </div>

          {/* Stats or trust factors */}
          <div className="pt-6 grid grid-cols-3 gap-3 sm:gap-6 w-full max-w-md glass-card p-4 sm:p-6 rounded-3xl mt-4">
            <div className="text-center sm:text-left">
              <p className="text-3xl font-black text-brand-dark flex items-center justify-center sm:justify-start space-x-1">
                <span>4.7</span>
                <svg className="w-6 h-6 text-amber-500 fill-current mb-1" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              </p>
              <p className="text-xs text-brand-gray font-medium mt-1">Рейтинг Яндекс</p>
            </div>
            <div className="text-center sm:text-left border-l border-gray-200/50 pl-6">
              <p className="text-3xl font-black text-brand-dark">3+</p>
              <p className="text-xs text-brand-gray font-medium mt-1">Возраст детей</p>
            </div>
            <div className="text-center sm:text-left border-l border-gray-200/50 pl-6">
              <p className="text-3xl font-black text-brand-dark">100%</p>
              <p className="text-xs text-brand-gray font-medium mt-1">Интерактивно</p>
            </div>
          </div>
        </motion.div>

        {/* Right column (Mascot) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
          className="lg:col-span-5 flex justify-center items-center relative"
        >
          {/* Main animated mascot container */}
          <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
            {/* Glassmorphism pedestal/backing */}
            <div className="absolute inset-4 sm:inset-10 glass-card rounded-[40px] rotate-3 opacity-60" />
            <div className="absolute inset-4 sm:inset-10 glass-card rounded-[40px] -rotate-3 opacity-80" />
            
            {/* 3D Mascot Placeholder (Video / Image) */}
            <motion.div 
              animate={isCtaHovered ? { y: -15, scale: 1.05 } : { y: 0, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative w-full h-full flex items-center justify-center z-10 animate-float"
            >
              {/* Replace img with a video tag when you have the transparent 3D WebM */}
              <img 
                src="/logo.png" 
                alt="3D Маскот Лингва+" 
                className="w-4/5 h-4/5 object-contain drop-shadow-[0_30px_50px_rgba(241,109,34,0.25)]"
              />
              
              {/* Fake 3D reflection highlight */}
              <div className="absolute top-[10%] right-[20%] w-24 h-24 bg-white/40 blur-2xl rounded-full pointer-events-none" />
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}
