import { useNavigate } from 'react-router-dom';
import './ProductForm.scss';

export function ProductForm() {
  const navigate = useNavigate();

  return (
    <div className="form-container">
      <h2>Cadastrar Produto</h2>
      
      <form>
        <div className="form-group">
          <label htmlFor="name">Nome do Produto</label>
          <input type="text" id="name" placeholder="Ex: Teclado" />
        </div>

        <div className="form-group">
          <label htmlFor="category">Categoria</label>
          <input type="text" id="category" placeholder="Ex: Periféricos" />
        </div>

        <div className="form-group">
          <label htmlFor="price">Preço (R$)</label>
          <input type="number" id="price" placeholder="0.00" step="0.01" />
        </div>

        <div className="form-group">
          <label htmlFor="status">Status</label>
          <select id="status">
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