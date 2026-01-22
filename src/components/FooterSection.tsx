import { ShieldCheck, Mail, MessageCircle } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-12 bg-secondary border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Trust elements */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="flex items-center gap-2 text-muted-foreground">
              <ShieldCheck className="w-5 h-5 text-accent" />
              <span>Pago 100% seguro</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="w-5 h-5 text-accent" />
              <span>Entrega inmediata por email</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MessageCircle className="w-5 h-5 text-accent" />
              <span>Soporte incluido</span>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border pt-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold font-heading text-foreground mb-2">
                SALÍ DEL VERAZ
              </h3>
              <p className="text-muted-foreground mb-4">
                Tu libertad financiera empieza hoy
              </p>
              
              <div className="text-sm text-muted-foreground space-y-2">
                <p>
                  © {new Date().getFullYear()} Salí del Veraz. Todos los derechos reservados.
                </p>
                <p>
                  Este producto es de carácter informativo y educativo. Los resultados pueden variar según cada caso particular.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
