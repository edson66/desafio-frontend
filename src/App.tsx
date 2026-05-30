import { useEffect, useState } from 'react';
import axios from 'axios';
import type { Product } from './types/Product';

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3001/products')
      .then(response => {
        console.log("Deu certo! Os dados chegaram:", response.data);
        setProducts(response.data);
      })
      .catch(error => {
        console.error("Erro na requisição:", error);
      });
  }, []);

  return (
    <div>
      <h1>Meus Produtos</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - R$ {product.price} ({product.status})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;