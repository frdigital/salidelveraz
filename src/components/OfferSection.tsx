import { Button } from "@/components/ui/button";
import { Check, Clock, ShieldCheck, Zap, Gift, Loader2 } from "lucide-react";
import productoPrincipal from "@/assets/producto-principal.png";
import { useCartStore } from "@/stores/cartStore";
import { useShopifyProduct } from "@/hooks/useShopifyProduct";
import { toast } from "sonner";

const included = [
  "Guía completa 'Salí del Veraz' (PDF)",
  "Modelos de carta documento listos para usar",
  "Scripts para negociar con cobradores",
  "Checklist paso a paso",
  "Acceso a comunidad de asesoría",
  "Actualizaciones gratuitas de por vida"
];

const OfferSection = () => {
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
        <div className="max-w-4xl mx-auto">
          {/* Urgency banner */}
          <div className="bg-primary text-primary-foreground text-center py-3 px-6 rounded-t-2xl">
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-5 h-5 animate-pulse" />
              <span className="font-bold uppercase">¡Oferta por tiempo limitado!</span>
            </div>
          </div>

          <div className="bg-gradient-card border border-border border-t-0 rounded-b-2xl shadow-float overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Product image */}
                <div className="flex justify-center">
                  <div className="relative">
                    <img
                      src={productoPrincipal}
                      alt="Guía Salí del Veraz"
                      className="w-full max-w-xs rounded-lg shadow-card"
                    />
                    <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg shadow-glow-gold rotate-12">
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
                    className="w-full mb-4"
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
