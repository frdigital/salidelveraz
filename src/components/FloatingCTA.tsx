import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Zap, X } from "lucide-react";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroSection = document.querySelector('section');
      const heroHeight = heroSection?.offsetHeight || 600;
      
      setIsVisible(scrollPosition > heroHeight && !isDismissed);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const scrollToOffer = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-card/95 backdrop-blur-sm border-t border-border shadow-float animate-fade-in-up">
      <div className="container mx-auto flex items-center justify-between gap-4">
        <div className="hidden sm:block">
          <p className="font-bold text-foreground">¡Oferta especial!</p>
          <p className="text-sm text-muted-foreground">Guía + 4 Bonus por solo $17.999</p>
        </div>
        
        <div className="flex items-center gap-3 flex-1 sm:flex-none">
          <Button 
            variant="cta" 
            size="lg" 
            className="flex-1 sm:flex-none"
            onClick={scrollToOffer}
          >
            <Zap className="w-5 h-5 mr-2" />
            ¡COMPRAR AHORA!
          </Button>
          
          <button 
            onClick={() => setIsDismissed(true)}
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FloatingCTA;
