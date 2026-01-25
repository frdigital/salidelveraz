import { Button } from "@/components/ui/button";
import { Check, Clock, ShieldCheck, Zap, Gift, Loader2, AlertTriangle } from "lucide-react";
import productoPrincipal from "@/assets/producto-principal.png";
import CountdownTimer from "./CountdownTimer";
import { useCartStore } from "@/stores/cartStore";
import { useShopifyProduct } from "@/hooks/useShopifyProduct";
import { toast } from "sonner";
import { useScrollAnimation, getAnimationClass } from "@/hooks/useScrollAnimation";

const included = [
  "Guía completa 'Salí del Veraz' (PDF)",
  "Modelos de carta documento listos para usar",
  "Scripts para negociar con cobradores",
  "Checklist paso a paso",
  "Acceso a comunidad de asesoría",
  "Actualizaciones gratuitas de por vida"
];

const OfferSection = () => {
  const { ref: offerRef, isVisible: offerVisible } = useScrollAnimation({ threshold: 0.1 });
  const { product, isLoading: productLoading } = useShopifyProduct();
  const { addItem, isLoading: cartLoading, getCheckoutUrl } = useCartStore();

  const handleCheckout = async () => {
    if (!product) {
      toast.error("Producto no disponible");
      return;
    }

    const variant = product.node.variants.edges[0]?.node;
    if (!variant) {
      toast.error("Variante no disponible");
      return;
    }

    await addItem({
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || []
    });

    // Wait a brief moment for cart to update, then redirect
    setTimeout(() => {
      const checkoutUrl = getCheckoutUrl();
      if (checkoutUrl) {
        window.open(checkoutUrl, '_blank');
      }
    }, 500);
  };

  const isLoading = productLoading || cartLoading;

  return (
    <section id="oferta" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div 
          ref={offerRef as React.RefObject<HTMLDivElement>}
          className={`max-w-4xl mx-auto ${getAnimationClass(offerVisible, "scale")}`}
        >
          {/* Urgency banner with countdown */}
          <div className="bg-primary text-primary-foreground text-center py-4 px-6 rounded-t-2xl">
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 animate-shake" />
                <span className="font-bold uppercase text-sm md:text-base">¡Oferta expira en!</span>
                <AlertTriangle className="w-5 h-5 animate-shake" />
              </div>
              <CountdownTimer />
            </div>
          </div>

          <div className="bg-gradient-card border border-border border-t-0 rounded-b-2xl shadow-float overflow-hidden">
            <div className="p-5 md:p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-center">
                {/* Product image */}
                <div className="flex justify-center">
                  <div className="relative">
                    <img
                      src={productoPrincipal}
                      alt="Guía Salí del Veraz"
                      className="w-full max-w-[200px] md:max-w-xs rounded-lg shadow-card"
                      loading="lazy"
                    />
                    <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 bg-accent text-accent-foreground px-3 py-1 md:px-4 md:py-2 rounded-lg shadow-glow-gold rotate-12 text-sm md:text-base">
                      <span className="font-bold">¡HOY!</span>
                    </div>
                  </div>
                </div>

                {/* Offer details */}
                <div className="text-center lg:text-left">
                  <h2 className="text-2xl md:text-3xl font-bold font-heading text-foreground mb-2">
                    Guía "SALÍ DEL VERAZ"
                  </h2>
                  <p className="text-accent font-semibold mb-6">
                    + 4 Bonus exclusivos incluidos
                  </p>

                  {/* What's included */}
                  <ul className="space-y-3 mb-8 text-left">
                    {included.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Pricing */}
                  <div className="mb-6">
                    <div className="flex items-center justify-center lg:justify-start gap-4 mb-2">
                      <span className="text-2xl text-muted-foreground line-through">$35.999</span>
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold">
                        -50% OFF
                      </span>
                    </div>
                    <div className="text-5xl md:text-6xl font-extrabold font-heading text-foreground">
                      $17.999
                    </div>
                    <p className="text-muted-foreground mt-2">Pago único • Acceso inmediato</p>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    variant="ctaLarge" 
                    className="w-full mb-3"
                    onClick={handleCheckout}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <Loader2 className="w-6 h-6 mr-2 animate-spin" />
                    ) : (
                      <Zap className="w-6 h-6 mr-2" />
                    )}
                    {isLoading ? "Procesando..." : "¡QUIERO SALIR DEL VERAZ AHORA!"}
                  </Button>

                  {/* Email notice */}
                  <div className="bg-accent/10 border border-accent/30 rounded-lg p-3 mb-4">
                    <p className="text-sm text-foreground flex items-center justify-center gap-2">
                      <span className="text-accent text-lg">📧</span>
                      <span><strong className="text-base uppercase tracking-wide">IMPORTANTE:</strong> Al comprar, ingresá tu email para recibir el ebook al instante.</span>
                    </p>
                  </div>

                  {/* Trust badges */}
                  <div className="flex items-center justify-center lg:justify-start gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <ShieldCheck className="w-4 h-4 text-accent" />
                      <span>Pago seguro con Shopify</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Gift className="w-4 h-4 text-accent" />
                      <span>Bonus incluidos</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Guarantee bar */}
            <div className="bg-accent/10 border-t border-accent/20 p-6 text-center">
              <div className="flex items-center justify-center gap-3">
                <ShieldCheck className="w-8 h-8 text-accent" />
                <div className="text-left">
                  <p className="font-bold text-foreground">Garantía de 7 días</p>
                  <p className="text-sm text-muted-foreground">Si no te sirve, te devolvemos el 100% de tu dinero</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
