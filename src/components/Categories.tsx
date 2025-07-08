import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import jewelryImage from "@/assets/jewelry-collection.jpg";
import handbagsImage from "@/assets/handbags-collection.jpg";
import watchesImage from "@/assets/watches-sunglasses.jpg";

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Joyería",
      description: "Collares, aretes, pulseras y anillos de oro y plata",
      image: jewelryImage,
      itemCount: "150+ productos",
    },
    {
      id: 2,
      name: "Bolsos",
      description: "Bolsos de cuero premium y carteras elegantes",
      image: handbagsImage,
      itemCount: "80+ productos",
    },
    {
      id: 3,
      name: "Relojes & Gafas",
      description: "Relojes de lujo y gafas de sol de diseñador",
      image: watchesImage,
      itemCount: "120+ productos",
    },
  ];

  return (
    <section id="categorias" className="py-20 bg-gradient-gold-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nuestras <span className="text-gold">Categorías</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explora nuestra cuidadosa selección de accesorios premium organizados por categorías
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Card 
              key={category.id} 
              className="group overflow-hidden bg-card/80 backdrop-blur-sm border-gold/20 hover:shadow-elegant transition-all duration-500 hover:scale-105"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="inline-block px-3 py-1 bg-gold/90 rounded-full text-sm font-medium">
                    {category.itemCount}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">{category.name}</h3>
                <p className="text-muted-foreground mb-4">{category.description}</p>
                
                <Button variant="gold-outline" className="w-full group">
                  Ver Productos
                  <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="luxury" size="lg" className="group">
            Ver Todas las Categorías
            <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Categories;