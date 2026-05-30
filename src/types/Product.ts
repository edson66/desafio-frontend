export interface Product {
  id: string; 
  name: string;
  category: string;
  price: number;
  status: 'Ativo' | 'Inativo';
}

export interface Filters {
  category?: string;
  priceRange?: {
    min: number;
    max: number;
  };
  status?: 'Ativo' | 'Inativo' | '';
}