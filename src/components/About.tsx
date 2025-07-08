import { Card, CardContent } from "@/components/ui/card";
import { Shield, Truck, Award, Heart } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Garantía de Calidad",
      description: "Todos nuestros productos cuentan con certificado de autenticidad y garantía de por vida.",
    },
    {
      icon: Truck,
      title: "Envío Gratuito",
      description: "Envío gratuito a nivel nacional en compras superiores a $50 con entrega express.",
    },
    {
      icon: Award,
      title: "Productos Premium",
      description: "Seleccionamos cuidadosamente cada producto para garantizar la máxima calidad.",
    },
    {
      icon: Heart,
      title: "Atención Personalizada",
      description: "Nuestro equipo de expertos está aquí para ayudarte a encontrar el accesorio perfecto.",
    },
  ];

  return (
    <section id="sobre-nosotros" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Sobre <span className="text-gold">LuxeAccess</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Desde 2020, LuxeAccess ha sido sinónimo de elegancia y calidad en el mundo de los accesorios de lujo. 
                Nuestra pasión por la excelencia nos ha llevado a convertirnos en la tienda preferida de miles de clientes 
                que buscan lo mejor en joyería, bolsos, relojes y gafas de sol.
              </p>
              <p>
                Trabajamos directamente con diseñadores reconocidos mundialmente y artesanos especializados para ofrecerte 
                piezas únicas que reflejen tu personalidad y estilo. Cada producto en nuestra colección pasa por un riguroso 
                proceso de selección para garantizar que cumpla con nuestros altos estándares de calidad.
              </p>
              <p>
                En LuxeAccess, creemos que los accesorios no son solo complementos, sino expresiones de tu identidad. 
                Por eso, nos dedicamos a brindarte una experiencia de compra excepcional y productos que perduren en el tiempo.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="bg-card/50 backdrop-blur-sm border-gold/20 hover:shadow-gold transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-gold rounded-full mb-4">
                    <feature.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block p-8 bg-gradient-gold-subtle rounded-2xl border border-gold/20">
            <h3 className="text-3xl font-bold text-foreground mb-4">Nuestra Misión</h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hacer que el lujo sea accesible para todos, ofreciendo accesorios de la más alta calidad 
              a precios justos, con un servicio al cliente excepcional que supere todas las expectativas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;