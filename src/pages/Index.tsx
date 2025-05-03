
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { useState } from "react";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const featuredProcessors = [
    {
      id: 1,
      title: "Intel Core i9-12900K",
      price: 42900,
      location: "Москва",
      image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=1000",
      brand: "intel",
    },
    {
      id: 2,
      title: "AMD Ryzen 9 5950X",
      price: 39500,
      location: "Санкт-Петербург",
      image: "https://images.unsplash.com/photo-1555618254-65f4ff782f4e?auto=format&fit=crop&q=80&w=1000",
      brand: "amd",
    },
    {
      id: 3,
      title: "Intel Core i7-13700K",
      price: 36700,
      location: "Екатеринбург",
      image: "https://images.unsplash.com/photo-1562408590-e32931084e23?auto=format&fit=crop&q=80&w=1000",
      brand: "intel",
    },
    {
      id: 4,
      title: "AMD Ryzen 7 7800X3D",
      price: 35900,
      location: "Казань",
      image: "https://images.unsplash.com/photo-1563770557317-3be88689c9ab?auto=format&fit=crop&q=80&w=1000",
      brand: "amd",
    },
    {
      id: 5,
      title: "Intel Core i5-13600K",
      price: 28500,
      location: "Новосибирск",
      image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=1000",
      brand: "intel",
    },
    {
      id: 6,
      title: "AMD Ryzen 5 7600X",
      price: 24900,
      location: "Москва",
      image: "https://images.unsplash.com/photo-1555618254-65f4ff782f4e?auto=format&fit=crop&q=80&w=1000",
      brand: "amd",
    },
    {
      id: 7,
      title: "Intel Core i9-14900K",
      price: 48900,
      location: "Санкт-Петербург",
      image: "https://images.unsplash.com/photo-1562408590-e32931084e23?auto=format&fit=crop&q=80&w=1000",
      brand: "intel",
    },
    {
      id: 8,
      title: "AMD Ryzen 9 7950X",
      price: 45500,
      location: "Екатеринбург",
      image: "https://images.unsplash.com/photo-1563770557317-3be88689c9ab?auto=format&fit=crop&q=80&w=1000",
      brand: "amd",
    },
  ];

  const filteredProcessors = selectedCategory === "all" 
    ? featuredProcessors 
    : featuredProcessors.filter(proc => proc.brand === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFAFA]">
      {/* Верхняя навигация */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="font-bold text-xl">Binary Market</Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="font-medium hover:text-gray-600">Главная страница</Link>
              <Link to="/processors" className="font-medium hover:text-gray-600">Процессоры</Link>
              <Link to="/comparison" className="font-medium hover:text-gray-600">Сравнения</Link>
              <Link to="/news" className="font-medium hover:text-gray-600">Новости</Link>
            </nav>
            <div className="flex items-center">
              <Link to="/profile">
                <Icon name="User" className="w-6 h-6 text-gray-700" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Основной контент */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Баннер */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2">Binary Market</h1>
          <p className="text-gray-600 mb-6">Здесь представлены готовые характеристики текущей серии флагманов.</p>
          
          {/* Поисковая строка */}
          <div className="max-w-2xl mx-auto flex gap-2">
            <Input 
              placeholder="Поиск процессоров..." 
              className="bg-white border-gray-300"
            />
            <Button className="bg-[#E3E7F7] text-black hover:bg-[#d0d4e4]">
              <Icon name="Search" className="mr-2 h-4 w-4" />
              Найти
            </Button>
          </div>
        </div>

        {/* Упрощенные фильтры */}
        <div className="mb-6 flex justify-center gap-4">
          <Button 
            variant={selectedCategory === "all" ? "default" : "outline"}
            className={selectedCategory === "all" ? "bg-[#E3E7F7] text-black" : "bg-white"}
            onClick={() => setSelectedCategory("all")}
          >
            Все процессоры
          </Button>
          <Button 
            variant={selectedCategory === "intel" ? "default" : "outline"}
            className={selectedCategory === "intel" ? "bg-[#E3E7F7] text-black" : "bg-white"}
            onClick={() => setSelectedCategory("intel")}
          >
            Intel
          </Button>
          <Button 
            variant={selectedCategory === "amd" ? "default" : "outline"}
            className={selectedCategory === "amd" ? "bg-[#E3E7F7] text-black" : "bg-white"}
            onClick={() => setSelectedCategory("amd")}
          >
            AMD
          </Button>
        </div>

        {/* Пролистывающийся каталог процессоров */}
        <div className="mb-10 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-4 bg-[#E3E7F7] border-b border-gray-200">
            <h2 className="text-xl font-semibold">Каталог процессоров</h2>
          </div>
          
          <ScrollArea className="h-[500px] p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredProcessors.map((processor) => (
                <Card key={processor.id} className="overflow-hidden hover:shadow-md transition-shadow duration-200">
                  <div className="aspect-video relative overflow-hidden bg-gray-100">
                    <img 
                      src={processor.image} 
                      alt={processor.title} 
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-4">
                    <div className="font-bold text-lg mb-1">{processor.title}</div>
                    <div className="text-xl font-semibold mb-2">{processor.price.toLocaleString()} ₽</div>
                    <div className="text-gray-500 text-sm flex items-center">
                      <Icon name="MapPin" className="h-4 w-4 mr-1" />
                      {processor.location}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Рекламный блок сообщества */}
        <div className="bg-[#E3E7F7] rounded-lg p-6 mb-10">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2">Присоединяйтесь к нашему сообществу ВКонтакте</h2>
              <p className="text-gray-700 mb-4">Следите за новостями рынка процессоров, получайте советы от экспертов и участвуйте в обсуждениях</p>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Icon name="ExternalLink" className="mr-2 h-4 w-4" />
                Перейти в сообщество
              </Button>
            </div>
            <div className="flex-1 flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1563770557317-3be88689c9ab?auto=format&fit=crop&q=80&w=600" 
                alt="Сообщество процессоров" 
                className="rounded-lg max-w-[250px]"
              />
            </div>
          </div>
        </div>
      </main>

      {/* Подвал */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">Binary Epoch</h3>
              <p className="text-gray-600 text-sm">Ваш поставщик и источник информации о процессорах.</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Навигация</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="text-gray-600 hover:text-gray-900">Главная</Link></li>
                <li><Link to="/processors" className="text-gray-600 hover:text-gray-900">Процессоры</Link></li>
                <li><Link to="/comparison" className="text-gray-600 hover:text-gray-900">Сравнения</Link></li>
                <li><Link to="/news" className="text-gray-600 hover:text-gray-900">Новости</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Свяжитесь с нами</h3>
              <p className="text-gray-600 text-sm">binary.epoch.help@gmail.com</p>
            </div>
          </div>
          <Separator />
          <div className="pt-4 text-center text-sm text-gray-600">
            © 2025 Binary Epoch. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
