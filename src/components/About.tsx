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
    <section id="sobre-nosotros" className="py-24 bg-gradient-minimal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-8">
              Sobre <span className="text-gold font-normal">LuxeAccess</span>
            </h2>
            <div className="space-y-8 text-lg text-muted-foreground font-light leading-relaxed">
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
                className="bg-card border border-border hover:shadow-card transition-minimal hover:-translate-y-1"
              >
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 rounded-2xl mb-6">
                    <feature.icon className="h-8 w-8 text-gold" />
                  </div>
                  <h3 className="text-xl font-medium text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm font-light leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-24 text-center">
          <div className="inline-block p-12 bg-card rounded-3xl border border-border shadow-card">
            <h3 className="text-3xl font-light text-foreground mb-6">Nuestra Misión</h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
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