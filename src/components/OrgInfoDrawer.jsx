import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, FileText, Landmark, GraduationCap, Users, BookOpen, CircleDollarSign, CheckSquare, Award } from 'lucide-react'

export default function OrgInfoDrawer({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('basic')

  const tabs = [
    { id: 'basic', label: 'Основные сведения' },
    { id: 'structure', label: 'Структура и органы управления' },
    { id: 'docs', label: 'Документы' },
    { id: 'education', label: 'Образование' },
    { id: 'staff', label: 'Руководство и пед. состав' },
    { id: 'equipment', label: 'Материально-техническое обеспечение' },
    { id: 'services', label: 'Платные образовательные услуги' },
    { id: 'finance', label: 'Финансовая деятельность' },
    { id: 'vacancies', label: 'Вакантные места' },
    { id: 'support', label: 'Стипендии и поддержка' },
    { id: 'international', label: 'Международное сотрудничество' },
    { id: 'nutrition', label: 'Питание в организации' }
  ]

  // Render content depending on activeTab
  const renderContent = () => {
    switch (activeTab) {
      case 'basic':
        return (
          <div className="space-y-6 text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-brand-dark border-b border-gray-100 pb-3">Основные сведения</h3>
            <div className="space-y-4 text-base leading-relaxed text-brand-gray font-medium">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 border-b border-gray-50 pb-2">
                <span className="font-extrabold text-brand-dark">Полное наименование:</span>
                <span className="md:col-span-2">Индивидуальный предприниматель Жданова Лютия Рафаиловна (Языковой центр «Лингва+»)</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 border-b border-gray-50 pb-2">
                <span className="font-extrabold text-brand-dark">Дата создания организации:</span>
                <span className="md:col-span-2">Осуществляет образовательную деятельность на основании лицензии, выданной в августе 2016 г.</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 border-b border-gray-50 pb-2">
                <span className="font-extrabold text-brand-dark">Учредитель:</span>
                <span className="md:col-span-2">Индивидуальный предприниматель Жданова Лютия Рафаиловна</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 border-b border-gray-50 pb-2">
                <span className="font-extrabold text-brand-dark">Адреса филиалов:</span>
                <span className="md:col-span-2">
                  <ul className="list-disc list-inside space-y-1">
                    <li>432044, г. Ульяновск, ул. Кольцевая, 32</li>
                    <li>г. Ульяновск, ул. Рябикова, 25а</li>
                    <li>г. Ульяновск, ул. Севастопольская, 14</li>
                  </ul>
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 border-b border-gray-50 pb-2">
                <span className="font-extrabold text-brand-dark">Контактный телефон:</span>
                <span className="md:col-span-2"><a href="tel:+79176308343" className="text-brand-orange font-bold hover:underline">8 (917) 630-83-43</a></span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 border-b border-gray-50 pb-2">
                <span className="font-extrabold text-brand-dark">Режим и график работы:</span>
                <span className="md:col-span-2">Понедельник – пятница: 7:00 – 19:00, Суббота: 10:00 – 14:00, Воскресенье: выходной</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 border-b border-gray-50 pb-2">
                <span className="font-extrabold text-brand-dark">Электронная почта:</span>
                <span className="md:col-span-2"><a href="mailto:lingvapluss@gmail.com" className="text-brand-orange hover:underline">lingvapluss@gmail.com</a></span>
              </div>
            </div>
          </div>
        )
      case 'structure':
        return (
          <div className="space-y-6 text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-brand-dark border-b border-gray-100 pb-3">Структура и органы управления</h3>
            <div className="space-y-4 text-base leading-relaxed text-brand-gray font-medium">
              <p>Управление Языковым центром «Лингва+» осуществляется в соответствии с законодательством РФ и Уставом.</p>
              
              <div className="space-y-2">
                <p className="font-extrabold text-brand-dark text-base">Ключевое руководство:</p>
                <ul className="list-disc list-inside space-y-1.5 pl-2">
                  <li><span className="font-bold text-brand-dark">Руководитель</span> — Индивидуальный предприниматель Жданова Лютия Рафаиловна</li>
                  <li><span className="font-bold text-brand-dark">Управляющий</span> — Дойкина Наталья Сергеевна</li>
                  <li><span className="font-bold text-brand-dark">Методист</span> — Никифорова Анна Николаевна</li>
                </ul>
              </div>

              <div className="space-y-2 pt-2">
                <p className="font-extrabold text-brand-dark text-base">Коллегиальные органы управления частного детского сада «Лингва+»:</p>
                <ul className="list-disc list-inside space-y-1.5 pl-2">
                  <li>Индивидуальный предприниматель Жданова Лютия Рафаиловна</li>
                  <li>Педагогический совет (Председатель — Жданова Лютия Рафаиловна)</li>
                </ul>
              </div>
            </div>
          </div>
        )
      case 'docs':
        return (
          <div className="space-y-6 text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-brand-dark border-b border-gray-100 pb-3">Документы</h3>
            <p className="text-base text-brand-gray font-medium">Вы можете ознакомиться со следующими официальными документами организации. Кликните по оранжевой ссылке, чтобы открыть документ:</p>
            <div className="grid grid-cols-1 gap-3 pt-2">
              <a href="https://docs.google.com/document/d/1mP_xYgG8hxaBNHr1gbi7ytejLPADNmqW/edit?usp=drive_link&ouid=105841361200127359008&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" className="w-full flex items-center space-x-3 p-4 rounded-2xl bg-brand-lightGray border border-gray-100 hover:border-brand-orange hover:bg-brand-orangeLight/20 transition-all text-brand-orange font-bold text-sm text-left">
                <FileText size={18} className="flex-shrink-0" />
                <span className="hover:underline">Правила приема обучающихся</span>
              </a>
              <a href="https://docs.google.com/document/d/1NW2ks-NN_ePLVBadzcfkAjP_BShV7oEP/edit?usp=drive_link&ouid=105841361200127359008&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" className="w-full flex items-center space-x-3 p-4 rounded-2xl bg-brand-lightGray border border-gray-100 hover:border-brand-orange hover:bg-brand-orangeLight/20 transition-all text-brand-orange font-bold text-sm text-left">
                <FileText size={18} className="flex-shrink-0" />
                <span className="hover:underline">Приказ об утверждении цен 2025-2026</span>
              </a>
              <a href="https://docs.google.com/document/d/1dT1Zx3fKpNCPIN44iQQxZyatt3wCc1UG/edit?usp=drive_link&ouid=105841361200127359008&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" className="w-full flex items-center space-x-3 p-4 rounded-2xl bg-brand-lightGray border border-gray-100 hover:border-brand-orange hover:bg-brand-orangeLight/20 transition-all text-brand-orange font-bold text-sm text-left">
                <FileText size={18} className="flex-shrink-0" />
                <span className="hover:underline">Правила внутреннего распорядка</span>
              </a>
              <a href="https://docs.google.com/document/d/1cJI3WbIOIcunvEWvXJqsWjkp3iwEaGC5/edit?usp=drive_link&ouid=105841361200127359008&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" className="w-full flex items-center space-x-3 p-4 rounded-2xl bg-brand-lightGray border border-gray-100 hover:border-brand-orange hover:bg-brand-orangeLight/20 transition-all text-brand-orange font-bold text-sm text-left">
                <FileText size={18} className="flex-shrink-0" />
                <span className="hover:underline">Положение о формах, периодичности и порядке текущего контроля успеваемости и промежуточной аттестации обучающихся</span>
              </a>
              <a href="https://docs.google.com/document/d/1XHOBFwFZwCGgTXKq-241MnYVrsS2x7xY/edit?usp=drive_link&ouid=105841361200127359008&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" className="w-full flex items-center space-x-3 p-4 rounded-2xl bg-brand-lightGray border border-gray-100 hover:border-brand-orange hover:bg-brand-orangeLight/20 transition-all text-brand-orange font-bold text-sm text-left">
                <FileText size={18} className="flex-shrink-0" />
                <span className="hover:underline">Положение о режиме занятий обучающихся</span>
              </a>
            </div>
          </div>
        )
      case 'education':
        return (
          <div className="space-y-6 text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-brand-dark border-b border-gray-100 pb-3">Образование</h3>
            <div className="space-y-4 text-base leading-relaxed text-brand-gray font-medium">
              <p>Языковой центр «Лингва+» осуществляет образовательную деятельность по программам дополнительного образования детей на основе Лицензии на право ведения образовательной деятельности № Л035-01216-73/00189500.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-brand-lightGray p-4 rounded-2xl border border-gray-100">
                <div>
                  <span className="font-extrabold text-brand-dark block text-xs uppercase tracking-wider text-brand-orange">Уровень образования</span>
                  <span className="text-sm font-semibold">Дополнительное образование детей</span>
                </div>
                <div>
                  <span className="font-extrabold text-brand-dark block text-xs uppercase tracking-wider text-brand-orange">Форма обучения</span>
                  <span className="text-sm font-semibold">Очная</span>
                </div>
                <div>
                  <span className="font-extrabold text-brand-dark block text-xs uppercase tracking-wider text-brand-orange">Язык обучения</span>
                  <span className="text-sm font-semibold">Русский</span>
                </div>
                <div>
                  <span className="font-extrabold text-brand-dark block text-xs uppercase tracking-wider text-brand-orange">Электронные технологии</span>
                  <span className="text-sm font-semibold">Не используются</span>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <p className="font-extrabold text-brand-dark text-base">Образовательные программы и стандарты:</p>
                <div className="grid grid-cols-1 gap-2">
                  <a href="https://drive.google.com/file/d/1iAo28Ebe4dUDZBkYBBbJeRNuI63s1tHI/view" target="_blank" rel="noopener noreferrer" className="w-full text-brand-orange hover:underline font-bold flex items-center space-x-1.5">
                    <span>📄 Выписка из реестра лицензий</span>
                  </a>
                  <a href="https://drive.google.com/file/d/1Lj7J1aPqkknR5XVNH7Aj7lVKGJ0Nl2nf/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="w-full text-brand-orange hover:underline font-bold flex items-center space-x-1.5">
                    <span>📄 Программа социально-педагогической направленности на основе УМК «Family and Friends 2»</span>
                  </a>
                  <a href="https://drive.google.com/file/d/1GeL4cnPvQTtnfJH4BR4iMRgatq2bL62E/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="w-full text-brand-orange hover:underline font-bold flex items-center space-x-1.5">
                    <span>📄 Программа социально-педагогической направленности на основе УМК «Teddy Bear»</span>
                  </a>
                  <a href="https://drive.google.com/file/d/1mzKbDPBDMVX3YlZlIrCz0O1LM5DQiLyG/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="w-full text-brand-orange hover:underline font-bold flex items-center space-x-1.5">
                    <span>📄 Программа социально-педагогической направленности на основе УМК «Teddy Bear 2»</span>
                  </a>
                  <a href="https://docs.google.com/document/d/1eWF4E4Xq0zHQIS9ZjuXp4D4narkmpKLA/edit?usp=sharing&ouid=105841361200127359008&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" className="w-full text-brand-orange hover:underline font-bold flex items-center space-x-1.5">
                    <span>📄 Договор об оказании образовательных услуг</span>
                  </a>
                  <a href="https://docs.google.com/document/d/1h97LGfQogahUvICO-FCvdqj-JmAVwWWN/edit?usp=sharing&ouid=105841361200127359008&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" className="w-full text-brand-orange hover:underline font-bold flex items-center space-x-1.5">
                    <span>📄 Положение о языке образования</span>
                  </a>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <p className="font-extrabold text-brand-dark text-base">Количество обучающихся (на текущий учебный год):</p>
                <ul className="list-disc list-inside space-y-1 pl-2">
                  <li>За счет бюджетных ассигнований местных бюджетов — 0 человек</li>
                  <li>По договорам об образовании за счет средств физ. и (или) юр. лиц — 67 человек</li>
                  <li>Иностранные граждане — 0 человек</li>
                </ul>
              </div>
            </div>
          </div>
        )
      case 'staff':
        return (
          <div className="space-y-6 text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-brand-dark border-b border-gray-100 pb-3">Руководство и педагогический состав</h3>
            <div className="space-y-6">
              {/* Director Card */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 p-6 bg-brand-lightGray border border-gray-100 rounded-3xl">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-white shadow-soft flex-shrink-0 bg-white">
                  <img 
                    src={`${import.meta.env.BASE_URL}photos/руководство.jpg`} 
                    alt="Жданова Лютия Рафаиловна" 
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
                    }}
                  />
                </div>
                <div className="space-y-2 text-center sm:text-left">
                  <span className="text-xs font-bold text-brand-orange uppercase tracking-wider">Руководитель организации</span>
                  <h4 className="text-lg font-extrabold text-brand-dark">Жданова Лютия Рафаиловна</h4>
                  <p className="text-xs sm:text-sm text-brand-gray font-medium leading-relaxed">
                    Основатель и директор сети языкового центра «Лингва+». Опыт работы в сфере управления образовательными проектами более 15 лет.
                  </p>
                </div>
              </div>

              {/* Ped. Staff */}
              <div className="space-y-3">
                <h4 className="text-base font-extrabold text-brand-dark">Преподавательский состав:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {[
                    'Доброва Ирина Александровна',
                    'Аверьянчева Ирина Александровна',
                    'Шмаркова Инна Игоревна',
                    'Исайчева Анна Александровна',
                    'Егорова Алёна Олеговна',
                    'Садовникова Юлия Сергеевна',
                    'Аюгова Мария Петровна',
                    'Никонова Алина Игоревна'
                  ].map((teacher, i) => (
                    <div 
                      key={i}
                      className="w-full p-3.5 bg-brand-lightGray/50 border border-gray-100 rounded-2xl font-bold text-sm text-brand-dark block shadow-sm"
                    >
                      <span className="flex items-center gap-1.5">👩‍🏫 {teacher}</span>
                      <span className="block text-[10px] text-brand-gray font-medium mt-0.5 ml-6">преподаватель английского языка</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )
      case 'equipment':
        return (
          <div className="space-y-6 text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-brand-dark border-b border-gray-100 pb-3">Материально-техническое обеспечение</h3>
            <div className="space-y-4 text-base leading-relaxed text-brand-gray font-medium">
              <p>Оборудование учебных кабинетов обеспечивает комфортные и безопасные условия для изучения английского языка:</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-brand-lightGray border border-gray-100 p-5 rounded-2xl text-center space-y-2">
                  <span className="text-2xl">💻</span>
                  <p className="font-bold text-xs text-brand-dark uppercase tracking-wide">Техника</p>
                  <p className="text-xs">Ноутбуки с высокоскоростным доступом в Интернет, телевизоры для мультимедиа</p>
                </div>
                <div className="bg-brand-lightGray border border-gray-100 p-5 rounded-2xl text-center space-y-2">
                  <span className="text-2xl">📋</span>
                  <p className="font-bold text-xs text-brand-dark uppercase tracking-wide">Оснащение</p>
                  <p className="text-xs">Маркерно-меловые магнитные доски, удобные регулируемые парты под возраст</p>
                </div>
                <div className="bg-brand-lightGray border border-gray-100 p-5 rounded-2xl text-center space-y-2">
                  <span className="text-2xl">📚</span>
                  <p className="font-bold text-xs text-brand-dark uppercase tracking-wide">Методики</p>
                  <p className="text-xs">Современные методические УМК, наглядный демонстрационный материал</p>
                </div>
              </div>

              <p className="pt-2">Мы предоставляем всё необходимое для эффективного обучения и стремимся создать благоприятную, дружелюбную атмосферу для каждого ребенка.</p>
            </div>
          </div>
        )
      case 'services':
        return (
          <div className="space-y-6 text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-brand-dark border-b border-gray-100 pb-3">Платные образовательные услуги</h3>
            <div className="space-y-4 text-base leading-relaxed text-brand-gray font-medium">
              <p>Обучение в Языковом центре «Лингва+» осуществляется по договорам об образовании за счет средств физических и (или) юридических лиц.</p>
              
              <div className="space-y-3 pt-2">
                <p className="font-extrabold text-brand-dark text-base">Документы об оказании услуг и тарифах:</p>
                <div className="grid grid-cols-1 gap-2.5">
                  <a href="https://docs.google.com/document/d/1eWF4E4Xq0zHQIS9ZjuXp4D4narkmpKLA/edit?usp=drive_link&ouid=105841361200127359008&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" className="w-full text-left text-brand-orange hover:underline font-bold flex items-center space-x-2">
                    <span>📄 Договор об оказании платных дополнительных услуг</span>
                  </a>
                  <a href="https://docs.google.com/document/d/1C76pUdzlp91Dr7bqTeQbfI9cukO0wl76/edit?tab=t.0" target="_blank" rel="noopener noreferrer" className="w-full text-left text-brand-orange hover:underline font-bold flex items-center space-x-2">
                    <span>📄 Положение о порядке оказания услуг</span>
                  </a>
                  <a href="https://docs.google.com/document/d/1NW2ks-NN_ePLVBadzcfkAjP_BShV7oEP/edit?usp=drive_link&ouid=105841361200127359008&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" className="w-full text-left text-brand-orange hover:underline font-bold flex items-center space-x-2">
                    <span>📄 Приказ об утверждении цен 2025-2026 уч. год</span>
                  </a>
                  <a href="https://docs.google.com/document/d/1AdaIMBEcjqSTrWLKh92k1fJvrq4jZq0s/edit?usp=drive_link&ouid=105841361200127359008&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" className="w-full text-left text-brand-orange hover:underline font-bold flex items-center space-x-2">
                    <span>📄 Приказ об утверждении цен 2024-2025 уч. год</span>
                  </a>
                  <a href="https://docs.google.com/document/d/1i5GSiuf92VIQOBc6C7p6ClVpP7HvE5EL/edit?usp=drive_link&ouid=105841361200127359008&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" className="w-full text-left text-brand-orange hover:underline font-bold flex items-center space-x-2">
                    <span>📄 Приказ об утверждении цен 2023-2024 уч. год</span>
                  </a>
                  <a href="https://docs.google.com/document/d/1bav2wJbvEuSQghjYr6OqlZA5KQhvpSST/edit?tab=t.0" target="_blank" rel="noopener noreferrer" className="w-full text-left text-brand-orange hover:underline font-bold flex items-center space-x-2">
                    <span>📄 Приказ об утверждении цен 2022-2023 уч. год</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )
      case 'finance':
        return (
          <div className="space-y-6 text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-brand-dark border-b border-gray-100 pb-3">Финансово-хозяйственная деятельность</h3>
            <div className="space-y-4 text-base leading-relaxed text-brand-gray font-medium">
              <p>Поступление и расходование финансовых и материальных средств за текущий календарный год:</p>
              <ul className="list-disc list-inside space-y-1.5 pl-2">
                <li>Объем образовательной деятельности за счет бюджетных ассигнований федерального, регионального и местных бюджетов — <span className="font-extrabold text-brand-dark">0 руб. (0%)</span></li>
                <li>Объем образовательной деятельности по договорам об образовании за счет средств физических и (или) юридических лиц — <span className="font-extrabold text-brand-dark">100%</span></li>
                <li>Все полученные финансовые средства направляются на обеспечение образовательного процесса, оплату труда преподавателей, аренду помещений и закупку методических материалов.</li>
              </ul>
            </div>
          </div>
        )
      case 'vacancies':
        return (
          <div className="space-y-6 text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-brand-dark border-b border-gray-100 pb-3">Вакантные места для приема (перевода)</h3>
            <div className="space-y-4 text-base leading-relaxed text-brand-gray font-medium">
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>Вакантные места для приема за счет бюджетных ассигнований местных, региональных или федерального бюджетов — <span className="font-extrabold text-brand-dark">отсутствуют</span>.</li>
                <li>Прием и зачисление в группы дополнительного образования за счет средств физических лиц ведется в течение всего учебного года при наличии свободных мест.</li>
                <li>Информацию о наличии мест в группах вашего уровня уточняйте по единому телефону: <a href="tel:+79176308343" className="text-brand-orange font-bold hover:underline">8 (917) 630-83-43</a>.</li>
              </ul>
            </div>
          </div>
        )
      case 'support':
        return (
          <div className="space-y-6 text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-brand-dark border-b border-gray-100 pb-3">Стипендии и меры поддержки обучающихся</h3>
            <div className="space-y-4 text-base leading-relaxed text-brand-gray font-medium">
              <p>В Языковом центре «Лингва+» предоставление стипендий и мер материальной поддержки обучающихся не предусмотрено.</p>
              <p>Общежитие, интернат, а также жилые помещения для размещения иногородних обучающихся отсутствуют. Трудоустройство выпускников после прохождения дополнительных общеразвивающих курсов не осуществляется.</p>
            </div>
          </div>
        )
      case 'international':
        return (
          <div className="space-y-6 text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-brand-dark border-b border-gray-100 pb-3">Международное сотрудничество</h3>
            <div className="space-y-4 text-base leading-relaxed text-brand-gray font-medium">
              <p>Языковой центр не ведет международную деятельность:</p>
              <ul className="list-disc list-inside space-y-1.5 pl-2">
                <li>Заключенных договоров с иностранными и (или) международными организациями по вопросам образования и науки не имеется.</li>
                <li>Образовательные программы, прошедшие международную аккредитацию, отсутствуют.</li>
              </ul>
            </div>
          </div>
        )
      case 'nutrition':
        return (
          <div className="space-y-6 text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-brand-dark border-b border-gray-100 pb-3">Питание в образовательной организации</h3>
            <div className="space-y-4 text-base leading-relaxed text-brand-gray font-medium">
              <p>Питание обучающихся в языковом центре не осуществляется в связи с кратким временем пребывания детей на занятиях (не более 1.5 - 2 академических часов за один учебный день).</p>
              <p>Для всех обучающихся организован свободный питьевой режим (бутилированная чистая вода, одноразовые стаканчики).</p>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  // Scrollbar styles
  const scrollbarStyles = `
    .drawer-scroll::-webkit-scrollbar {
      width: 4px;
    }
    .drawer-scroll::-webkit-scrollbar-track {
      background: #f9fafb;
    }
    .drawer-scroll::-webkit-scrollbar-thumb {
      background: #e5e7eb;
      border-radius: 2px;
    }
    .drawer-scroll::-webkit-scrollbar-thumb:hover {
      background: #d1d5db;
    }
  `

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
          <style>{scrollbarStyles}</style>
          
          {/* Backdrop overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
          />

          {/* Drawer container */}
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="relative w-full max-w-5xl bg-white shadow-2xl z-10 flex flex-col h-screen"
          >
            {/* Header */}
            <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
              <div>
                <h2 className="text-lg sm:text-xl font-extrabold text-brand-dark tracking-tight uppercase">
                  Сведения об образовательной организации
                </h2>
                <p className="text-xs text-brand-gray font-medium mt-0.5">Языковой центр «Лингва+» • Ульяновск</p>
              </div>
              <button 
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-brand-orange hover:bg-gray-50 rounded-xl transition-all"
              >
                <X size={24} />
              </button>
            </div>

            {/* Split Grid Layout */}
            <div className="flex-grow flex flex-col md:flex-row overflow-hidden">
              
              {/* Top/Right Side: Tab Menu Selector */}
              <div className="drawer-scroll md:w-1/3 bg-brand-lightGray/40 border-b md:border-b-0 md:border-l border-gray-100 p-4 sm:p-6 overflow-x-auto md:overflow-y-auto flex-shrink-0 order-first md:order-last">
                <p className="hidden md:block text-xs font-bold text-brand-gray uppercase tracking-wider mb-4 pl-2">Разделы сведений</p>
                <div className="flex md:flex-col space-x-2 md:space-x-0 space-y-0 md:space-y-1.5 min-w-max md:min-w-0 pb-2 md:pb-0">
                  {tabs.map((tab) => {
                    const isActive = tab.id === activeTab
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`text-left px-4 py-2.5 md:w-full rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center justify-between group whitespace-nowrap md:whitespace-normal ${
                          isActive 
                            ? 'bg-brand-orange text-white shadow-md shadow-brand-orange/15' 
                            : 'text-brand-dark bg-white md:bg-transparent hover:bg-brand-orangeLight/40 hover:text-brand-orange border border-gray-100 md:border-0'
                        }`}
                      >
                        <span>{tab.label}</span>
                        {!isActive && (
                          <span className="hidden md:inline text-[10px] text-brand-gray group-hover:text-brand-orange opacity-0 group-hover:opacity-100 transition-opacity">
                            →
                          </span>
                        )}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Left Side: Content Panel (Scrollable) */}
              <div className="drawer-scroll flex-grow md:w-2/3 p-6 sm:p-8 overflow-y-auto bg-white">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {renderContent()}
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>

            {/* Sticky info banner at bottom of drawer */}
            <div className="px-6 py-4 bg-brand-lightGray border-t border-gray-100 text-center text-xs text-brand-gray font-medium flex-shrink-0">
              Сведения размещены в соответствии с Приказом Рособрнадзора от 14.08.2020 N 831
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
