import React from 'react'
import { Star } from 'lucide-react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function Reviews() {
  const reviews = [
    {
      name: 'Елена Тишина',
      text: 'Очень довольна результатом обучения ребенка в этой школе. Очень хорошие учителя, находят подход к каждому ребенку, занятия очень интересные. Многим своим знакомым рекомендовала эту школу и ни разу никто не пожалел, что отдал своего ребёнка в Лингву.',
      rating: 5
    },
    {
      name: 'Наталья Володина',
      text: 'Сын-первоклассник занимается английским у Алёны Олеговны в филиале Лингва+ на Игошина. Педагог сильный - со своим подходом, требовательная, но позитивная. Подобралась комфортная малая группа, все дети одного уровня. Удобно, что если пропустил занятие по уважительной причине, то педагог приглашает на отработку, чтобы не допустить пробелов. Администратор Наталья всегда оперативно и чётко решает все организационные вопросы. Без английского сейчас никуда - со второго класса в школе уже начинается сложная программа, которая как будто подразумевает, что ребенок уже знает азы.',
      rating: 5
    },
    {
      name: 'Ольга Цыпаева',
      text: 'Ходим в Лингву на английский второй год, к преподавателю Алёне Олеговне. Сыну нравится,ходит с удовольствием, у него хорошие результаты. К второму году в свои 6 может вести простые диалоги, знает цвета, числа,животные, предметы мебели, одежды, овощи и т.п на англ.языке, поёт песенки. Мне нравится,что занятия проходят в малых группах и на занятиях много наглядных пособий, частая смена деятельности,игровые приёмы, весёлое приветствие. В этом году начали ходить ещё и на подготовку к школе по субботам. Там дети учатся писать, учат буквы,счёт в пределах 10, программа логически встроена, к первому классу будем уже уметь читать, знать все буквы, уверенно держать ручку в руке)) Преподаватели активные, ответственные, доброжелательные,большое им спасибо!',
      rating: 5
    },
    {
      name: 'Анастасия Митрофанова',
      text: 'В прошлом учебном году начали посещать Лингву + (Юго-Запад). Сын (2 класс) весь год ходил на занятия с большим удовольствием. В школе никаких трудностей в изучении английского языка не испытывает. И самое главное достижение - это выполнение всех домашних заданий, включая устные, самостоятельно и только на отлично). Огромное спасибо Анне Александровне за педагогическое мастерство и заинтересованность в результате! Обязательно продолжим свое обучение в следующем учебном году.',
      rating: 5
    },
    {
      name: 'Инна Королёва',
      text: 'Ходим в Лингву + (Юго-Запад) не так давно, но результаты очень радуют! В школе итоговые контрольные работы теперь на отлично! Анна Александровна потрясающий преподаватель! Спасибо вам!',
      rating: 5
    },
    {
      name: 'Ирина Севастьянова',
      text: 'Подошёл к концу первый год обучения в Лингва +. Ребенок ходил весь год с удовольствием на занятия. Самостоятельно делал домашнее задание. Помощь родителей не понадобилась. Всё доступно и понятно. Преподаватель Алёна Олеговна дала отличную базу ребятам. В течение года были фото и видео отчёты для родителей, открытые уроки. Планируем и дальше учиться в Лингва+',
      rating: 5
    },
    {
      name: 'Олеся Семенова',
      text: 'В Лингву ходим год, пришли сюда т.к в школе не очень хорошо преподают английский. Мы занимаемся у Оксаны Игоревны, моей дочке очень нравится , всегда с радостью ходит. Спасибо огромное Оксане Игоревне и Лингве.',
      rating: 5
    }
  ]

  return (
    <section id="reviews" className="relative py-20 border-t border-white/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-12">
          <p className="text-sm font-bold text-brand-orange uppercase tracking-wider mb-2">Отзывы родителей</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight uppercase">
            Что говорят о нашей школе
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-12">
          <Carousel 
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 py-4">
              {reviews.map((review, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="glass-card rounded-3xl p-6 sm:p-8 h-full flex flex-col justify-between relative shadow-soft hover:shadow-soft-hover">
                    <div className="absolute top-4 right-6 text-6xl text-brand-orange/10 font-serif leading-none select-none pointer-events-none">
                      ”
                    </div>
                    <div className="flex flex-col space-y-3">
                      <div className="flex items-center space-x-0.5 text-amber-400">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} size={16} fill="currentColor" className="stroke-none" />
                        ))}
                      </div>
                      <div className="overflow-y-auto max-h-[180px] sm:max-h-[220px] pr-1 scrollbar-thin">
                        <p className="text-sm sm:text-base text-brand-gray font-medium leading-relaxed italic text-left">
                          «{review.text}»
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-brand-orangeLight/50 flex items-center justify-between">
                      <span className="text-sm font-extrabold text-brand-dark">
                        {review.name}
                      </span>
                      <span className="text-[10px] bg-brand-orangeLight text-brand-orange px-2.5 py-1 rounded-md font-bold uppercase tracking-wider">
                        Родитель
                      </span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-2 sm:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border-gray-100 text-brand-orange hover:bg-brand-orange hover:text-white shadow-md" />
            <CarouselNext className="absolute -right-2 sm:-right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border-gray-100 text-brand-orange hover:bg-brand-orange hover:text-white shadow-md" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
