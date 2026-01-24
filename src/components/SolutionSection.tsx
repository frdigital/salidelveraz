import { CheckCircle, BookOpen, FileText, Users, Zap } from "lucide-react";
import productoPrincipal from "@/assets/producto-principal.png";
import { useScrollAnimation, getAnimationClass } from "@/hooks/useScrollAnimation";

const features = [
  {
    icon: BookOpen,
    title: "Guía paso a paso",
    description: "Instrucciones claras y sencillas que cualquiera puede seguir"
  },
  {
    icon: FileText,
    title: "Modelos de carta documento",
    description: "Plantillas listas para usar y enviar sin abogados"
  },
  {
    icon: Users,
    title: "Comunidad de asesoría",
    description: "Acceso a un grupo exclusivo de apoyo y consultas"
  },
  {
    icon: Zap,
    title: "Resultados rápidos",
    description: "Empezá a ver cambios en semanas, no meses"
  }
];

const SolutionSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div 
          ref={titleRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 ${getAnimationClass(titleVisible, "fade-up")}`}
        >
          <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 px-4 py-2 rounded-full mb-6">
            <CheckCircle className="w-5 h-5 text-accent" />
            <span className="text-accent font-medium">LA SOLUCIÓN DEFINITIVA</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-foreground mb-4">
            Presentamos: <span className="text-primary">"SALÍ DEL VERAZ"</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            La guía práctica más completa de Argentina para limpiar tu historial crediticio, 
            negociar deudas y recuperar tu libertad financiera. Sin abogados, sin cuentos, sin endeudarte más.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Product showcase */}
          <div 
            ref={imageRef as React.RefObject<HTMLDivElement>}
            className={`flex justify-center order-2 lg:order-1 ${getAnimationClass(imageVisible, "fade-left")}`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-accent/10 blur-3xl rounded-full" />
              <img
                src={productoPrincipal}
                alt="Guía Salí del Veraz"
                className="relative z-10 w-full max-w-[280px] md:max-w-sm rounded-lg shadow-float"
                loading="lazy"
              />
            </div>
          </div>

          {/* Features */}
          <div 
            ref={featuresRef as React.RefObject<HTMLDivElement>}
            className="space-y-4 md:space-y-6 order-1 lg:order-2"
          >
            {features.map((feature, index) => (
              <div 
                key={index}
                style={{ transitionDelay: featuresVisible ? `${index * 150}ms` : '0ms' }}
                className={`flex items-start gap-3 md:gap-4 bg-gradient-card border border-border rounded-xl p-4 md:p-5 shadow-card transition-all duration-500 ${featuresVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
              >
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-bold font-heading text-foreground mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
