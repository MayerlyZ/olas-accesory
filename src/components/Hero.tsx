import { Button } from "@/components/ui/button";
import { ArrowRight, Waves } from "lucide-react";
import heroImage from "@/assets/hero-ocean.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center bg-gradient-wave">
      {/* Background Image with overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/40 via-background/70 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-ocean/10 border border-ocean/20 mb-8">
            <Waves className="h-4 w-4 text-ocean mr-2" />
            <span className="text-ocean font-light text-sm">Colección Verano 2024</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-extralight mb-8 leading-tight tracking-wide">
            <span className="text-foreground font-extralight">Siente las </span>
            <span className="text-ocean font-light">Olas</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed font-extralight max-w-3xl mx-auto">
            Descubre nuestra colección inspirada en el océano. Accesorios, ropa de playa y productos de bienestar 
            que capturan la esencia del verano y la serenidad del mar.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="wave" size="lg" className="group">
              Explorar Colección
              <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="ocean-outline" size="lg">
              Descubre el Verano
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-12 mt-16 text-center">
            <div>
              <div className="text-3xl font-extralight text-ocean mb-1">300+</div>
              <div className="text-muted-foreground text-sm font-light">Productos de Verano</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div>
              <div className="text-3xl font-extralight text-ocean mb-1">25k+</div>
              <div className="text-muted-foreground text-sm font-light">Amantes del Océano</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div>
              <div className="text-3xl font-extralight text-ocean mb-1">∞</div>
              <div className="text-muted-foreground text-sm font-light">Inspiración Marina</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;