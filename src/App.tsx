import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ProductList } from './pages/ProductList';
import { ProductForm } from './pages/ProductForm';

function App() {
  
  return (
    <BrowserRouter>
      <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
        <Link to="/" style={{ marginRight: '15px' }}>Ver Produtos</Link>
        <Link to="/cadastro">Novo Produto</Link>
      </nav>

      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cadastro" element={<ProductForm />} />
          <Route path="/editar/:id" element={<ProductForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;