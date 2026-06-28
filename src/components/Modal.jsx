import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { submitApplication } from '../utils/api'

// Валидация с помощью Zod
const formSchema = z.object({
  name: z.string().min(2, 'Имя должно содержать минимум 2 символа'),
  phone: z.string().regex(/^\+?[0-9\s\-()]{10,20}$/, 'Некорректный номер телефона'),
  age: z.string().optional(),
  program: z.string().min(1, 'Выберите программу')
})

export default function Modal({ isOpen, onClose, defaultProgram = '' }) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isTyping, setIsTyping] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      age: '',
      program: defaultProgram || 'english-school',
    }
  })

  useEffect(() => {
    if (defaultProgram) {
      setValue('program', defaultProgram)
    }
  }, [defaultProgram, setValue])

  // Watch for any changes to trigger mascot typing animation
  useEffect(() => {
    const subscription = watch(() => {
      setIsTyping(true)
      const timer = setTimeout(() => setIsTyping(false), 1000)
      return () => clearTimeout(timer)
    })
    return () => subscription.unsubscribe()
  }, [watch])

  const onSubmit = async (data) => {
    try {
      await submitApplication(data)
      setIsSubmitted(true)
    } catch (error) {
      console.error('Ошибка при отправке:', error)
    }
  }

  const handleClose = () => {
    setIsSubmitted(false)
    reset()
    setIsTyping(false)
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-md glass-card rounded-3xl p-8 z-10 border border-white/50 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-white/40 to-white/10 pointer-events-none" />
            
            <button 
              onClick={handleClose}
              className="absolute top-5 right-5 text-gray-400 hover:text-brand-orange transition-colors z-20"
            >
              <X size={24} />
            </button>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 relative z-10">
                <div className="flex flex-col items-center text-center mb-2">
                  <motion.img 
                    src={`${import.meta.env.BASE_URL}logo.png`} 
                    alt="Маскот лиса" 
                    animate={isTyping ? {
                      scale: [1, 1.08, 1],
                      rotate: [0, 8, -8, 0],
                      y: [0, -6, 0]
                    } : {
                      y: [0, -5, 0],
                      rotate: [0, 1, -1, 0]
                    }}
                    transition={isTyping ? {
                      duration: 0.6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    } : {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="w-16 h-16 object-contain drop-shadow-[0_4px_10px_rgba(241,109,34,0.1)] mb-2"
                  />
                  <h3 className="text-2xl font-bold text-brand-dark">Записаться на занятие</h3>
                  <p className="text-sm text-brand-gray mt-1">Оставьте свои данные, мы свяжемся с вами в течение 15 минут</p>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-brand-gray uppercase tracking-wider">Имя родителя</label>
                  <input 
                    type="text" 
                    {...register('name')}
                    placeholder="Например, Анна" 
                    className={`w-full px-4 py-3 bg-white/50 backdrop-blur-sm border ${errors.name ? 'border-red-500' : 'border-white/50'} rounded-2xl focus:outline-none focus:border-brand-orange focus:bg-white/80 transition-colors shadow-inner`}
                  />
                  {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-brand-gray uppercase tracking-wider">Телефон</label>
                  <input 
                    type="tel" 
                    {...register('phone')}
                    placeholder="+7 (999) 999-99-99" 
                    className={`w-full px-4 py-3 bg-white/50 backdrop-blur-sm border ${errors.phone ? 'border-red-500' : 'border-white/50'} rounded-2xl focus:outline-none focus:border-brand-orange focus:bg-white/80 transition-colors shadow-inner`}
                  />
                  {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-brand-gray uppercase tracking-wider">Возраст ребенка</label>
                    <input 
                      type="text" 
                      {...register('age')}
                      placeholder="Например, 6 лет" 
                      className={`w-full px-4 py-3 bg-white/50 backdrop-blur-sm border ${errors.age ? 'border-red-500' : 'border-white/50'} rounded-2xl focus:outline-none focus:border-brand-orange focus:bg-white/80 transition-colors shadow-inner`}
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-brand-gray uppercase tracking-wider">Программа</label>
                    <select 
                      {...register('program')}
                      className={`w-full px-4 py-3 bg-white/50 backdrop-blur-sm border ${errors.program ? 'border-red-500' : 'border-white/50'} rounded-2xl focus:outline-none focus:border-brand-orange focus:bg-white/80 transition-colors shadow-inner appearance-none cursor-pointer`}
                    >
                      <option value="english-preschool">Английский для дошкольников</option>
                      <option value="english-school">Английский для школьников</option>
                      <option value="school-prep">Подготовка к школе</option>
                      <option value="handwriting">Красивый почерк</option>
                      <option value="summer-intensive">Летний интенсив</option>
                      <option value="other">Другое (консультация)</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-orange hover:bg-brand-orangeHover text-white font-bold py-4 rounded-2xl transition-all duration-300 shadow-[0_8px_20px_rgba(241,109,34,0.3)] hover:shadow-[0_12px_25px_rgba(241,109,34,0.4)] disabled:opacity-70 flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <span className="animate-pulse">Отправка...</span>
                    ) : (
                      <span>Жду звонка</span>
                    )}
                  </button>
                  <p className="text-center text-[10px] text-brand-gray mt-3 px-4">
                    Нажимая на кнопку, вы даете согласие на обработку персональных данных
                  </p>
                </div>
              </form>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 text-center flex flex-col items-center justify-center space-y-4"
              >
                {/* Celebrating Mascot */}
                <motion.img 
                  src={`${import.meta.env.BASE_URL}logo.png`} 
                  alt="Лиса празднует" 
                  animate={{
                    y: [0, -25, 0],
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-24 h-24 object-contain drop-shadow-[0_10px_20px_rgba(241,109,34,0.15)] mb-2"
                />
                
                <h3 className="text-2xl font-bold text-brand-dark">Заявка принята!</h3>
                <p className="text-brand-gray max-w-xs text-sm">
                  Мы свяжемся с вами в течение 15 минут для подтверждения записи.
                </p>
                
                <button 
                  onClick={handleClose}
                  className="px-6 py-2 border border-gray-200 hover:border-brand-orange hover:text-brand-orange text-brand-gray text-sm font-semibold rounded-xl transition-colors"
                >
                  Закрыть
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
