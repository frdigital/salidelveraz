import { Gift, MessageCircle, Scale, Users } from "lucide-react";
import bonus4 from "@/assets/bonus-4.png";
import { useScrollAnimation, getAnimationClass } from "@/hooks/useScrollAnimation";

const BonusSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardRef, isVisible: cardVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div 
          ref={titleRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-12 ${getAnimationClass(titleVisible, "fade-up")}`}
        >
          <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full mb-6 shadow-glow-gold animate-pulse">
            <Gift className="w-6 h-6" />
            <span className="font-bold text-lg uppercase">¡Super Bonus Exclusivo!</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground mb-4">
            Además de la guía, te llevás un <span className="text-accent">SUPER BONUS</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Un beneficio único que vale más que toda la guía
          </p>
        </div>

        <div 
          ref={cardRef as React.RefObject<HTMLDivElement>}
          className={`max-w-4xl mx-auto ${getAnimationClass(cardVisible, "scale")}`}
        >
          <div className="group bg-gradient-card border-4 border-accent rounded-3xl overflow-hidden shadow-float ring-4 ring-accent/30 hover:scale-[1.02] transition-all duration-500">
            {/* Super Bonus Header Badge */}
            <div className="bg-primary text-primary-foreground py-4 px-6 text-center">
              <span className="font-bold text-xl md:text-2xl uppercase tracking-wide flex items-center justify-center gap-2">
                ⭐ SUPER BONUS ⭐
              </span>
            </div>
            
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative">
                <img
                  src={bonus4}
                  alt="Asesoría Legal por WhatsApp"
                  className="w-full h-64 md:h-full object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:hidden" />
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-accent text-sm font-semibold uppercase tracking-wide mb-3">
                  <MessageCircle className="w-5 h-5" />
                  <span>Grupo de WhatsApp Exclusivo</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold font-heading text-foreground mb-4">
                  Asesoría Legal por 1 Mes
                </h3>
                
                <p className="text-muted-foreground text-lg mb-6">
                  Un abogado especialista responderá <span className="text-accent font-bold">TODAS</span> tus dudas sobre tu situación en Veraz durante 30 días en un grupo exclusivo para compradores.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-foreground">
                    <Scale className="w-5 h-5 text-accent" />
                    <span>Abogado especialista en deudas y Veraz</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground">
                    <MessageCircle className="w-5 h-5 text-accent" />
                    <span>Respuestas personalizadas a tu caso</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground">
                    <Users className="w-5 h-5 text-accent" />
                    <span>Comunidad exclusiva de compradores</span>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-accent/10 rounded-xl border border-accent/30">
                  <p className="text-center">
                    <span className="text-muted-foreground">Valor real:</span>
                    <span className="line-through text-muted-foreground ml-2">$15.000</span>
                    <span className="text-accent font-bold text-xl ml-2">¡GRATIS HOY!</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
