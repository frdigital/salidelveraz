import { useState, useEffect } from 'react';
import { fetchProducts, ShopifyProduct } from '@/lib/shopify';

export function useShopifyProduct() {
  const [product, setProduct] = useState<ShopifyProduct | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        setIsLoading(true);
        const products = await fetchProducts(1);
        if (products.length > 0) {
          setProduct(products[0]);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error cargando producto');
      } finally {
        setIsLoading(false);
      }
    };

    loadProduct();
  }, []);

  return { product, isLoading, error };
}
