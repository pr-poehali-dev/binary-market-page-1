
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
      date: "Сегодня 10:45",
    },
    {
      id: 2,
      title: "AMD Ryzen 9 5950X",
      price: 39500,
      location: "Санкт-Петербург",
      image: "https://images.unsplash.com/photo-1555618254-65f4ff782f4e?auto=format&fit=crop&q=80&w=1000",
      brand: "amd",
      date: "Сегодня 09:15",
    },
    {
      id: 3,
      title: "Intel Core i7-13700K",
      price: 36700,
      location: "Екатеринбург",
      image: "https://images.unsplash.com/photo-1562408590-e32931084e23?auto=format&fit=crop&q=80&w=1000",
      brand: "intel",
      date: "Вчера 19:30",
    },
    {
      id: 4,
      title: "AMD Ryzen 7 7800X3D",
      price: 35900,
      location: "Казань",
      image: "https://images.unsplash.com/photo-1563770557317-3be88689c9ab?auto=format&fit=crop&q=80&w=1000",
      brand: "amd",
      date: "Вчера 18:22",
    },
    {
      id: 5,
      title: "Intel Core i5-13600K",
      price: 28500,
      location: "Новосибирск",
      image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=1000",
      brand: "intel",
      date: "Вчера 15:40",
    },
    {
      id: 6,
      title: "AMD Ryzen 5 7600X",
      price: 24900,
      location: "Москва",
      image: "https://images.unsplash.com/photo-1555618254-65f4ff782f4e?auto=format&fit=crop&q=80&w=1000",
      brand: "amd",
      date: "Вчера 14:07",
    },
    {
      id: 7,
      title: "Intel Core i9-14900K",
      price: 48900,
      location: "Санкт-Петербург",
      image: "https://images.unsplash.com/photo-1562408590-e32931084e23?auto=format&fit=crop&q=80&w=1000",
      brand: "intel",
      date: "2 мая 11:30",
    },
    {
      id: 8,
      title: "AMD Ryzen 9 7950X",
      price: 45500,
      location: "Екатеринбург",
      image: "https://images.unsplash.com/photo-1563770557317-3be88689c9ab?auto=format&fit=crop&q=80&w=1000",
      brand: "amd",
      date: "1 мая 16:45",
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
              <Link to="/" className="font-bold text-xl">Binary Epoch</Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="font-medium hover:text-gray-600">Главная страница</Link>
              <Link to="/processors" className="font-medium hover:text-gray-600">Процессоры</Link>
              <Link to="/comparison" className="font-medium hover:text-gray-600">Сравнение</Link>
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
        <div className="mb-6 text-center">
          <h1 className="text-4xl font-bold mb-2">Binary Market</h1>
          <p className="text-gray-600 mb-6">Здесь представлены готовые характеристики текущей серии флагманов.</p>
        </div>
        
        {/* Поиск и размещение объявления */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-grow flex gap-2">
            <Input 
              placeholder="Поиск процессоров..." 
              className="bg-white border-gray-300"
            />
            <Button className="bg-[#E3E7F7] text-black hover:bg-[#d0d4e4]">
              <Icon name="Search" className="mr-2 h-4 w-4" />
              Найти
            </Button>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <Icon name="Plus" className="mr-2 h-4 w-4" />
            Разместить объявление
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-10">
          {/* Левая колонка с фильтрами */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden sticky top-20">
              <div className="p-4 bg-[#E3E7F7] border-b border-gray-200">
                <h2 className="font-semibold">Фильтры</h2>
              </div>
              <div className="p-4 space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Производитель</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="checkbox" id="all" className="mr-2" checked={selectedCategory === "all"} 
                        onChange={() => setSelectedCategory("all")} />
                      <label htmlFor="all">Все</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="intel" className="mr-2" checked={selectedCategory === "intel"} 
                        onChange={() => setSelectedCategory("intel")} />
                      <label htmlFor="intel">Intel</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="amd" className="mr-2" checked={selectedCategory === "amd"} 
                        onChange={() => setSelectedCategory("amd")} />
                      <label htmlFor="amd">AMD</label>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="font-medium mb-2">Цена, ₽</h3>
                  <div className="flex gap-2">
                    <Input placeholder="от" className="bg-white border-gray-300" />
                    <Input placeholder="до" className="bg-white border-gray-300" />
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="font-medium mb-2">Состояние</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="checkbox" id="new" className="mr-2" />
                      <label htmlFor="new">Новый</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="used" className="mr-2" />
                      <label htmlFor="used">Б/у</label>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full bg-[#E3E7F7] text-black hover:bg-[#d0d4e4]">
                  Показать результаты
                </Button>
              </div>
            </div>
          </div>
          
          {/* Правая колонка с объявлениями */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-4 bg-[#E3E7F7] border-b border-gray-200 flex justify-between items-center">
                <h2 className="font-semibold">Объявления</h2>
                <div className="flex items-center text-sm">
                  <span className="mr-2">Сортировка:</span>
                  <select className="bg-white rounded p-1 border border-gray-300 text-sm">
                    <option>По дате</option>
                    <option>Сначала дешевле</option>
                    <option>Сначала дороже</option>
                  </select>
                </div>
              </div>
              
              <div className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredProcessors.map((processor) => (
                    <Card key={processor.id} className="overflow-hidden hover:shadow-md transition-shadow duration-200 flex flex-col h-full">
                      <div className="aspect-video relative overflow-hidden bg-gray-100">
                        <img 
                          src={processor.image} 
                          alt={processor.title} 
                          className="object-cover w-full h-full"
                        />
                        <Button variant="outline" size="icon" className="absolute top-2 right-2 bg-white rounded-full w-8 h-8 p-0">
                          <Icon name="Heart" className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="p-4 flex-grow flex flex-col">
                        <div className="font-bold text-lg mb-1 hover:text-blue-600">{processor.title}</div>
                        <div className="text-xl font-semibold mb-2">{processor.price.toLocaleString()} ₽</div>
                        <div className="mt-auto pt-2 text-gray-500 text-sm flex items-center justify-between">
                          <div className="flex items-center">
                            <Icon name="MapPin" className="h-4 w-4 mr-1" />
                            {processor.location}
                          </div>
                          <div>{processor.date}</div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
                
                <div className="mt-6 flex justify-center">
                  <Button variant="outline" className="bg-white">
                    Показать еще
                  </Button>
                </div>
              </div>
            </div>
          </div>
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

        {/* Инструкции по использованию сервиса */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-10">
          <div className="p-4 bg-[#E3E7F7] border-b border-gray-200">
            <h2 className="font-semibold">Как пользоваться Binary Market</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-[#E3E7F7] rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Icon name="Search" className="h-8 w-8 text-gray-700" />
                </div>
                <h3 className="font-semibold mb-2">1. Найдите процессор</h3>
                <p className="text-sm text-gray-600">Используйте фильтры для поиска нужной модели</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-[#E3E7F7] rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Icon name="MessageCircle" className="h-8 w-8 text-gray-700" />
                </div>
                <h3 className="font-semibold mb-2">2. Свяжитесь с продавцом</h3>
                <p className="text-sm text-gray-600">Обсудите детали и договоритесь о сделке</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-[#E3E7F7] rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Icon name="CheckCircle" className="h-8 w-8 text-gray-700" />
                </div>
                <h3 className="font-semibold mb-2">3. Завершите сделку</h3>
                <p className="text-sm text-gray-600">Оплатите и получите ваш процессор</p>
              </div>
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
