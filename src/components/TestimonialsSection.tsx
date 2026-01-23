import { Star, Quote } from "lucide-react";
import { useScrollAnimation, getAnimationClass } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    name: "Carlos M.",
    location: "Buenos Aires",
    text: "Estuve 5 años en el Veraz y pensé que nunca iba a salir. Con esta guía en 3 meses ya pude sacar una tarjeta de crédito. ¡Increíble!",
    rating: 5
  },
  {
    name: "María Laura G.",
    location: "Córdoba",
    text: "Los modelos de carta documento me salvaron. Mandé la carta y a las 2 semanas ya me habían dado de baja del sistema. Super recomendable.",
    rating: 5
  },
  {
    name: "Diego R.",
    location: "Mendoza",
    text: "La comunidad de WhatsApp es oro puro. Me ayudaron con mi caso específico y negocié una quita del 70% de mi deuda. Vale cada peso.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div 
          ref={titleRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 ${getAnimationClass(titleVisible, "fade-up")}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
            Lo que dicen quienes ya <span className="text-accent">SALIERON DEL VERAZ</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Personas reales que recuperaron su libertad financiera
          </p>
        </div>

        <div 
          ref={cardsRef as React.RefObject<HTMLDivElement>}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              style={{ transitionDelay: cardsVisible ? `${index * 150}ms` : '0ms' }}
              className={`bg-gradient-card border border-border rounded-2xl p-6 shadow-card relative transition-all duration-500 ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-6">
                <div className="bg-accent w-8 h-8 rounded-full flex items-center justify-center shadow-glow-gold">
                  <Quote className="w-4 h-4 text-accent-foreground" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4 mt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
