import { Button } from "@/components/ui/button";
import { Check, ShieldCheck, ArrowDown } from "lucide-react";
import productoPrincipal from "@/assets/producto-principal.png";

const HeroSection = () => {
  const scrollToOffer = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background chain pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border-4 border-foreground/20 rounded-full" />
        <div className="absolute top-40 right-20 w-24 h-24 border-4 border-foreground/20 rounded-full" />
        <div className="absolute bottom-40 left-1/4 w-40 h-40 border-4 border-foreground/20 rounded-full" />
      </div>

      <div className="container mx-auto px-4 pt-8 pb-16 lg:pt-16">
        {/* Top Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 bg-secondary/50 backdrop-blur-sm border border-border px-6 py-3 rounded-full">
            <ShieldCheck className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium text-foreground">
              +1,000 personas ya limpiaron su historial
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading leading-tight">
              <span className="text-foreground">LIBERÁTE DEL</span>
              <br />
              <span className="text-primary text-5xl md:text-6xl lg:text-7xl">VERAZ</span>
              <br />
              <span className="text-foreground text-3xl md:text-4xl lg:text-5xl">DE UNA VEZ POR TODAS</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
              La guía completa paso a paso para <span className="text-accent font-semibold">limpiar tu historial crediticio</span>, 
              negociar tus deudas y volver al sistema financiero.
            </p>

            {/* Benefits List */}
            <ul className="space-y-4 text-left max-w-md mx-auto lg:mx-0">
              {[
                "Negociá tus deudas sin miedo",
                "Evitá juicios y embargos",
                "Volvé al sistema financiero",
                "Sin abogados, sin cuentos"
              ].map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-accent-foreground" />
                  </div>
                  <span className="text-foreground font-medium">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Button 
                variant="cta" 
                size="xl" 
                onClick={scrollToOffer}
                className="w-full sm:w-auto"
              >
                ¡QUIERO SALIR DEL VERAZ!
                <ArrowDown className="w-5 h-5 ml-2" />
              </Button>
              <p className="mt-3 text-sm text-muted-foreground">
                Acceso inmediato • Descarga digital
              </p>
            </div>
          </div>

          {/* Right - Product Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative animate-float">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-90" />
              
              <img
                src={productoPrincipal}
                alt="Guía Salí del Veraz - Cadena Rota"
                className="relative z-10 w-full max-w-md lg:max-w-lg drop-shadow-2xl rounded-lg"
              />

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg shadow-glow-gold z-20">
                <span className="font-bold text-lg">¡OFERTA!</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-12 lg:mt-16 animate-bounce">
          <ArrowDown className="w-8 h-8 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
