import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-accessories.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center bg-gradient-minimal">
      {/* Background Image with overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/50 via-background/80 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-8">
            <Sparkles className="h-4 w-4 text-gold mr-2" />
            <span className="text-gold font-medium text-sm">Colección Premium 2024</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-light mb-8 leading-tight tracking-tight">
            <span className="text-foreground font-light">Accesorios de </span>
            <span className="text-gold font-normal">Lujo</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed font-light max-w-3xl mx-auto">
            Descubre nuestra colección exclusiva de joyas, bolsos, relojes y gafas de sol. 
            Cada pieza está cuidadosamente seleccionada para reflejar tu estilo único.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary-gold" size="lg" className="group">
              Explorar Colección
              <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="gold-minimal" size="lg">
              Ver Ofertas Especiales
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-12 mt-16 text-center">
            <div>
              <div className="text-3xl font-light text-gold mb-1">500+</div>
              <div className="text-muted-foreground text-sm">Productos Premium</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div>
              <div className="text-3xl font-light text-gold mb-1">50k+</div>
              <div className="text-muted-foreground text-sm">Clientes Satisfechos</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div>
              <div className="text-3xl font-light text-gold mb-1">24/7</div>
              <div className="text-muted-foreground text-sm">Soporte Premium</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;