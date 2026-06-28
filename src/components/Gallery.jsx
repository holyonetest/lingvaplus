import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export default function Gallery() {
  const photos = [
    { src: `${import.meta.env.BASE_URL}photos/photo_1.webp`, span: 'md:col-span-2 md:row-span-1 h-64 sm:h-80' },
    { src: `${import.meta.env.BASE_URL}photos/photo_2.webp`, span: 'md:col-span-1 md:row-span-1 h-64 sm:h-80' },
    { src: `${import.meta.env.BASE_URL}photos/photo_3.webp`, span: 'md:col-span-1 md:row-span-2 h-64 md:h-[536px]' },
    { src: `${import.meta.env.BASE_URL}photos/photo_4.webp`, span: 'md:col-span-1 md:row-span-1 h-64 sm:h-60' },
    { src: `${import.meta.env.BASE_URL}photos/photo_5.webp`, span: 'md:col-span-1 md:row-span-1 h-64 sm:h-60' },
    { src: `${import.meta.env.BASE_URL}photos/photo_6.webp`, span: 'md:col-span-1 md:row-span-1 h-64 sm:h-60' },
    { src: `${import.meta.env.BASE_URL}photos/photo_7.webp`, span: 'md:col-span-1 md:row-span-1 h-64 sm:h-60' },
  ]

  const [selectedPhoto, setSelectedPhoto] = useState(null)

  return (
    <section id="gallery" className="relative py-24 border-t border-white/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-left mb-16">
          <p className="text-sm font-bold text-brand-orange uppercase tracking-wider mb-2">Наши будни</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
            Живая Галерея
          </h2>
          <p className="text-sm text-brand-gray mt-2 font-medium">
            Посмотрите, как проходят наши занятия в атмосфере заботы, улыбок и открытий.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className={`glass-card group overflow-hidden rounded-3xl relative shadow-soft hover:shadow-soft-hover transition-all duration-300 ${photo.span}`}
            >
              {/* Zooming Image */}
              <div 
                className="w-full h-full cursor-pointer relative"
                onClick={() => setSelectedPhoto(photo.src)}
              >
                <img
                  src={photo.src}
                  alt={`Фото занятий ${index + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                  onError={(e) => {
                    e.target.src = `https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=600&auto=format&fit=crop`
                  }}
                />
                
                {/* Soft overlay on hover */}
                <div className="absolute inset-0 bg-brand-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 sm:p-8 backdrop-blur-sm cursor-zoom-out"
          >
            <button 
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-md"
            >
              <X size={24} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              src={selectedPhoto}
              alt="Увеличенное фото"
              className="max-w-full max-h-full rounded-2xl object-contain shadow-2xl cursor-default"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
