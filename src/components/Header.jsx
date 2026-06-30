import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Header({ onOpenModal, onOpenOrgInfo }) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: '-40% 0px -40% 0px' }
    )

    const sectionIds = ['why-us', 'programs', 'quiz', 'reviews', 'faq', 'contacts']
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const menuItems = [
    { label: 'О школе', href: '#why-us' },
    { label: 'Программы', href: '#programs' },
    { label: 'Подобрать программу 🎯', href: '#quiz' },
    { label: 'Отзывы', href: '#reviews' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Контакты', href: '#contacts' }
  ]

  const handleScroll = (e, href) => {
    e.preventDefault()
    setIsOpen(false)
    setTimeout(() => {
      const element = document.querySelector(href)
      if (element) {
        const headerOffset = 80 // approximate header height
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }, 150)
  }

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm glass-header">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center space-x-3 group">
          <img 
            src={`${import.meta.env.BASE_URL}logo.png`} 
            alt="Лингва+" 
            className="w-10 h-10 object-contain group-hover:rotate-12 transition-transform duration-300"
          />
          <span className="text-2xl font-bold tracking-tight text-brand-dark">
            Лингва<span className="text-brand-orange">+</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {menuItems.map((item) => {
            if (item.action === 'org-info') {
              return (
                <button
                  key={item.label}
                  onClick={onOpenOrgInfo}
                  className="text-sm font-semibold text-brand-orange hover:text-brand-orangeHover transition-colors relative py-2"
                >
                  {item.label}
                </button>
              )
            }
            return (
              <a 
                key={item.label}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className={`text-sm font-medium transition-colors relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:transition-all after:duration-300 ${
                  activeSection === item.href
                    ? 'text-brand-orange after:w-full after:bg-brand-orange'
                    : 'text-brand-gray hover:text-brand-orange after:w-0 after:bg-brand-orange hover:after:w-full'
                }`}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        {/* Desktop Call to Action */}
        <div className="hidden md:flex items-center space-x-4">
          <a 
            href="tel:+79176308343" 
            className="text-sm font-semibold text-brand-dark hover:text-brand-orange transition-colors"
          >
            8 917 630-83-43
          </a>
          <button 
            onClick={() => onOpenModal()}
            className="px-6 py-2.5 bg-brand-orange hover:bg-brand-orangeHover text-white text-sm font-bold rounded-2xl shadow-md shadow-brand-orange/10 hover:shadow-lg hover:shadow-brand-orange/20 transform active:scale-98 transition-all duration-200"
          >
            Записаться
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-brand-dark hover:text-brand-orange transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-card mx-4 mt-2 rounded-2xl overflow-hidden shadow-glass absolute top-20 left-0 right-0 z-50"
          >
            <div className="px-6 py-6 space-y-4 flex flex-col">
              {menuItems.map((item) => {
                if (item.action === 'org-info') {
                  return (
                    <button
                      key={item.label}
                      onClick={() => {
                        setIsOpen(false)
                        onOpenOrgInfo()
                      }}
                      className="text-left text-base font-semibold text-brand-orange hover:text-brand-orangeHover py-2 transition-colors border-b border-gray-50"
                    >
                      {item.label}
                    </button>
                  )
                }
                return (
                  <a 
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className={`text-base font-medium py-2 transition-colors border-b border-gray-50 ${
                      activeSection === item.href
                        ? 'text-brand-orange'
                        : 'text-brand-gray hover:text-brand-orange'
                    }`}
                  >
                    {item.label}
                  </a>
                )
              })}
              <div className="pt-4 flex flex-col space-y-3">
                <a 
                  href="tel:+79176308343" 
                  className="text-center text-brand-dark font-bold py-2 hover:text-brand-orange transition-colors"
                >
                  8 917 630-83-43
                </a>
                <button 
                  onClick={() => {
                    setIsOpen(false)
                    onOpenModal()
                  }}
                  className="w-full py-3.5 bg-brand-orange hover:bg-brand-orangeHover text-white font-bold rounded-2xl shadow-lg shadow-brand-orange/10 transition-all text-center"
                >
                  Записаться
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
