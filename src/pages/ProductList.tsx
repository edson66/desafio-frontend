import { useEffect, useState } from 'react';
import axios from 'axios';
import type { Product } from '../types/Product';
import './ProductList.scss';
import { Link } from 'react-router-dom';

export function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  const [categoryFilter, setCategoryFilter] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3001/products');
      setProducts(response.data);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  };

  const handleDelete = async (id: string) => {
    const confirm = window.confirm("Tem certeza que deseja excluir este produto?");
    if (!confirm) return;

    try {
      await axios.delete(`http://localhost:3001/products/${id}`);
      setProducts(products.filter(p => p.id !== id));
      alert("Produto excluído com sucesso!");
    } catch (error) {
      console.error("Erro ao excluir:", error);
      alert("Erro ao excluir o produto.");
    }
  };

  const filteredProducts = products.filter(product => {
    const matchCategory = product.category.toLowerCase().includes(categoryFilter.toLowerCase());
    const matchStatus = statusFilter === '' || product.status === statusFilter;
    
    const price = Number(product.price);
    const matchMinPrice = minPrice === '' || price >= Number(minPrice);
    const matchMaxPrice = maxPrice === '' || price <= Number(maxPrice);

    return matchCategory && matchStatus && matchMinPrice && matchMaxPrice;
  });

  return (
    <div className="list-container">
      <h2>Catálogo de Produtos</h2>

      <div className="filters">
        <div className="filter-group">
          <label>Categoria</label>
          <input 
            type="text" 
            placeholder="Buscar categoria..." 
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          />
        </div>
        <div className="filter-group">
          <label>Preço Mínimo (R$)</label>
          <input 
            type="number" 
            placeholder="0.00" 
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
        </div>
        <div className="filter-group">
          <label>Preço Máximo (R$)</label>
          <input 
            type="number" 
            placeholder="999.00" 
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>
        <div className="filter-group">
          <label>Status</label>
          <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
            <option value="">Todos</option>
            <option value="Ativo">Ativo</option>
            <option value="Inativo">Inativo</option>
          </select>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Categoria</th>
            <th>Preço</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>R$ {Number(product.price).toFixed(2)}</td>
                <td>{product.status}</td>
                <td>
                  <Link to={`/editar/${product.id}`} className="btn-edit">
                    Editar
                  </Link>
                  <button 
                    className="btn-delete" 
                    onClick={() => handleDelete(product.id)}
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} style={{ textAlign: 'center' }}>Nenhum produto encontrado.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}