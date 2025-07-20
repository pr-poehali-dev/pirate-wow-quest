import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-forest via-gray-900 to-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-dark-forest/90 backdrop-blur-sm border-b border-mystical-purple/30">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-cinzel font-bold text-mystical-purple animate-glow">
              ELGRACIA
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-mystical-purple transition-colors">Главная</a>
              <a href="#features" className="hover:text-mystical-purple transition-colors">Особенности</a>
              <a href="#news" className="hover:text-mystical-purple transition-colors">Новости</a>
              <a href="#forum" className="hover:text-mystical-purple transition-colors">Форум</a>
            </div>
            <div className="flex space-x-4">
              <Button variant="outline" className="border-mystical-purple text-mystical-purple hover:bg-mystical-purple hover:text-white">
                Регистрация
              </Button>
              <Button className="bg-enchanted-green hover:bg-enchanted-green/80">
                Скачать
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-2 h-2 bg-firefly-amber rounded-full animate-firefly opacity-70"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-firefly-amber rounded-full animate-firefly opacity-80" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-firefly-amber rounded-full animate-firefly opacity-60" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-60 right-20 w-1 h-1 bg-firefly-amber rounded-full animate-firefly opacity-90" style={{animationDelay: '3s'}}></div>
          <div className="absolute bottom-60 right-1/3 w-2 h-2 bg-firefly-amber rounded-full animate-firefly opacity-75" style={{animationDelay: '0.5s'}}></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="mb-8">
            <img 
              src="/img/f5a530b2-8244-4b39-837a-7d4a2ccdb59f.jpg" 
              alt="Mystical Tree of Elgracia" 
              className="mx-auto w-96 h-96 object-cover rounded-full border-4 border-mystical-purple shadow-2xl animate-float"
            />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-cinzel font-bold mb-6 text-mystical-purple animate-glow">
            ELGRACIA
          </h1>
          
          <p className="text-xl md:text-2xl font-inter mb-4 text-gray-300">
            Загадочный мир World of Warcraft ждет тебя
          </p>
          
          <p className="text-lg font-inter mb-8 text-gray-400 max-w-2xl mx-auto">
            Погрузись в уникальные квесты с дополнительным сюжетом и загадками, 
            которые откроют тайны древнего мира Элграции
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-enchanted-green hover:bg-enchanted-green/80 text-white font-inter text-lg px-8 py-3"
            >
              <Icon name="Download" className="mr-2" />
              Скачать клиент
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-mystical-purple text-mystical-purple hover:bg-mystical-purple hover:text-white font-inter text-lg px-8 py-3"
            >
              <Icon name="UserPlus" className="mr-2" />
              Создать аккаунт
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-b from-transparent to-dark-forest/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-cinzel font-bold text-center mb-12 text-mystical-purple">
            Особенности сервера
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-dark-forest/60 border-mystical-purple/30 hover:border-mystical-purple transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-mystical-purple/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="BookOpen" className="text-mystical-purple" size={24} />
                </div>
                <CardTitle className="text-mystical-purple font-cinzel">Уникальный сюжет</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 font-inter">
                  Дополнительные квестовые линии с загадками и тайнами древнего мира Элграции
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="bg-dark-forest/60 border-mystical-purple/30 hover:border-mystical-purple transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-enchanted-green/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Users" className="text-enchanted-green" size={24} />
                </div>
                <CardTitle className="text-mystical-purple font-cinzel">Активное сообщество</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 font-inter">
                  Дружелюбные игроки, гильдии и регулярные события для всех уровней
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="bg-dark-forest/60 border-mystical-purple/30 hover:border-mystical-purple transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-firefly-amber/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Sparkles" className="text-firefly-amber" size={24} />
                </div>
                <CardTitle className="text-mystical-purple font-cinzel">Магические артефакты</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 font-inter">
                  Эксклюзивные предметы и заклинания, доступные только на сервере Элграция
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-cinzel font-bold text-center mb-12 text-mystical-purple">
            Последние новости
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-dark-forest/60 border-mystical-purple/30">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge className="bg-enchanted-green/20 text-enchanted-green">Обновление</Badge>
                  <span className="text-sm text-gray-400">2 дня назад</span>
                </div>
                <CardTitle className="text-mystical-purple font-cinzel">Новые загадки Элграции</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 font-inter">
                  Добавлены 5 новых квестовых цепочек с уникальными загадками в Темном лесу
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="bg-dark-forest/60 border-mystical-purple/30">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge className="bg-firefly-amber/20 text-firefly-amber">Событие</Badge>
                  <span className="text-sm text-gray-400">1 неделя назад</span>
                </div>
                <CardTitle className="text-mystical-purple font-cinzel">Фестиваль Светлячков</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 font-inter">
                  Специальное событие с уникальными наградами завершилось. Следите за анонсами!
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-dark-forest border-t border-mystical-purple/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-cinzel font-bold text-mystical-purple mb-4">ELGRACIA</h3>
              <p className="text-gray-400 font-inter">
                Загадочный мир приключений ждет тебя
              </p>
            </div>
            
            <div>
              <h4 className="font-cinzel font-semibold text-white mb-4">Игра</h4>
              <ul className="space-y-2 text-gray-400 font-inter">
                <li><a href="#" className="hover:text-mystical-purple transition-colors">Скачать клиент</a></li>
                <li><a href="#" className="hover:text-mystical-purple transition-colors">Системные требования</a></li>
                <li><a href="#" className="hover:text-mystical-purple transition-colors">Гайды</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-cinzel font-semibold text-white mb-4">Сообщество</h4>
              <ul className="space-y-2 text-gray-400 font-inter">
                <li><a href="#" className="hover:text-mystical-purple transition-colors">Форум</a></li>
                <li><a href="#" className="hover:text-mystical-purple transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-mystical-purple transition-colors">Правила</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-cinzel font-semibold text-white mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400 font-inter">
                <li><a href="#" className="hover:text-mystical-purple transition-colors">Техподдержка</a></li>
                <li><a href="#" className="hover:text-mystical-purple transition-colors">Баги</a></li>
                <li><a href="#" className="hover:text-mystical-purple transition-colors">Контакты</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-mystical-purple/30 mt-8 pt-8 text-center">
            <p className="text-gray-400 font-inter">
              © 2024 Elgracia Server. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index