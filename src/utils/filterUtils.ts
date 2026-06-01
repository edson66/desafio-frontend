import type { Product } from '../types/Product';

export function filterProducts(
  products: Product[],
  categoryFilter: string,
  statusFilter: string,
  minPrice: string,
  maxPrice: string
): Product[] {
  return products.filter(product => {
    const matchCategory = product.category.toLowerCase().includes(categoryFilter.toLowerCase());
    const matchStatus = statusFilter === '' || product.status === statusFilter;

    const price = Number(product.price);
    const matchMinPrice = minPrice === '' || price >= Number(minPrice);
    const matchMaxPrice = maxPrice === '' || price <= Number(maxPrice);

    return matchCategory && matchStatus && matchMinPrice && matchMaxPrice;
  });
}