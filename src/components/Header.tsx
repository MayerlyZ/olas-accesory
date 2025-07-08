import { ShoppingCart, User, Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Inicio", href: "#inicio" },
    { name: "Categorías", href: "#categorias" },
    { name: "Sobre nosotros", href: "#sobre-nosotros" },
    { name: "Contáctanos", href: "#contactanos" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-light text-ocean">
              Olas
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground/80 hover:text-ocean transition-wave font-light relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-ocean transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Search, Login, Cart */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="hidden sm:flex text-foreground/60 hover:text-ocean">
              <Search className="h-4 w-4" />
            </Button>
            
            <Button variant="ocean-outline" size="sm" className="hidden sm:flex">
              <User className="h-4 w-4 mr-2" />
              Iniciar sesión
            </Button>
            
            <Button variant="wave" size="sm" className="relative">
              <ShoppingCart className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Carrito</span>
              <span className="absolute -top-1 -right-1 bg-ocean text-primary-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center text-[10px]">
                0
              </span>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-card">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-foreground/80 hover:text-ocean hover:bg-muted rounded-md transition-wave"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;