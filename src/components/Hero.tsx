import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-accessories.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gold/20 backdrop-blur-sm border border-gold/30 mb-6">
            <Sparkles className="h-4 w-4 text-gold mr-2" />
            <span className="text-gold font-medium">Colección Premium 2024</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-primary-foreground">Accesorios de</span>
            <br />
            <span className="bg-gradient-gold bg-clip-text text-transparent">
              Lujo Exclusivos
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
            Descubre nuestra colección exclusiva de joyas, bolsos, relojes y gafas de sol. 
            Cada pieza está cuidadosamente seleccionada para reflejar tu estilo único.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="luxury" size="lg" className="group">
              Explorar Colección
              <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="gold-outline" size="lg" className="bg-primary-foreground/10 backdrop-blur-sm">
              Ver Ofertas Especiales
            </Button>
          </div>
          
          <div className="flex items-center gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-gold">500+</div>
              <div className="text-primary-foreground/80">Productos Premium</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold">50k+</div>
              <div className="text-primary-foreground/80">Clientes Satisfechos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold">24/7</div>
              <div className="text-primary-foreground/80">Soporte Premium</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gold/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-gold-light/30 rounded-full blur-xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default Hero;