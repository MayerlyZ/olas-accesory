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
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-light text-gold mb-6">
              LuxeAccess
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed font-light">
              Tu destino para accesorios de lujo excepcionales. Calidad, elegancia y estilo en cada pieza.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center hover:bg-gold/10 hover:border-gold/20 transition-minimal"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4 text-muted-foreground hover:text-gold" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h4 className="font-medium text-foreground mb-6">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-gold transition-minimal font-light"
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
        <div className="mt-16 pt-12 border-t border-border">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-2xl font-light text-foreground mb-3">Mantente al día</h4>
              <p className="text-muted-foreground font-light">
                Suscríbete para recibir ofertas exclusivas y novedades sobre nuestras colecciones.
              </p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder-muted-foreground focus:border-gold focus:outline-none transition-minimal"
              />
              <button className="px-6 py-3 bg-gold text-primary-foreground font-medium rounded-lg hover:bg-gold/90 transition-minimal">
                Suscribirse
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm font-light">
            © 2024 LuxeAccess. Todos los derechos reservados.
          </p>
          <p className="text-muted-foreground text-sm font-light flex items-center mt-4 sm:mt-0">
            Hecho con <Heart className="h-4 w-4 mx-1 text-gold" /> para nuestros clientes
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;