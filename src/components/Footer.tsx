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
            <h3 className="text-3xl font-extralight text-ocean mb-6">
              Olas
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed font-extralight">
              Donde cada producto te conecta con la serenidad del océano y la libertad del verano eterno.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center hover:bg-ocean/10 hover:border-ocean/20 transition-wave"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4 text-muted-foreground hover:text-ocean" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h4 className="font-light text-foreground mb-6">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-ocean transition-wave font-extralight"
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
              <h4 className="text-2xl font-extralight text-foreground mb-3">Mantente conectado</h4>
              <p className="text-muted-foreground font-extralight">
                Suscríbete para recibir las últimas olas de inspiración y novedades de nuestras colecciones.
              </p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder-muted-foreground focus:border-ocean focus:outline-none transition-wave"
              />
              <button className="px-6 py-3 bg-ocean text-primary-foreground font-light rounded-lg hover:bg-ocean/90 transition-wave">
                Suscribirse
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm font-extralight">
            © 2024 Olas. Todos los derechos reservados.
          </p>
          <p className="text-muted-foreground text-sm font-extralight flex items-center mt-4 sm:mt-0">
            Hecho con <Heart className="h-4 w-4 mx-1 text-ocean" /> para los amantes del océano
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;