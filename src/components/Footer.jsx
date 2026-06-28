import React, { useState } from 'react'
import { Phone, MapPin, Star, Instagram } from 'lucide-react'
export default function Footer({ onOpenOrgInfo }) {
  const branches = [
    {
      id: 'vlksm',
      name: 'Филиал на ВЛКСМ',
      address: 'просп. 50-летия ВЛКСМ, 13',
      details: 'Ульяновск',
      rating: 4.4,
      reviewsCount: 9,
    },
    {
      id: 'vokzalnaya',
      name: 'Филиал на Вокзальной',
      address: 'Вокзальная ул., 6Б',
      details: 'Ульяновск, этаж 2, офис 13',
      rating: 4.3,
      reviewsCount: 6,
    },
    {
      id: 'gogolya',
      name: 'Филиал на Гоголя',
      address: 'ул. Гоголя, 40А',
      details: 'Ульяновск',
      rating: 4.7,
      reviewsCount: 19,
    },
    {
      id: 'yugozapad',
      name: 'Филиал на Юго-Западной',
      address: 'Юго-западная ул., 11',
      details: 'Ульяновск',
      rating: 4.6,
      reviewsCount: 11,
    },
    {
      id: 'ablukova',
      name: 'Филиал на Аблукова',
      address: 'ул. Аблукова, 12',
      details: 'Ульяновск, подъезд 1, офис 103, этаж 1',
      rating: 4.9,
      reviewsCount: 26,
    },
    {
      id: 'khrustal',
      name: 'Филиал на Хрустальной',
      address: 'Хрустальная ул., 35А',
      details: 'Ульяновск, этаж 2',
      rating: 5.0,
      reviewsCount: 45,
    },
    {
      id: 'nevskogo',
      name: 'Филиал на Невского',
      address: 'ул. Александра Невского, 2В',
      details: 'Ульяновск',
      rating: 4.2,
      reviewsCount: 10,
    },
    {
      id: 'ryabikova',
      name: 'Филиал на Рябикова',
      address: 'ул. Рябикова, 37',
      details: 'Ульяновск, этаж 2',
      rating: 4.9,
      reviewsCount: 25,
    },
    {
      id: 'igoshina',
      name: 'Филиал на Игошина',
      address: 'ул. Игошина, 3',
      details: 'Ульяновск',
      rating: 5.0,
      reviewsCount: 33,
    }
  ]

  const [activeBranch, setActiveBranch] = useState(branches[0])

  // Custom scrollbar styles for branch selector
  const scrollbarStyles = `
    .branch-scroll::-webkit-scrollbar {
      width: 4px;
    }
    .branch-scroll::-webkit-scrollbar-track {
      background: #f3f4f6;
    }
    .branch-scroll::-webkit-scrollbar-thumb {
      background: #e5e7eb;
      border-radius: 2px;
    }
    .branch-scroll::-webkit-scrollbar-thumb:hover {
      background: #d1d5db;
    }
  `

  return (
    <footer id="contacts" className="py-24 bg-brand-lightGray border-t border-gray-50">
      <style>{scrollbarStyles}</style>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Core Contacts & Socials */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl font-extrabold text-brand-dark tracking-tight uppercase">
                Контакты
              </h2>
              <p className="text-sm text-brand-gray font-medium leading-relaxed max-w-sm">
                Мы всегда рады ответить на ваши вопросы. Позвоните нам или напишите в удобный мессенджер!
              </p>

              {/* General Phone Call */}
              <div className="space-y-4 pt-4">
                <div className="flex items-start space-x-3 text-brand-dark">
                  <Phone className="text-brand-orange mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-bold text-base">Единый телефон</p>
                    <a href="tel:+79176308343" className="text-xl font-extrabold text-brand-orange hover:text-brand-orangeHover transition-colors mt-0.5 block">
                      8 (917) 630-83-43
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="space-y-4">
              <p className="text-xs font-bold text-brand-gray uppercase tracking-wider">Мы в соцсетях</p>
              <div className="flex flex-wrap gap-3">
                <a 
                  href="https://vk.com/lingvapluss" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center space-x-2 bg-brand-orange text-white px-5 py-3 rounded-2xl hover:bg-brand-orangeHover shadow-md shadow-brand-orange/10 hover:shadow-lg hover:shadow-brand-orange/20 transition-all font-bold text-sm"
                >
                  <span className="font-extrabold text-sm">VK</span>
                  <span>ВКонтакте</span>
                </a>
                <a 
                  href="https://instagram.com/lingvapluss" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 flex items-center justify-center bg-white border border-gray-200 text-brand-orange hover:border-brand-orange hover:bg-brand-orangeLight rounded-2xl transition-all shadow-soft"
                >
                  <Instagram size={18} className="stroke-[2]" />
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className="pt-8 border-t border-gray-200 text-xs text-brand-gray font-medium space-y-1">
              <p>© {new Date().getFullYear()} Лингва+. Все права защищены.</p>
              <p>Ульяновск • 9 филиалов обучения</p>
              <button 
                onClick={onOpenOrgInfo}
                className="text-brand-orange hover:underline font-bold text-left block pt-1.5"
              >
                Сведения об образовательной организации
              </button>
            </div>
          </div>

          {/* Middle Column: Branch Selector (Interactive) */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            <div>
              <h3 className="text-xl font-bold text-brand-dark flex items-center space-x-2">
                <MapPin className="text-brand-orange" size={20} />
                <span>Наши филиалы (9)</span>
              </h3>
              <p className="text-xs text-brand-gray font-medium mt-1">Выберите ближайший, чтобы увидеть его на карте</p>
            </div>

            {/* Branch Cards scroll list */}
            <div className="branch-scroll max-h-[380px] overflow-y-auto space-y-3 pr-2">
              {branches.map((b) => {
                const isActive = b.id === activeBranch.id
                return (
                  <button
                    key={b.id}
                    onClick={() => setActiveBranch(b)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex justify-between items-start space-x-3 ${
                      isActive 
                        ? 'bg-white border-brand-orange shadow-md shadow-brand-orange/5' 
                        : 'bg-white/60 border-gray-100 hover:border-gray-300 hover:bg-white'
                    }`}
                  >
                    <div className="space-y-1">
                      <p className="font-bold text-xs sm:text-sm text-brand-dark">{b.name}</p>
                      <p className="text-xs text-brand-gray font-medium">{b.address}</p>
                      {b.details && <p className="text-[10px] text-brand-gray/80 italic">{b.details}</p>}
                    </div>

                    {/* rating badge */}
                    <div className="flex items-center space-x-0.5 bg-amber-50 text-amber-600 px-2 py-1 rounded-lg text-xs font-bold flex-shrink-0">
                      <Star size={12} fill="currentColor" className="stroke-none" />
                      <span>{b.rating.toFixed(1)}</span>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right Column: Dynamic Map */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-soft">
              <div className="flex items-center space-x-2 text-xs font-bold text-brand-orange uppercase tracking-wider mb-1">
                <span>Карта проезда</span>
              </div>
              <p className="text-sm font-bold text-brand-dark leading-snug">{activeBranch.name}</p>
              <p className="text-xs text-brand-gray font-medium mt-0.5">{activeBranch.address}, {activeBranch.details}</p>
              <div className="flex items-center space-x-1 mt-1 text-xs text-brand-gray font-medium">
                <span>Рейтинг на картах:</span>
                <span className="font-bold text-amber-500">{activeBranch.rating}</span>
                <span>({activeBranch.reviewsCount} оценок)</span>
              </div>
            </div>

            {/* Map wrapper */}
            <div className="h-[300px] relative overflow-hidden rounded-3xl border border-gray-100 shadow-soft">
              <iframe 
                src={`https://yandex.ru/map-widget/v1/?text=${encodeURIComponent('Ульяновск ' + activeBranch.address)}&z=16&l=map`} 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                allowFullScreen={true}
                title={`Филиал Лингва+ на ${activeBranch.address}`}
                className="w-full h-full relative z-10"
                style={{ border: 0 }}
              />
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}
