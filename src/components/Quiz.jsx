import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ArrowRight, ArrowLeft, BookOpen, Gift } from 'lucide-react'
import { Progress } from "@/components/ui/progress"

export default function Quiz() {
  const [step, setStep] = useState(0) // 0 to 3
  const [answers, setAnswers] = useState({
    goal: '',
    attitude: '',
    format: ''
  })
  const [formData, setFormData] = useState({ name: '', phone: '' })
  const [errors, setErrors] = useState({})
  const [isFinished, setIsFinished] = useState(false)

  const stepsData = [
    {
      title: 'Зачем ребенку английский прямо сейчас?',
      key: 'goal',
      options: [
        { label: 'Подтянуть школьную программу', value: 'school' },
        { label: 'Для поездок и общего развития', value: 'travel' },
        { label: 'Сдать экзамены (ОГЭ/ЕГЭ/ВПР)', value: 'exams' },
        { label: 'Научиться читать и говорить с нуля', value: 'zero' }
      ]
    },
    {
      title: 'Как ребенок относится к изучению языков?',
      key: 'attitude',
      options: [
        { label: 'Очень нравится, хочет учить больше', value: 'loves' },
        { label: 'Относится спокойно / нейтрально', value: 'neutral' },
        { label: 'Не любит, нужно заинтересовать', value: 'dislikes' }
      ]
    },
    {
      title: 'Какой формат обучения вам ближе?',
      key: 'format',
      options: [
        { label: 'Занятия в мини-группе', value: 'group' },
        { label: 'Индивидуально с преподавателем', value: 'individual' },
        { label: 'Летний интенсив (быстрое погружение)', value: 'intensive' }
      ]
    }
  ]

  const handleSelectOption = (value) => {
    const key = stepsData[step].key
    setAnswers({ ...answers, [key]: value })
    setTimeout(() => {
      setStep(prev => prev + 1)
    }, 300)
  }

  const handlePrev = () => {
    if (step > 0) setStep(prev => prev - 1)
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Пожалуйста, введите имя'
    if (!formData.phone.trim()) {
      newErrors.phone = 'Пожалуйста, введите телефон'
    } else if (!/^\+?[0-9\s\-()]{10,20}$/.test(formData.phone)) {
      newErrors.phone = 'Некорректный номер телефона'
    }
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const valErrors = validateForm()
    if (Object.keys(valErrors).length > 0) {
      setErrors(valErrors)
      return
    }

    console.log('Результаты квиза:', { answers, formData })
    setIsFinished(true)
  }

  const getRecommendation = () => {
    if (answers.format === 'intensive') return 'Летний интенсив по английскому'
    if (answers.goal === 'zero') return 'Английский с нуля'
    if (answers.goal === 'exams') return 'Спецкурс подготовки к экзаменам'
    if (answers.format === 'individual') return 'Индивидуальные занятия с репетитором'
    return 'Английский для школьников в мини-группе'
  }

  return (
    <section id="quiz" className="py-24 bg-brand-lightGray border-t border-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-sm font-bold text-brand-orange bg-brand-orangeLight px-4 py-1.5 rounded-full uppercase tracking-wider">
            Интерактивный тест
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight mt-4">
            Подберите идеальную программу
          </h2>
          <p className="text-sm sm:text-base text-brand-gray mt-2 font-medium max-w-xl mx-auto">
            Ответьте на 3 простых вопроса, получите рекомендацию методиста и подарок: гайд «10 игр для английского дома» 🎁
          </p>
        </div>

        {/* Quiz Card */}
        <div className="bg-white border border-gray-100 rounded-3xl p-8 sm:p-10 shadow-soft relative overflow-hidden min-h-[400px] flex flex-col justify-between">
          
          {/* Progress bar */}
          {!isFinished && (
            <Progress 
              value={(step / 3) * 100} 
              className="absolute top-0 left-0 w-full h-1.5 rounded-none" 
            />
          )}

          <AnimatePresence mode="wait">
            {!isFinished ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="flex-grow flex flex-col justify-between"
              >
                {step < 3 ? (
                  /* Question Steps */
                  <div className="space-y-6">
                    <div className="flex justify-between items-center text-xs font-semibold text-brand-gray uppercase tracking-wider">
                      <span>Вопрос {step + 1} из 3</span>
                      <span>Шаг {step + 1}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-brand-dark leading-snug">
                      {stepsData[step].title}
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      {stepsData[step].options.map((opt) => {
                        const isSelected = answers[stepsData[step].key] === opt.value
                        return (
                          <button
                            key={opt.value}
                            onClick={() => handleSelectOption(opt.value)}
                            className={`p-5 text-left border rounded-2xl transition-all duration-200 flex justify-between items-center group font-medium ${
                              isSelected 
                                ? 'border-brand-orange bg-brand-orangeLight text-brand-orange' 
                                : 'border-gray-200 hover:border-brand-orange hover:bg-brand-orangeLight/30 text-brand-gray hover:text-brand-dark'
                            }`}
                          >
                            <span>{opt.label}</span>
                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                              isSelected 
                                ? 'border-brand-orange bg-brand-orange text-white' 
                                : 'border-gray-300 group-hover:border-brand-orange'
                            }`}>
                              {isSelected && <Check size={12} className="stroke-[3]" />}
                            </div>
                          </button>
                        )
                      })}
                    </div>
                  </div>
                ) : (
                  /* Contact Form Step */
                  <div className="space-y-6">
                    <div className="flex justify-between items-center text-xs font-semibold text-brand-gray uppercase tracking-wider">
                      <span>Готово!</span>
                      <span>Шаг 4 из 4</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                      <div className="md:col-span-7 space-y-4 text-left">
                        <h3 className="text-xl sm:text-2xl font-bold text-brand-dark leading-tight">
                          Куда отправить результаты и подарок?
                        </h3>
                        <p className="text-sm text-brand-gray leading-relaxed">
                          Мы рассчитаем точные рекомендации. Введите контакты, чтобы зафиксировать за собой бесплатный урок и скачать PDF-гайд.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                          <div className="space-y-1">
                            <input
                              type="text"
                              value={formData.name}
                              onChange={e => {
                                setFormData({ ...formData, name: e.target.value })
                                if (errors.name) setErrors({ ...errors, name: '' })
                              }}
                              placeholder="Ваше имя"
                              className={`w-full px-4 py-3 bg-brand-lightGray border ${errors.name ? 'border-red-500' : 'border-gray-200'} rounded-2xl focus:outline-none focus:border-brand-orange transition-colors`}
                            />
                            {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
                          </div>

                          <div className="space-y-1">
                            <input
                              type="tel"
                              value={formData.phone}
                              onChange={e => {
                                setFormData({ ...formData, phone: e.target.value })
                                if (errors.phone) setErrors({ ...errors, phone: '' })
                              }}
                              placeholder="Ваш телефон"
                              className={`w-full px-4 py-3 bg-brand-lightGray border ${errors.phone ? 'border-red-500' : 'border-gray-200'} rounded-2xl focus:outline-none focus:border-brand-orange transition-colors`}
                            />
                            {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
                          </div>

                          <button
                            type="submit"
                            className="w-full sm:w-auto px-8 py-4 bg-brand-orange hover:bg-brand-orangeHover text-white font-bold rounded-2xl shadow-lg shadow-brand-orange/20 transition-all flex items-center justify-center space-x-2"
                          >
                            <span>Узнать результаты и скачать PDF</span>
                            <ArrowRight size={18} />
                          </button>
                        </form>
                      </div>

                      {/* Gift Mockup visual */}
                      <div className="md:col-span-5 flex justify-center">
                        <div className="bg-brand-orangeLight border border-brand-orange/15 rounded-3xl p-6 flex flex-col items-center text-center max-w-[240px]">
                          <div className="w-14 h-14 bg-white text-brand-orange rounded-2xl flex items-center justify-center shadow-sm mb-4">
                            <Gift size={28} className="stroke-[1.5]" />
                          </div>
                          <span className="text-xs font-bold text-brand-orange uppercase tracking-wide">Ваш подарок</span>
                          <h4 className="text-sm font-bold text-brand-dark mt-1">Гайд «10 игр для английского дома»</h4>
                          <p className="text-xs text-brand-gray mt-2">Вышлем в личные сообщения ВКонтакте или свяжемся по телефону.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Back button and index indicator */}
                {!isFinished && step > 0 && (
                  <div className="flex justify-between items-center pt-8 mt-6 border-t border-gray-100">
                    <button
                      onClick={handlePrev}
                      className="inline-flex items-center space-x-2 text-sm font-bold text-brand-gray hover:text-brand-orange transition-colors"
                    >
                      <ArrowLeft size={16} />
                      <span>Назад</span>
                    </button>
                  </div>
                )}
              </motion.div>
            ) : (
              /* Success / Result Screen */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-8 text-center flex flex-col items-center justify-center space-y-6"
              >
                <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center">
                  <Check size={36} className="stroke-[2.5]" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-brand-dark">Тест пройден!</h3>
                  <p className="text-base text-brand-gray max-w-md mx-auto">
                    Спасибо! Подобранная программа для вашего ребенка:
                  </p>
                  <p className="text-lg font-extrabold text-brand-orange bg-brand-orangeLight px-6 py-2 rounded-2xl inline-block mt-2">
                    🦊 {getRecommendation()}
                  </p>
                </div>

                <div className="bg-brand-lightGray border border-gray-100 rounded-2xl p-5 max-w-sm w-full flex items-center justify-between">
                  <div className="flex items-center space-x-3 text-left">
                    <div className="w-10 h-10 bg-brand-orange text-white rounded-xl flex items-center justify-center">
                      <BookOpen size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-brand-dark">Ваш PDF-подарок</p>
                      <p className="text-xs text-brand-gray">10_игры_английский.pdf</p>
                    </div>
                  </div>
                  <a 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); alert('Скачивание демонстрационного PDF-подарка...'); }}
                    className="text-xs font-bold text-brand-orange hover:text-brand-orangeHover transition-colors border-b border-brand-orange hover:border-brand-orangeHover pb-0.5"
                  >
                    Скачать
                  </a>
                </div>

                <p className="text-xs text-brand-gray max-w-xs leading-relaxed">
                  Мы уже зарезервировали для вас место на бесплатный вводный урок. Менеджер свяжется с вами в течение 15 минут.
                </p>

                <button
                  onClick={() => {
                    setStep(0)
                    setIsFinished(false)
                    setFormData({ name: '', phone: '' })
                    setAnswers({ goal: '', attitude: '', format: '' })
                  }}
                  className="text-xs font-bold text-brand-gray hover:text-brand-orange transition-colors"
                >
                  Пройти тест заново
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
