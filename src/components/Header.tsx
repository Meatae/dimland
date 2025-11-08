'use client';

import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-accent/20">
      <nav className="flex justify-between items-center max-w-6xl mx-auto px-4 py-3">
        <h1 className="text-2xl font-bold font-serif animate-aurora bg-[length:200%_auto] bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(135deg, #00FFAB, #0A0A0A, #00FFAB, #38bdf8, #00FFAB)` }}></h1>
        <div className="space-x-2">
          <Button variant="ghost" onClick={() => scrollToSection('hero')}>
            Главная
          </Button>
          <Button variant="ghost" onClick={() => scrollToSection('about')}>
            Обо Мне
          </Button>
          <Button variant="ghost" onClick={() => scrollToSection('reviews')}>
            Отзывы
          </Button>
          <Button variant="ghost" onClick={() => scrollToSection('portfolio')}>
            Портфолио
          </Button>
          <Button variant="ghost" onClick={() => scrollToSection('contact')}>
            Контакты
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;