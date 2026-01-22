import { CheckCircle, BookOpen, FileText, Users, Zap } from "lucide-react";
import productoPrincipal from "@/assets/producto-principal.png";

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
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
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

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Product showcase */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/10 blur-3xl rounded-full" />
              <img
                src={productoPrincipal}
                alt="Guía Salí del Veraz"
                className="relative z-10 w-full max-w-sm rounded-lg shadow-float"
              />
            </div>
          </div>

          {/* Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 bg-gradient-card border border-border rounded-xl p-5 shadow-card"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-heading text-foreground mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
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
