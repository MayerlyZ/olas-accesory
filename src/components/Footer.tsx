import { Facebook, Instagram, Twitter, Youtube, Heart } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    company: {
      title: "Empresa",
      links: [
        { name: "Sobre nosotros", href: "#sobre-nosotros" },
        { name: "Nuestra historia", href: "#" },
        { name: "Carreras", href: "#" },
        { name: "Prensa", href: "#" },
      ],
    },
    products: {
      title: "Productos",
      links: [
        { name: "Joyería", href: "#" },
        { name: "Bolsos", href: "#" },
        { name: "Relojes", href: "#" },
        { name: "Gafas de sol", href: "#" },
      ],
    },
    support: {
      title: "Soporte",
      links: [
        { name: "Centro de ayuda", href: "#" },
        { name: "Contacto", href: "#contactanos" },
        { name: "Envíos", href: "#" },
        { name: "Devoluciones", href: "#" },
      ],
    },
    legal: {
      title: "Legal",
      links: [
        { name: "Términos de servicio", href: "#" },
        { name: "Política de privacidad", href: "#" },
        { name: "Cookies", href: "#" },
        { name: "Garantías", href: "#" },
      ],
    },
  };

  const socialLinks = [
    { icon: Facebook, href: "#", name: "Facebook" },
    { icon: Instagram, href: "#", name: "Instagram" },
    { icon: Twitter, href: "#", name: "Twitter" },
    { icon: Youtube, href: "#", name: "YouTube" },
  ];

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold bg-gradient-gold bg-clip-text text-transparent mb-4">
              LuxeAccess
            </h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Tu destino para accesorios de lujo excepcionales. Calidad, elegancia y estilo en cada pieza.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center hover:bg-gold hover:scale-110 transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h4 className="font-bold text-gold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-gold transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-2xl font-bold text-gold mb-2">Mantente al día</h4>
              <p className="text-primary-foreground/80">
                Suscríbete para recibir ofertas exclusivas y novedades sobre nuestras colecciones.
              </p>
            </div>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder-primary-foreground/60 focus:border-gold focus:outline-none"
              />
              <button className="px-6 py-3 bg-gradient-gold text-primary-foreground font-medium rounded-lg hover:shadow-gold transition-all duration-300">
                Suscribirse
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-primary-foreground/80 text-sm">
            © 2024 LuxeAccess. Todos los derechos reservados.
          </p>
          <p className="text-primary-foreground/80 text-sm flex items-center mt-4 sm:mt-0">
            Hecho con <Heart className="h-4 w-4 mx-1 text-gold" /> para nuestros clientes
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;