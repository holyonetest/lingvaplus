import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { programsData, categories } from "../data/programsData"

export default function Programs({ onOpenModal }) {


  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  }

  return (
    <section id="programs" className="relative pt-12 pb-16 md:pb-24 border-t border-white/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-left mb-16">
          <p className="text-sm font-bold text-brand-orange uppercase tracking-wider mb-2">Направления обучения</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
            Выберите программу обучения
          </h2>
        </div>

        <Tabs defaultValue={categories[0].id} className="w-full">
          <TabsList className="mb-10 w-full justify-start sm:justify-center flex-wrap bg-white/50 backdrop-blur-sm border border-brand-orange/10 p-1.5 rounded-2xl h-auto gap-2">
            {categories.map(cat => (
              <TabsTrigger 
                key={cat.id} 
                value={cat.id}
                className="rounded-xl px-6 py-3 text-sm font-bold data-[state=active]:bg-brand-orange data-[state=active]:text-white text-brand-gray transition-all whitespace-nowrap flex-grow sm:flex-grow-0"
              >
                {cat.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map(cat => {
            const catPrograms = programsData.filter(p => p.categoryId === cat.id)
            return (
              <TabsContent key={cat.id} value={cat.id} className="mt-0 outline-none">
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: '-100px' }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {catPrograms.map((prog, index) => {
                    const IconComponent = prog.icon
                    return (
                      <motion.div
                        key={prog.id}
                        variants={cardVariants}
                        className="flex"
                      >
                        <Card className="glass-card flex flex-col justify-between group border border-white/50 shadow-soft hover:shadow-soft-hover rounded-3xl w-full overflow-hidden">
                          {/* Image Cover */}
                          {prog.image && (
                            <div className="w-full aspect-[4/3] sm:aspect-[4/3] bg-brand-lightGray relative overflow-hidden border-b border-gray-100/50">
                              <img 
                                src={prog.image} 
                                alt={prog.title} 
                                loading="lazy"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out" 
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                            </div>
                          )}
                          <CardHeader className="space-y-4 px-8 pt-6 pb-4">
                            <div className="flex items-center justify-between">
                              <div className="w-12 h-12 bg-brand-orangeLight text-brand-orange rounded-2xl flex items-center justify-center shadow-sm">
                                <IconComponent size={24} className="stroke-[1.75]" />
                              </div>
                              <div className="flex flex-col items-end">
                                <span className="text-xl font-black text-brand-dark">{prog.price}</span>
                                <Badge variant="secondary" className="bg-brand-lightGray text-brand-gray mt-1 px-2.5 py-0.5 rounded-md text-[10px] font-bold border-0 uppercase tracking-wider">
                                  {prog.age}
                                </Badge>
                              </div>
                            </div>

                            <div className="space-y-2">
                              <CardTitle className="text-xl font-bold text-brand-dark leading-snug">
                                {prog.title}
                              </CardTitle>
                              <CardDescription className="text-sm text-brand-gray leading-relaxed font-medium">
                                {prog.shortDescription}
                              </CardDescription>
                            </div>
                          </CardHeader>

                          <CardFooter className="px-8 pb-8 pt-4 mt-auto">
                            <div className="flex items-center w-full space-x-3">
                              <Button 
                                onClick={() => onOpenModal(prog.id)}
                                className="flex-grow py-6 h-[52px] bg-brand-orange text-white hover:bg-brand-orange/90 hover:shadow-md hover:-translate-y-0.5 text-sm font-bold rounded-2xl transition-all duration-300 active:scale-[0.98]"
                              >
                                Узнать расписание
                              </Button>
                              <a 
                                href={prog.vkLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-[52px] h-[52px] flex-shrink-0 flex items-center justify-center bg-white border border-gray-200 text-brand-orange hover:border-brand-orange hover:bg-brand-orangeLight rounded-2xl transition-all shadow-soft"
                                title="Посмотреть товар в VK"
                              >
                                <span className="font-black text-sm">VK</span>
                              </a>
                            </div>
                          </CardFooter>
                        </Card>
                      </motion.div>
                    )
                  })}
                </motion.div>
              </TabsContent>
            )
          })}
        </Tabs>
      </div>
    </section>
  )
}
