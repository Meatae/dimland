import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground p-4 shadow-lg">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold">Создатель Нейровидео</h1>
        <div className="space-x-2">
          <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
            Главная
          </Button>
          <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
            Обо Мне
          </Button>
          <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
            Портфолио
          </Button>
          <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
            Контакты
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;