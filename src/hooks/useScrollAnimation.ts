import { useEffect, useRef, useState } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const { threshold = 0.1, rootMargin = "0px", triggerOnce = true } = options;
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
};

export const getAnimationClass = (isVisible: boolean, animation: "fade-up" | "fade-left" | "fade-right" | "scale" = "fade-up") => {
  const baseClasses = "transition-all duration-700 ease-out";
  
  const animations = {
    "fade-up": isVisible 
      ? `${baseClasses} opacity-100 translate-y-0` 
      : `${baseClasses} opacity-0 translate-y-8`,
    "fade-left": isVisible 
      ? `${baseClasses} opacity-100 translate-x-0` 
      : `${baseClasses} opacity-0 -translate-x-8`,
    "fade-right": isVisible 
      ? `${baseClasses} opacity-100 translate-x-0` 
      : `${baseClasses} opacity-0 translate-x-8`,
    "scale": isVisible 
      ? `${baseClasses} opacity-100 scale-100` 
      : `${baseClasses} opacity-0 scale-95`,
  };

  return animations[animation];
};
