import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ProductList } from './pages/ProductList';
import { ProductForm } from './pages/ProductForm';
import './App.scss';

function App() {
  
  return (
    <BrowserRouter>
      <nav className="app-nav">
        <Link to="/" className="nav-button">Ver Produtos</Link>
        <Link to="/cadastro" className="nav-button">Novo Produto</Link>
      </nav>

      <div className="app-content">
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