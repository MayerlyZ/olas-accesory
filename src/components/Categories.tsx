import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import summerImage from "@/assets/summer-accessories.jpg";
import beachwearImage from "@/assets/beachwear-collection.jpg";
import wellnessImage from "@/assets/wellness-ocean.jpg";

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Accesorios de Verano",
      description: "Bolsos de playa, gafas de sol, joyas inspiradas en el océano",
      image: summerImage,
      itemCount: "120+ productos",
    },
    {
      id: 2,
      name: "Ropa de Playa",
      description: "Trajes de baño, pareos, ropa de playa elegante",
      image: beachwearImage,
      itemCount: "80+ productos",
    },
    {
      id: 3,
      name: "Bienestar Oceánico",
      description: "Productos de spa, cuidado de la piel, aromaterapia marina",
      image: wellnessImage,
      itemCount: "100+ productos",
    },
  ];

  return (
    <section id="categorias" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extralight text-foreground mb-6">
            Nuestras <span className="text-ocean font-light">Categorías</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-extralight">
            Explora nuestra cuidadosa selección inspirada en el océano y el verano
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {categories.map((category) => (
            <Card 
              key={category.id} 
              className="group overflow-hidden bg-card border border-border hover:shadow-wave transition-wave hover:-translate-y-1"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="inline-block px-3 py-1 bg-ocean/90 rounded-full text-sm font-light">
                    {category.itemCount}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-8">
                <h3 className="text-2xl font-light text-foreground mb-3">{category.name}</h3>
                <p className="text-muted-foreground mb-6 font-extralight leading-relaxed">{category.description}</p>
                
                <Button variant="ocean-outline" className="w-full group">
                  Ver Productos
                  <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="wave" size="lg" className="group">
            Ver Todas las Categorías
            <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Categories;