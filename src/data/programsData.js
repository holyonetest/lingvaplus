import { BookOpen, Smile, GraduationCap, Pencil, Sun } from 'lucide-react'

export const categories = [
  { id: 'english', label: 'Английский язык' },
  { id: 'prep', label: 'Подготовка к школе' },
  { id: 'special', label: 'Спецкурсы' }
]

export const programsData = [
  {
    id: 'english-school',
    categoryId: 'english',
    title: 'Английский для школьников',
    price: '3 400 ₽',
    icon: BookOpen,
    image: '/товары/cover-english-school.jpg',
    age: 'Школьники',
    shortDescription: 'Комплексный подход: чтение, грамматика, аудирование, письмо и подготовка к ВПР.',
    vkLink: 'https://vk.com/market/product/angliyskiy-dlya-shkolnikov-170525779-11145463', // Ссылка на группу или товар
  },
  {
    id: 'english-preschool',
    categoryId: 'english',
    title: 'Английский для дошколят',
    price: '3 600 ₽',
    icon: Smile,
    image: '/товары/cover-english-preschool.jpg',
    age: 'Дошкольники',
    shortDescription: 'Игровая форма обучения, интеграция актуальных тем, развитие разговорной речи.',
    vkLink: 'https://vk.com/market/product/angliyskiy-dlya-doshkolyat-170525779-11145468',
  },
  {
    id: 'summer-intensive',
    categoryId: 'english',
    title: 'Летний интенсив для 2 класса / Английский с 0',
    price: '8 500 ₽',
    icon: Sun,
    image: '/товары/cover-summer-intensive.jpg',
    age: '2 класс',
    shortDescription: 'За месяц (20 часов) ребёнок научится читать, выучит буквы, звуки и базу грамматики.',
    vkLink: 'https://vk.com/market/product/letniy-intensiv-dlya-2-klassa-angliyskiy-s-0-170525779-11145478',
  },
  {
    id: 'school-prep',
    categoryId: 'prep',
    title: 'Подготовка к школе',
    price: '5 100 ₽',
    icon: GraduationCap,
    image: '/товары/cover-school-prep.jpg',
    age: 'Дошкольники',
    shortDescription: 'Логика, математика, развитие речи, психология общения и развитие мелкой моторики.',
    vkLink: 'https://vk.com/market/product/podgotovka-k-shkole-170525779-11145519',
  },
  {
    id: 'handwriting',
    categoryId: 'special',
    title: 'Красивый почерк',
    price: '6 500 ₽',
    icon: Pencil,
    image: '/товары/cover-handwriting.jpg',
    age: '1-2 класс',
    shortDescription: 'Курс из 10 занятий для постановки правильного и красивого письма.',
    vkLink: 'https://vk.com/market/product/krasivy-pocherk-170525779-11145487',
  }
]
