import { useNavigate } from 'react-router-dom';
import './ProductForm.scss';
import axios from 'axios';
import { useState } from 'react';

export function ProductForm() {
  const navigate = useNavigate();
  
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [status, setStatus] = useState<'Ativo' | 'Inativo' | ''>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !category || !price || !status) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    if (Number(price) <= 0) {
      alert("O preço deve ser maior que zero.");
      return;
    }

    const newProduct = {
      name,
      category,
      price: Number(price),
      status
    };

    try {
      await axios.post('http://localhost:3001/products', newProduct);
      alert("Produto salvo com sucesso!");
      navigate('/');
    } catch (error) {
      console.error("Erro ao salvar:", error);
      alert("Ocorreu um erro ao salvar o produto.");
    }
  };

  return (
    <div className="form-container">
      <h2>Cadastrar Produto</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nome do Produto</label>
          <input 
            type="text" 
            id="name" 
            placeholder="Ex: Teclado" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Categoria</label>
          <input 
            type="text" 
            id="category" 
            placeholder="Ex: Periféricos" 
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Preço (R$)</label>
          <input 
            type="number" 
            id="price" 
            placeholder="0.00" 
            step="0.01" 
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="status">Status</label>
          <select id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value as 'Ativo' | 'Inativo' | '')}
          >
            <option value="">Selecione...</option>
            <option value="Ativo">Ativo</option>
            <option value="Inativo">Inativo</option>
          </select>
        </div>

        <div className="button-group">
          <button type="button" className="btn-cancel" onClick={() => navigate('/')}>
            Cancelar
          </button>
          <button type="submit" className="btn-save">
            Salvar Produto
          </button>
        </div>
      </form>
    </div>
  );
}