import { Gift } from "lucide-react";
import bonus1 from "@/assets/bonus-1.png";
import bonus2 from "@/assets/bonus-2.png";
import bonus3 from "@/assets/bonus-3.png";
import bonus4 from "@/assets/bonus-4.png";

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
    title: "Comunidad de Asesoría",
    subtitle: "Acceso Exclusivo",
    description: "Grupo privado donde consultás dudas y recibís orientación personalizada"
  }
];

const BonusSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
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

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {bonuses.map((bonus) => (
            <div 
              key={bonus.number}
              className="group bg-gradient-card border border-border rounded-2xl overflow-hidden shadow-card hover:shadow-float hover:scale-[1.02] transition-all duration-300"
            >
              <div className="relative">
                {/* Bonus number badge */}
                <div className="absolute top-4 left-4 z-10 bg-accent text-accent-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-glow-gold">
                  {bonus.number}
                </div>
                
                <img
                  src={bonus.image}
                  alt={bonus.title}
                  className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <div className="text-accent text-sm font-semibold uppercase tracking-wide mb-1">
                  Bonus #{bonus.number}
                </div>
                <h3 className="text-xl font-bold font-heading text-foreground mb-1">
                  {bonus.title}
                </h3>
                <p className="text-accent/80 text-sm font-medium mb-3">
                  {bonus.subtitle}
                </p>
                <p className="text-muted-foreground">
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
