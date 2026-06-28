import React from 'react'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

export default function Faq() {

  const faqs = [
    {
      question: 'Что если ребенок пропустит занятие по болезни?',
      answer: 'Мы ценим ваше время и здоровье. Если ребенок пропустил урок по болезни (при наличии справки), мы предложим бесплатное занятие-отработку в параллельной группе, либо перенесем оплату на следующий месяц.'
    },
    {
      question: 'Сколько детей занимается в одной группе?',
      answer: 'Наши группы небольшие — от 4 до 8 человек. Это идеальный формат для того, чтобы преподаватель уделил внимание каждому ребенку, а дети могли полноценно общаться и играть в парах.'
    },
    {
      question: 'Нужно ли покупать дополнительные учебники?',
      answer: 'Нет, все учебные материалы, интерактивные карточки, творческие наборы и авторские раздаточные листы мы предоставляем бесплатно. Вам ничего не нужно докупать.'
    },
    {
      question: 'Как я смогу отслеживать прогресс своего ребенка?',
      answer: 'Мы регулярно отправляем родителям мини-отчеты в мессенджеры, проводим открытые уроки раз в четверть, а преподаватель всегда готов дать подробную личную обратную связь после занятий.'
    },
    {
      question: 'Как проходят занятия с самыми маленькими (с 3 лет)?',
      answer: 'Занятия для малышей проходят полностью в игровой форме: песни, движение, игры с игрушками-ассистентами и рисование. Уроки длятся по 35-40 минут с частой сменой активности, чтобы дети не уставали.'
    }
  ]

  return (
    <section id="faq" className="relative py-24 border-t border-white/20">

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-brand-orange uppercase tracking-wider mb-2">Отвечаем на вопросы</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
            Часто задаваемые вопросы
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="glass-card rounded-3xl overflow-hidden border-0 px-6 shadow-soft hover:shadow-soft-hover"
            >
              <AccordionTrigger className="hover:no-underline text-base sm:text-lg font-bold text-brand-dark py-6 text-left border-none">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-brand-gray font-medium leading-relaxed pb-6 pt-2 border-t border-brand-orangeLight/50">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
