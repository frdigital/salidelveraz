import { AlertTriangle, Ban, Phone, CreditCard } from "lucide-react";
import { useScrollAnimation, getAnimationClass } from "@/hooks/useScrollAnimation";

const problems = [
  {
    icon: Ban,
    title: "Te rechazan créditos",
    description: "No podés sacar tarjetas, préstamos ni financiar nada"
  },
  {
    icon: Phone,
    title: "Llamadas de cobradores",
    description: "Te persiguen con llamadas intimidantes a todas horas"
  },
  {
    icon: AlertTriangle,
    title: "Miedo a embargos",
    description: "Vivís con la angustia de que te quiten todo"
  },
  {
    icon: CreditCard,
    title: "Vida financiera paralizada",
    description: "No podés alquilar, comprar en cuotas ni progresar"
  }
];

const ProblemSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div 
          ref={titleRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-12 ${getAnimationClass(titleVisible, "fade-up")}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
            ¿Te sentís <span className="text-primary">ATRAPADO</span> por el Veraz?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estar en el Veraz no solo afecta tu bolsillo, afecta tu vida entera
          </p>
        </div>

        <div 
          ref={cardsRef as React.RefObject<HTMLDivElement>}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {problems.map((problem, index) => (
            <div
              key={index}
              style={{ transitionDelay: cardsVisible ? `${index * 100}ms` : '0ms' }}
              className={`bg-gradient-card border border-border rounded-xl p-6 text-center shadow-card hover:scale-105 transition-all duration-500 ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <problem.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-heading text-foreground mb-2">
                {problem.title}
              </h3>
              <p className="text-muted-foreground">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-2xl font-bold font-heading text-foreground">
            Pero hay una <span className="text-accent">SOLUCIÓN</span>...
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
