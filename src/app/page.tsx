'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { AuroraText } from "@/components/ui/aurora-text";
import { Meteors } from "@/components/ui/meteors";
import { GridPattern } from "@/components/ui/grid-pattern";

import { Particles } from "@/components/ui/particles";
import { IconCloud } from "@/components/ui/icon-cloud";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

import { motion, useMotionValue, useTransform } from "framer-motion";

const reviews = [
  {
    name: "Алексей Иванов",
    review: "Невероятные нейровидео! Ваше творчество вдохновляет и поражает воображение. Каждый проект - это настоящее произведение искусства, где ИИ становится инструментом для передачи глубоких эмоций. Особенно впечатляет, как вы сочетаете техническую точность с художественным видением, создавая видео, которые не просто смотрятся, а трогают душу. Рекомендую всем, кто ценит инновации в цифровом искусстве!",
    avatar: "/avatar.jpg",
    rating: 5
  },
  {
    name: "Мария Петрова",
    review: "Качество видео на высшем уровне. Рекомендую всем, кто ищет уникальный контент. Ваши нейровидео - это не просто визуальные эффекты, а полноценные истории, рассказанные языком ИИ. От первой секунды до финальных титров чувствуется профессионализм и страсть к делу. Особенно ценю, как вы используете передовые технологии для создания контента, который одновременно технологичен и человечен.",
    avatar: "/avatar.jpg",
    rating: 5
  },
  {
    name: "Дмитрий Сидоров",
    review: "Сочетание ИИ и искусства просто потрясающее. Жду новых проектов! Ваша работа демонстрирует, как искусственный интеллект может стать мостом между технологиями и человеческими эмоциями. Каждый кадр продуман до мелочей, а результат - это не просто видео, а опыт, который остается с вами надолго. Особенно впечатляет глубина исследования и креативный подход к использованию нейронных сетей.",
    avatar: "/avatar.jpg",
    rating: 5
  },
  {
    name: "Елена Кузнецова",
    review: "Ваш подход к нейровидео меняет представление о цифровом искусстве. Это не просто генерация контента, а создание новых форм выражения. Ваши проекты показывают, как ИИ может быть использован для глубокого повествования, где каждая деталь имеет значение. Особенно ценю инновационный подход и готовность экспериментировать с новыми технологиями. Жду с нетерпением следующих работ!",
    avatar: "/avatar.jpg",
    rating: 5
  }
];

export default function Home() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(event.clientX - centerX);
    mouseY.set(event.clientY - centerY);
  };
  return (
    <div className="relative max-w-6xl mx-auto px-4 py-8">
      <ScrollProgress className="top-[65px]" />
      <GridPattern className="absolute inset-0 opacity-20" />
      <Meteors number={20} />
      <Particles
        className="absolute inset-0"
        quantity={50}
        ease={80}
        color="#00FFAB"
        refresh
      />
      {/* Hero Section */}
      <section className="text-center py-20 relative z-10">
         <Avatar className="w-32 h-32 mx-auto mb-6">
           <AvatarImage src="/avatar.jpg" alt="Neurovideo Creator" />
         </Avatar>
          <AuroraText className="text-6xl font-bold mb-4 inline text-foreground hover:scale-105 transition-transform duration-300">
            Создаю для{'>'}
          </AuroraText>
          <TypingAnimation
            words={["эмоций", "подарка", "праздника", "памяти"]}
            loop
            className="text-6xl font-bold mb-4 inline animate-aurora bg-[length:200%_auto] bg-clip-text text-transparent"
            style={{ backgroundImage: `linear-gradient(135deg, #00FFAB, #0A0A0A, #00FFAB, #38bdf8, #00FFAB)` }}
            pauseDelay={2000}
            duration={100}
          />
        <p className="text-xl mb-6 max-w-2xl mx-auto">
          Создание завораживающих видео, генерируемых ИИ, которые рассказывают истории, вдохновленные магией Pixar.
          Воплощение воображения в жизнь через нейронные сети и творческое видение.
        </p>
         <div className="space-x-4">
           <Button size="lg" className="bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 animate-green-glow">
             Посмотреть Портфолио
           </Button>
           <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300">
             Связаться
           </Button>
         </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Обо Мне</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
           <div className="flex flex-col justify-center">
             <p className="text-lg mb-4 text-foreground">
               Как создатель нейровидео, я специализируюсь на использовании передовых технологий ИИ для генерации
               потрясающего видеоконтента. Моя работа сочетает передовые методы машинного обучения с художественным
               повествованием, создавая immersive опыты, которые захватывают аудиторию.
             </p>
             <p className="text-lg mb-4 text-foreground">
               Вдохновленный подходом Pixar к анимации и нарративу, я сосредотачиваюсь на создании видео,
               которые не только выглядят красиво, но и вызывают эмоции и рассказывают убедительные истории.
             </p>
             <div className="flex flex-wrap gap-2">
               <Badge>Генерация Видео ИИ</Badge>
               <Badge>Машинное Обучение</Badge>
               <Badge>Творческое Повествование</Badge>
               <Badge>Нейронные Сети</Badge>
             </div>
           </div>
           <div>
             <Card className="shadow-lg border-accent/20 hover:shadow-xl hover:border-accent/40 transition-all duration-300 bg-gradient-to-br from-white to-accent/5">
               <CardHeader>
                 <CardTitle>Мои Навыки</CardTitle>
                 <CardDescription>Технологии и инструменты, которые я использую</CardDescription>
               </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      "Stable Diffusion для генерации изображений",
                      "Runway ML для синтеза видео",
                      "Пользовательские архитектуры нейронных сетей",
                      "Python, TensorFlow, PyTorch",
                      "Творческое направление и постпродакшн"
                    ].map((skill, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-center space-x-4 group hover:bg-accent/5 p-3 rounded-lg transition-all duration-300"
                      >
                        <div className="flex-shrink-0">
                          <svg className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-lg font-medium text-foreground group-hover:text-accent transition-colors duration-300">
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
             </Card>
            </div>
           </div>
       </section>

        {/* Reviews Section */}
        <section id="reviews" className="py-16 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Отзывы</h2>
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {reviews.map((review, index) => (
                <CarouselItem key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    style={{
                      rotateX,
                      rotateY,
                      transformStyle: "preserve-3d",
                    }}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={() => {
                      mouseX.set(0);
                      mouseY.set(0);
                    }}
                    className="perspective-1000"
                  >
                    <Card className="border-accent/20 hover:border-accent/40 transition-all duration-500 p-8 bg-gradient-to-br from-white to-accent/5 transform-gpu">
                      <CardHeader className="pb-6">
                        <div className="flex items-center space-x-6">
                          <Avatar className="w-20 h-20 ring-4 ring-accent/20 hover:ring-accent/40 transition-all duration-300">
                            <AvatarImage src={review.avatar} alt={review.name} />
                          </Avatar>
                          <div>
                            <CardTitle className="text-2xl mb-2 hover:text-accent transition-colors duration-300">{review.name}</CardTitle>
                            <div className="flex space-x-1">
                              {[...Array(review.rating)].map((_, i) => (
                                <span key={i} className="text-yellow-400 text-xl hover:scale-110 transition-transform duration-200">★</span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-lg text-muted-foreground leading-relaxed hover:text-foreground transition-colors duration-300">{review.review}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </section>

       {/* Portfolio Section */}
      <section id="portfolio" className="py-16 relative z-10">
        <motion.h2
          className="text-3xl font-bold text-center mb-8 text-foreground"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Портфолио
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Проект 1",
              desc: "Короткометражный фильм, сгенерированный ИИ",
              content: "Завораживающее путешествие по нейронным ландшафтам.",
              video: "/video-placeholder1.svg"
            },
            {
              title: "Проект 2",
              desc: "Интерактивный опыт нейровидео",
              content: "Где ввод зрителя формирует ИИ-генерированный нарратив.",
              video: "/video-placeholder2.svg"
            },
            {
              title: "Проект 3",
              desc: "Абстрактное видео нейронного искусства",
              content: "Визуализация красоты алгоритмов машинного обучения.",
              video: "/video-placeholder3.svg"
            },
            {
              title: "Проект 4",
              desc: "Эксперимент с ИИ-анимацией",
              content: "Исследование новых форм цифрового повествования.",
              video: "/video-placeholder4.svg"
            },
            {
              title: "Проект 5",
              desc: "Будущий проект",
              content: "Скоро будет представлен новый нейровидео-контент.",
              video: "/video-placeholder5.svg"
            },
            {
              title: "Проект 6",
              desc: "Творческий хаос",
              content: "Импровизация с нейронными сетями и искусством.",
              video: "/video-placeholder6.svg"
            }
          ].map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: 1,
                y: 0,
                rotate: typeof window !== 'undefined' && window.innerWidth > 768 ? [0, 1, -1, 0] : 0
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                rotate: typeof window !== 'undefined' && window.innerWidth > 768 ? { repeat: Infinity, duration: 4 + index * 0.5, ease: "easeInOut" } : {}
              }}
              whileHover={typeof window !== 'undefined' && window.innerWidth > 768 ? { y: -10, rotate: 2 } : {}}
              whileTap={{ scale: 0.95 }}
            >
               <Card className="p-6 shadow-lg border-accent/20 hover:shadow-xl hover:border-accent/40 transition-all duration-300 hover:scale-105">
                 <CardHeader>
                   <CardTitle>{project.title}</CardTitle>
                   <CardDescription>{project.desc}</CardDescription>
                 </CardHeader>
                 <CardContent>
                   <div className="relative mb-4">
                     <img src={project.video} alt={project.title} className="w-full h-32 object-cover rounded" />
                     <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded opacity-0 hover:opacity-100 transition-opacity duration-300">
                       <svg className="w-12 h-12 text-white/80" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M8 5v14l11-7z"/>
                       </svg>
                     </div>
                   </div>
                   <p>{project.content}</p>
                 </CardContent>
               </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Контакты</h2>
         <Card className="max-w-md mx-auto shadow-lg border-accent/20 hover:shadow-xl hover:border-accent/40 transition-all duration-300">
           <CardHeader>
             <CardTitle>Связаться</CardTitle>
             <CardDescription>Давайте создадим что-то потрясающее вместе</CardDescription>
           </CardHeader>
           <CardContent>
             <p className="mb-4">Заинтересованы в сотрудничестве над проектами нейровидео?</p>
             <Button className="w-full bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-primary-foreground">Отправить Сообщение</Button>
           </CardContent>
         </Card>
      </section>
    </div>
  );
}
