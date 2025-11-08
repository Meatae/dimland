import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 text-secondary-foreground p-8 mt-16 border-t border-accent/20">
      <div className="max-w-6xl mx-auto text-center">
        <blockquote className="text-lg italic mb-6 font-serif animate-aurora bg-[length:200%_auto] bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(135deg, #00FFAB, #0A0A0A, #00FFAB, #38bdf8, #00FFAB)` }}>
          &ldquo;Создание миров из кода&rdquo;
        </blockquote>
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:contact@example.com" className="text-accent hover:text-accent/80 transition-colors">
            <Mail size={24} />
          </a>
        </div>
        <p className="text-sm">&copy; 2025 Создатель Нейровидео. Все права защищены.</p>
        <p className="text-xs mt-2 opacity-75">Создание историй через ИИ-генерированное видео.</p>
      </div>
    </footer>
  );
};

export default Footer;