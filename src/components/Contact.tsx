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
    <section id="contactanos" className="py-20 bg-gradient-gold-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="text-gold">Contáctanos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Contáctanos y te responderemos en menos de 24 horas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">¿Tienes alguna pregunta?</h3>
              <p className="text-lg text-muted-foreground mb-8">
                Nuestro equipo de atención al cliente está disponible para ayudarte con cualquier consulta 
                sobre nuestros productos, envíos, devoluciones o servicios personalizados.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <Card key={index} className="bg-card/80 backdrop-blur-sm border-gold/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center">
                        <item.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                        <p className="text-muted-foreground text-sm whitespace-pre-line">{item.info}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-card/80 backdrop-blur-sm border-gold/20 shadow-elegant">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Envíanos un mensaje</h3>
              
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nombre
                    </label>
                    <Input placeholder="Tu nombre completo" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input type="email" placeholder="tu@email.com" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Asunto
                  </label>
                  <Input placeholder="¿En qué podemos ayudarte?" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Mensaje
                  </label>
                  <Textarea 
                    placeholder="Cuéntanos más detalles sobre tu consulta..."
                    rows={5}
                  />
                </div>
                
                <Button variant="luxury" className="w-full">
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