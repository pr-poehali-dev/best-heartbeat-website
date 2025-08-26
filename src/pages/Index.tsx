import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const products = [
    {
      id: 1,
      name: "EcoBeanie Classic",
      price: "₽2,490",
      image: "/img/aaa72dd8-bd7a-4e3f-a762-e87f5098ff22.jpg",
      eco: "100% органический хлопок"
    },
    {
      id: 2,
      name: "Urban Explorer Cap",
      price: "₽2,890",
      image: "/img/ccc87fc0-571d-4678-98f7-7a762123c374.jpg",
      eco: "Переработанный пластик"
    },
    {
      id: 3,
      name: "Studio Bucket Hat",
      price: "₽3,290",
      image: "/img/aaa72dd8-bd7a-4e3f-a762-e87f5098ff22.jpg",
      eco: "Органическая конопля"
    }
  ];

  const team = [
    {
      name: "Анна Иванова",
      role: "Основатель",
      description: "Эксперт по устойчивой моде с 8-летним опытом"
    },
    {
      name: "Дмитрий Петров",
      role: "Дизайнер",
      description: "Создает уникальные головные уборы с заботой о планете"
    },
    {
      name: "Мария Смирнова",
      role: "Эко-консультант",
      description: "Следит за экологичностью всего производства"
    }
  ];

  const blogPosts = [
    {
      title: "5 причин выбрать экологичную моду",
      date: "15 августа 2024",
      excerpt: "Устойчивая мода - не просто тренд, это необходимость для нашей планеты..."
    },
    {
      title: "Как ухаживать за органическими головными уборами",
      date: "10 августа 2024",
      excerpt: "Правильный уход продлит жизнь вашему любимому аксессуару..."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Heart" className="text-primary" size={24} />
              <span className="font-bold text-xl">Best Heartbeat</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-primary transition-colors">Главная</a>
              <a href="#products" className="hover:text-primary transition-colors">Товары</a>
              <a href="#team" className="hover:text-primary transition-colors">О нас</a>
              <a href="#blog" className="hover:text-primary transition-colors">Блог</a>
              <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
            </div>
            <Icon name="ShoppingCart" className="text-primary cursor-pointer" size={24} />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                🌱 Экологично и стильно
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Головные уборы для
                <span className="text-primary"> сознательных </span>
                студентов
              </h1>
              <p className="text-xl text-muted-foreground max-w-md">
                Созданы лучшими мировыми дизайнерами из экологичных материалов. 
                Стиль, который говорит о твоих ценностях.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  Заказать бесплатный образец
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  Смотреть каталог
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl"></div>
              <img 
                src="/img/ccc87fc0-571d-4678-98f7-7a762123c374.jpg" 
                alt="Студент в стильной шапке"
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Наша коллекция</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Каждый головной убор создан с заботой о планете и твоем стиле
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover-scale">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary">
                    Эко
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="flex justify-between items-start">
                    {product.name}
                    <span className="text-primary font-bold">{product.price}</span>
                  </CardTitle>
                  <CardDescription>{product.eco}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">
                    Добавить в корзину
                    <Icon name="Plus" className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Наша команда</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Люди, которые создают будущее экологичной моды
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" className="text-primary" size={32} />
                  </div>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Попробуй бесплатно</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Закажи бесплатный образец и убедись в качестве наших экологичных головных уборов
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="text-lg px-8">
              <Icon name="Gift" className="mr-2" size={20} />
              Заказать образец
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Блог</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Читай о экологичной моде и устойчивом образе жизни
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                  <CardDescription>{post.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <Button variant="outline">
                    Читать далее
                    <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Контакты</h2>
              <p className="text-xl text-muted-foreground">
                Есть вопросы? Мы всегда на связи
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <Card>
                <CardHeader>
                  <Icon name="Mail" className="mx-auto text-primary" size={32} />
                  <CardTitle>Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">hello@bestheartbeat.ru</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <Icon name="Phone" className="mx-auto text-primary" size={32} />
                  <CardTitle>Телефон</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <Icon name="MessageCircle" className="mx-auto text-primary" size={32} />
                  <CardTitle>Соцсети</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">@bestheartbeat</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Heart" size={24} />
              <span className="font-bold text-xl">Best Heartbeat</span>
            </div>
            <p className="text-sm opacity-80">
              © 2024 Best Heartbeat. Экологичная мода для сознательного поколения.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;