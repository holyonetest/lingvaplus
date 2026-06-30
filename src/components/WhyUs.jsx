import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Heart, MessageSquare, TrendingUp, Users, Sun, BookOpen, Play } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function WhyUs({ onOpenModal }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const advantages = [
    {
      title: 'Школа, куда дети ходят вприпрыжку',
      description: 'Английский, который действительно нравится ребёнку.',
      icon: Heart,
    },
    {
      title: 'Игровая форма обучения',
      description: 'Диалоги, видео, песни, движение — никаких скучных уроков и зубрёжки.',
      icon: MessageSquare,
    },
    {
      title: 'Быстрый и заметный результат',
      description: 'Чтение, базовая грамматика и уверенность на уроках уже через месяц.',
      icon: TrendingUp,
    },
    {
      title: 'Внимание к каждому',
      description: 'Мини‑группы, комфортная атмосфера и поддержка на каждом занятии.',
      icon: Users,
    },
    {
      title: 'Летний клуб и интенсивы',
      description: 'Каникулы с пользой, новые друзья и безопасные приключения вместо бесконечных гаджетов.',
      icon: Sun,
    },
    {
      title: 'Подготовка к школе и развитие',
      description: 'Русский, математика, чтение и красивый почерк для начальной школы.',
      icon: BookOpen,
    },
  ]

  return (
    <section id="why-us" className="relative py-24 border-t border-white/20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Why choose us header */}
        <div className="text-left mb-16">
          <p className="text-sm font-bold text-brand-orange uppercase tracking-wider mb-2">Почему мы</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
            Почему выбирают нас
          </h2>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 sm:mb-20">
          {advantages.map((item, index) => {
            const IconComponent = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="glass-card rounded-3xl group border border-white/50 shadow-soft hover:shadow-soft-hover h-full transition-all duration-300 transform hover:-translate-y-1">
                  <CardContent className="p-8 flex flex-col items-start space-y-4">
                    <div className="w-14 h-14 bg-brand-orangeLight/50 text-brand-orange rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
                      <IconComponent size={28} className="stroke-[1.75]" />
                    </div>
                    <h3 className="text-xl font-bold text-brand-dark leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm text-brand-gray leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Embedded Video Player - Wide Block */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto flex flex-col space-y-6 mb-16 md:mb-24"
        >
          <div className="text-center">
            <h3 className="text-2xl font-extrabold text-brand-dark">Видеопрезентация школы Лингва+ 🎥</h3>
            <p className="text-sm text-brand-gray font-medium mt-2">Посмотрите небольшой видеоролик о том, как у нас проходят занятия и развиваются дети.</p>
          </div>
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-brand-dark/10 border-[6px] border-white bg-brand-dark aspect-video group cursor-pointer" onClick={togglePlay}>
            <video 
              ref={videoRef}
              src={`${import.meta.env.BASE_URL}720p_ЛИНГВА_это.mp4`}
              preload="metadata"
              className="w-full h-full object-cover"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />
            {!isPlaying && (
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-all duration-300">
                <div className="w-20 h-20 bg-brand-orange/90 text-white rounded-full flex items-center justify-center shadow-xl shadow-brand-orange/20 transform group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm">
                  <Play size={40} className="ml-1.5 fill-white" />
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Summer Intensive Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="relative glass-card border-brand-orange/20 rounded-3xl overflow-hidden flex flex-col items-center text-center max-w-4xl mx-auto shadow-[0_20px_50px_rgba(241,109,34,0.1)]">
            <CardContent className="p-8 sm:p-12 space-y-6 flex flex-col items-center">
              {/* Background circle decoration */}
              <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-brand-orange/10 blur-xl pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-brand-orange/10 blur-xl pointer-events-none" />

              <span className="text-xs font-bold text-brand-orange bg-white px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm z-10 relative">
                Специальный проект
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-dark leading-tight max-w-2xl z-10 relative">
                Летний интенсив по английскому для 1–2 класса
              </h3>

              <p className="text-base sm:text-lg text-brand-gray font-medium max-w-xl z-10 relative">
                Всего за 1 месяц ребёнок освоит чтение, буквы и звуки, счёт, базовую лексику и простые грамматические конструкции
              </p>

              <Button 
                onClick={() => onOpenModal('summer-intensive')}
                className="px-8 py-6 h-auto bg-brand-orange hover:bg-brand-orangeHover text-white font-bold rounded-2xl shadow-lg shadow-brand-orange/20 hover:shadow-xl hover:shadow-brand-orange/30 transform active:scale-98 transition-all duration-200 z-10 relative"
              >
                Записаться на интенсив
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
