import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation, getAnimationClass } from "@/hooks/useScrollAnimation";

const faqs = [
  {
    question: "¿Esto funciona para cualquier tipo de deuda?",
    answer: "Sí, la guía cubre todo tipo de deudas: tarjetas de crédito, préstamos personales, servicios impagos, cheques rechazados y más. Los métodos legales que enseñamos aplican a cualquier situación de morosidad en Argentina."
  },
  {
    question: "¿Necesito un abogado para hacer esto?",
    answer: "No, justamente esa es la ventaja de esta guía. Te damos todos los modelos de carta documento y los pasos legales para que puedas hacerlo vos mismo. Miles de personas lo han logrado sin gastar en abogados."
  },
  {
    question: "¿Cuánto tiempo tarda en verse resultados?",
    answer: "Depende de cada caso, pero muchos usuarios empiezan a ver cambios en 2-4 semanas después de enviar las cartas documento. El proceso completo de limpieza del historial puede tomar de 1 a 6 meses según la complejidad."
  },
  {
    question: "¿Qué pasa si no me funciona?",
    answer: "Tenés 7 días de garantía total. Si por cualquier motivo sentís que la guía no es para vos, te devolvemos el 100% de tu dinero sin preguntas. Queremos que estés 100% satisfecho."
  },
  {
    question: "¿Cómo recibo el producto?",
    answer: "Inmediatamente después de tu compra recibirás un email con el acceso a todo el material digital: la guía en PDF, los modelos de carta documento, el checklist y el link de acceso a la comunidad de WhatsApp."
  },
  {
    question: "¿La comunidad de asesoría tiene costo adicional?",
    answer: "No, el acceso a la comunidad de WhatsApp con un abogado está incluido en tu compra. Tenés 1 mes desde la fecha de compra para hacer consultas sobre tu caso particular y recibir orientación profesional."
  }
];

const FAQSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: accordionRef, isVisible: accordionVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div 
          ref={titleRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-12 ${getAnimationClass(titleVisible, "fade-up")}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
            Preguntas <span className="text-accent">Frecuentes</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Resolvé todas tus dudas antes de dar el paso
          </p>
        </div>

        <div 
          ref={accordionRef as React.RefObject<HTMLDivElement>}
          className={`max-w-3xl mx-auto ${getAnimationClass(accordionVisible, "scale")}`}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gradient-card border border-border rounded-xl px-6 shadow-card"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-accent transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
