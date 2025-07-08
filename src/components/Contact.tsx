import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Dirección",
      info: "Av. Principal 123, Centro Comercial Luxury Plaza, Local 45",
    },
    {
      icon: Phone,
      title: "Teléfono",
      info: "+1 (555) 123-4567",
    },
    {
      icon: Mail,
      title: "Email",
      info: "info@luxeaccess.com",
    },
    {
      icon: Clock,
      title: "Horarios",
      info: "Lun - Sáb: 10:00 AM - 8:00 PM\nDom: 12:00 PM - 6:00 PM",
    },
  ];

  return (
    <section id="contactanos" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extralight text-foreground mb-6">
            <span className="text-ocean font-light">Contáctanos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-extralight">
            Estamos aquí para ayudarte. Contáctanos y te responderemos como las olas llegan a la orilla.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-extralight text-foreground mb-6">¿Tienes alguna pregunta?</h3>
              <p className="text-lg text-muted-foreground mb-8 font-extralight leading-relaxed">
                Nuestro equipo está disponible para ayudarte con cualquier consulta sobre nuestros productos, 
                envíos, devoluciones o para guiarte en tu viaje hacia el bienestar oceánico.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <Card key={index} className="bg-card border border-border hover:shadow-wave transition-wave">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-ocean/10 rounded-xl flex items-center justify-center">
                        <item.icon className="h-6 w-6 text-ocean" />
                      </div>
                      <div>
                        <h4 className="font-light text-foreground mb-2">{item.title}</h4>
                        <p className="text-muted-foreground text-sm font-extralight whitespace-pre-line leading-relaxed">{item.info}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-card border border-border shadow-wave">
            <CardContent className="p-8">
              <h3 className="text-2xl font-extralight text-foreground mb-8">Envíanos un mensaje</h3>
              
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-light text-foreground mb-3">
                      Nombre
                    </label>
                    <Input placeholder="Tu nombre completo" className="h-12" />
                  </div>
                  <div>
                    <label className="block text-sm font-light text-foreground mb-3">
                      Email
                    </label>
                    <Input type="email" placeholder="tu@email.com" className="h-12" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-light text-foreground mb-3">
                    Asunto
                  </label>
                  <Input placeholder="¿En qué podemos ayudarte?" className="h-12" />
                </div>
                
                <div>
                  <label className="block text-sm font-light text-foreground mb-3">
                    Mensaje
                  </label>
                  <Textarea 
                    placeholder="Cuéntanos más detalles sobre tu consulta..."
                    rows={5}
                    className="resize-none"
                  />
                </div>
                
                <Button variant="wave" className="w-full h-12">
                  Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;