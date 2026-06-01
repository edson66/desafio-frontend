import { describe, it, expect } from 'vitest';
import { filterProducts } from './filterUtils';
import type { Product } from '../types/Product';

describe('filterProducts', () => {
  const mockProducts: Product[] = [
    { id: '1', name: 'Teclado', category: 'Periféricos', price: 100, status: 'Ativo' },
    { id: '2', name: 'Mouse', category: 'Periféricos', price: 50, status: 'Ativo' },
    { id: '3', name: 'Monitor', category: 'Monitores', price: 1200, status: 'Inativo' },
    { id: '4', name: 'Cadeira', category: 'Móveis', price: 800, status: 'Ativo' },
  ];

  it('deve retornar todos os produtos sem filtros', () => {
    const result = filterProducts(mockProducts, '', '', '', '');
    expect(result).toHaveLength(4);
  });

  it('deve filtrar por categoria sem diferenciar maiúsculas e minúsculas', () => {
    const result = filterProducts(mockProducts, 'peri', '', '', '');
    expect(result).toHaveLength(2);
    expect(result.map(product => product.id)).toEqual(['1', '2']);
  });

  it('deve filtrar por status', () => {
    const result = filterProducts(mockProducts, '', 'Inativo', '', '');
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe('3');
  });

  it('deve filtrar por preço mínimo', () => {
    const result = filterProducts(mockProducts, '', '', '100', '');
    expect(result).toHaveLength(3);
    expect(result.map(product => product.id)).toEqual(['1', '3', '4']);
  });

  it('deve filtrar por preço máximo', () => {
    const result = filterProducts(mockProducts, '', '', '', '100');
    expect(result).toHaveLength(2);
    expect(result.map(product => product.id)).toEqual(['1', '2']);
  });

  it('deve filtrar por faixa de preço', () => {
    const result = filterProducts(mockProducts, '', '', '80', '900');
    expect(result).toHaveLength(2);
    expect(result.map(product => product.id)).toEqual(['1', '4']);
  });

  it('deve combinar todos os filtros ao mesmo tempo', () => {
    const result = filterProducts(mockProducts, 'peri', 'Ativo', '60', '150');
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe('1');
  });
});