import { Button } from "@/components/ui/button";
import { Check, ShieldCheck, ArrowDown, Clock, Zap } from "lucide-react";
import productoPrincipal from "@/assets/producto-principal.png";
import { useScrollAnimation, getAnimationClass } from "@/hooks/useScrollAnimation";
import CountdownTimer from "./CountdownTimer";
import LimitedSpotsCounter from "./LimitedSpotsCounter";
import { useShopifyProduct } from "@/hooks/useShopifyProduct";
import { useCartStore } from "@/stores/cartStore";

const HeroSection = () => {
  const { ref: badgeRef, isVisible: badgeVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: urgencyRef, isVisible: urgencyVisible } = useScrollAnimation({ threshold: 0.2 });

  const { product, isLoading } = useShopifyProduct();
  const { addItem, getCheckoutUrl, items } = useCartStore();

  const scrollToOffer = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleCheckout = async () => {
    if (!product) return;

    const variant = product.node.variants.edges[0]?.node;
    if (!variant) return;

    // If cart is empty, add the item first
    if (items.length === 0) {
      await addItem({
        product,
        variantId: variant.id,
        variantTitle: variant.title,
        price: variant.price,
        quantity: 1,
        selectedOptions: variant.selectedOptions || []
      });
    }

    // Small delay to ensure cart is created
    setTimeout(() => {
      const checkoutUrl = getCheckoutUrl();
      if (checkoutUrl) {
        window.open(checkoutUrl, '_blank');
      }
    }, 500);
  };

  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background chain pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border-4 border-foreground/20 rounded-full" />
        <div className="absolute top-40 right-20 w-24 h-24 border-4 border-foreground/20 rounded-full" />
        <div className="absolute bottom-40 left-1/4 w-40 h-40 border-4 border-foreground/20 rounded-full" />
      </div>

      <div className="container mx-auto px-4 pt-6 pb-12 md:pt-8 md:pb-16 lg:pt-16">
        {/* Top Badge */}
        <section
          ref={badgeRef as React.RefObject<HTMLElement>}
          className={`flex justify-center mb-6 md:mb-8 ${getAnimationClass(badgeVisible, "scale")}`}>

          <div className="inline-flex items-center gap-2 bg-secondary/50 backdrop-blur-sm border border-border px-4 md:px-6 py-2 md:py-3 rounded-full">
            <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 text-accent" />
            <span className="text-xs md:text-sm font-medium text-foreground">
              +1,000 personas ya limpiaron su historial
            </span>
          </div>
        </section>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div
            ref={contentRef as React.RefObject<HTMLDivElement>}
            className={`text-center lg:text-left space-y-4 md:space-y-6 ${getAnimationClass(contentVisible, "fade-left")}`}>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading leading-tight">
              <span className="text-foreground">LIBERÁTE DEL</span>
              <br />
              <span className="text-primary text-4xl sm:text-5xl md:text-6xl lg:text-7xl">VERAZ</span>
              <br />
              <span className="text-foreground text-2xl sm:text-3xl md:text-4xl lg:text-5xl">DE UNA VEZ POR TODAS</span>
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
              La guía completa paso a paso para <span className="text-accent font-semibold">limpiar tu historial crediticio</span>, 
              negociar tus deudas y volver al sistema financiero.
            </p>

            {/* Benefits List */}
            <ul className="space-y-3 md:space-y-4 text-left max-w-md mx-auto lg:mx-0">
              {[
              "Negociá tus deudas sin miedo",
              "Evitá juicios y embargos",
              "Volvé al sistema financiero",
              "Sin abogados, sin cuentos"].
              map((benefit, index) =>
              <li key={index} className="flex items-center gap-2 md:gap-3">
                  <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 bg-accent rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 md:w-4 md:h-4 text-accent-foreground" />
                  </div>
                  <span className="text-foreground font-medium text-sm md:text-base">{benefit}</span>
                </li>
              )}
            </ul>

            <div className="pt-4 space-y-4">
              {/* Urgency Countdown Banner */}
              <div
                ref={urgencyRef as React.RefObject<HTMLDivElement>}
                className={`bg-gradient-to-r from-primary/90 to-primary text-primary-foreground p-3 md:p-4 rounded-xl shadow-glow-red ${getAnimationClass(urgencyVisible, "scale")}`}>

                <div className="flex items-center justify-center gap-2 mb-2">
                  <Clock className="w-4 h-4 md:w-5 md:h-5 animate-pulse" />
                  <span className="font-bold text-xs md:text-sm uppercase tracking-wide">¡Oferta por tiempo limitado!</span>
                </div>
                <CountdownTimer />
                <div className="mt-2">
                  <LimitedSpotsCounter />
                </div>
                <Button
                  variant="gold"
                  size="lg"
                  onClick={handleCheckout}
                  disabled={isLoading || !product}
                  className="w-full mt-3 md:mt-4 btn-gold-enhanced text-sm md:text-base">

                  <Zap className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  ¡COMPRAR AHORA - 50% OFF!
                </Button>
              </div>

              <Button
                variant="outline"
                size="default"
                onClick={scrollToOffer}
                className="w-full sm:w-auto border-muted-foreground/30">

                Ver más detalles
                <ArrowDown className="w-4 h-4 md:w-5 md:h-5 ml-2" />
              </Button>
              <p className="text-xs md:text-sm text-muted-foreground">
                Acceso inmediato • Descarga digital
              </p>
            </div>
          </div>

          {/* Right - Product Image */}
          <div
            ref={imageRef as React.RefObject<HTMLDivElement>}
            className={`relative flex justify-center lg:justify-end ${getAnimationClass(imageVisible, "fade-right")}`}>

            <div className="relative animate-float">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-90" />
              
              <img

                alt="Guía Salí del Veraz - Cadena Rota"
                className="relative z-10 w-full max-w-[280px] md:max-w-md lg:max-w-lg drop-shadow-2xl rounded-lg"
                loading="lazy" src="/lovable-uploads/6eed7537-98e6-47f7-ba5b-2161d9a93562.png" />


              {/* Floating badge */}
              <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 bg-accent text-accent-foreground px-3 py-1 md:px-4 md:py-2 rounded-lg shadow-glow-gold z-20">
                <span className="font-bold text-sm md:text-lg">¡OFERTA!</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-8 md:mt-12 lg:mt-16 animate-bounce">
          <ArrowDown className="w-6 h-6 md:w-8 md:h-8 text-muted-foreground" />
        </div>
      </div>
    </section>);

};

export default HeroSection;