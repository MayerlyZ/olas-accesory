import { Card, CardContent } from "@/components/ui/card";
import { Waves, Sun, Heart, Leaf } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Waves,
      title: "Inspiración Oceánica",
      description: "Cada producto está inspirado en la belleza natural del océano y las olas del mar.",
    },
    {
      icon: Sun,
      title: "Espíritu de Verano",
      description: "Capturamos la esencia del verano eterno en cada diseño y experiencia.",
    },
    {
      icon: Heart,
      title: "Bienestar Natural",
      description: "Promovemos un estilo de vida saludable y en armonía con la naturaleza.",
    },
    {
      icon: Leaf,
      title: "Sostenibilidad",
      description: "Comprometidos con el cuidado del océano y productos eco-friendly.",
    },
  ];

  return (
    <section id="sobre-nosotros" className="py-24 bg-gradient-wave">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extralight text-foreground mb-8"><b>
              Sobre </b><span className="text-ocean font-light"><b>Olas</b></span>
            </h2>
            <div className="space-y-8 text-lg text-muted-foreground font-extralight leading-relaxed">
              <p> 
                Desde 2022, Olas ha sido un refugio para aquellos que buscan conectar con la serenidad del océano. 
                Nacimos de la pasión por el mar, el verano eterno y la belleza natural que nos rodea.
                
              </p>
              <p>
                Nuestra colección se inspira en los ritmos del océano, los colores del atardecer en la playa y 
                la sensación de libertad que solo el mar puede ofrecer. Cada producto está cuidadosamente seleccionado 
                para traer esa sensación de calma y renovación a tu vida diaria.
              </p>
              <p>
                En Olas, creemos que el bienestar viene de la conexión con la naturaleza. Por eso, todo lo que 
                ofrecemos está diseñado para nutrir tu cuerpo, calmar tu mente y inspirar tu espíritu aventurero.
                
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="bg-card border border-border hover:shadow-wave transition-wave hover:-translate-y-1"
              >
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-ocean/10 rounded-3xl mb-6">
                    <feature.icon className="h-8 w-8 text-ocean" />
                  </div>
                  <h3 className="text-xl font-light text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm font-extralight leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-24 text-center">
          <div className="inline-block p-12 bg-card rounded-3xl border border-border shadow-wave">
            <h3 className="text-3xl font-extralight text-foreground mb-6">Nuestra Misión</h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-extralight leading-relaxed">
              Crear un puente entre la vida moderna y la serenidad del océano, ofreciendo productos y experiencias 
              que nutran el alma y despierten la conexión con la naturaleza.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;