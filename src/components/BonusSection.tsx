import { Gift } from "lucide-react";
import bonus1 from "@/assets/bonus-1.png";
import bonus2 from "@/assets/bonus-2.png";
import bonus3 from "@/assets/bonus-3.png";
import bonus4 from "@/assets/bonus-4.png";
import { useScrollAnimation, getAnimationClass } from "@/hooks/useScrollAnimation";

const bonuses = [
  {
    number: 1,
    image: bonus1,
    title: "Qué decir al cobrador agresivo",
    subtitle: "Modelo de Carta Documento",
    description: "Scripts exactos para responder llamadas de cobradores sin que te intimiden"
  },
  {
    number: 2,
    image: bonus2,
    title: "Modelo de Carta Documento",
    subtitle: "Derecho al Olvido",
    description: "Plantilla lista para ejercer tu derecho al olvido y limpiar informes"
  },
  {
    number: 3,
    image: bonus3,
    title: 'Checklist "Salir de la Deuda"',
    subtitle: "Hoja de Ruta",
    description: "Lista paso a paso para organizar tu salida del Veraz de forma ordenada"
  },
  {
    number: 4,
    image: bonus4,
    title: "Asesoría Legal por 1 Mes",
    subtitle: "Grupo de WhatsApp Exclusivo",
    description: "Un abogado especialista responderá TODAS tus dudas sobre tu situación en Veraz durante 30 días en un grupo exclusivo para compradores",
    isSuper: true
  }
];

const BonusSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div 
          ref={titleRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 ${getAnimationClass(titleVisible, "fade-up")}`}
        >
          <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-full mb-6 shadow-glow-gold">
            <Gift className="w-6 h-6" />
            <span className="font-bold text-lg uppercase">¡Bonus Exclusivos!</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
            Además de la guía, te llevás <span className="text-accent">4 BONUS</span> de regalo
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Herramientas prácticas que acelerarán tu proceso de liberación financiera
          </p>
        </div>

        <div 
          ref={cardsRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto"
        >
          {bonuses.map((bonus, index) => (
            <div
              key={bonus.number}
              style={{ transitionDelay: cardsVisible ? `${index * 150}ms` : '0ms' }}
              className={`group bg-gradient-card border ${bonus.isSuper ? 'border-accent border-2' : 'border-border'} rounded-xl md:rounded-2xl overflow-hidden shadow-card hover:shadow-float hover:scale-[1.02] transition-all duration-500 ${bonus.isSuper ? 'ring-2 ring-accent/50' : ''} ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <div className="relative">
                {/* Bonus number badge */}
                <div className={`absolute top-2 left-2 md:top-4 md:left-4 z-10 ${bonus.isSuper ? 'bg-primary text-primary-foreground' : 'bg-accent text-accent-foreground'} w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold text-sm md:text-lg shadow-glow-gold`}>
                  {bonus.number}
                </div>
                
                {/* Super Bonus badge */}
                {bonus.isSuper && (
                  <div className="absolute top-2 right-2 md:top-4 md:right-4 z-10 bg-primary text-primary-foreground px-3 py-1 rounded-full font-bold text-xs md:text-sm uppercase tracking-wide animate-pulse shadow-glow-gold">
                    ⭐ SUPER BONUS
                  </div>
                )}
                
                <img
                  src={bonus.image}
                  alt={bonus.title}
                  className="w-full h-40 sm:h-48 md:h-64 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              
              <div className="p-4 md:p-6">
                <div className={`${bonus.isSuper ? 'text-primary' : 'text-accent'} text-xs md:text-sm font-semibold uppercase tracking-wide mb-1`}>
                  {bonus.isSuper ? '⭐ Super Bonus' : `Bonus #${bonus.number}`}
                </div>
                <h3 className="text-base md:text-xl font-bold font-heading text-foreground mb-1">
                  {bonus.title}
                </h3>
                <p className={`${bonus.isSuper ? 'text-primary/80' : 'text-accent/80'} text-xs md:text-sm font-medium mb-2 md:mb-3`}>
                  {bonus.subtitle}
                </p>
                <p className="text-muted-foreground text-sm md:text-base">
                  {bonus.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl text-foreground">
            Valor total de los bonus: <span className="line-through text-muted-foreground">$8.000</span>
            <span className="text-accent font-bold ml-2">¡GRATIS HOY!</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
