import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
 
function QtdeCliques({ qtdeCompra, tiposumo }) {
  return (
    <div>
      <p>Você comprou {tiposumo} {qtdeCompra} vezes</p>
    </div>
  );
}
 
function Home() {
  const [qtdeCliques, setQtdeCliques] = useState(0);
 
  function comprarSucoDeLimao() {
    setQtdeCliques(qtdeCliques + 1);
  }
 
  return (
    <div>
      <h1>Página Inicial</h1>
      <h2>Clique para comprar suco de limão</h2>
      <button onClick={comprarSucoDeLimao}>Comprar suco de limão</button>
      <QtdeCliques qtdeCompra={qtdeCliques} tiposumo="suco de limão" />
 
      <Link to="/second-page">
        <button>Carrinho</button>
      </Link>
    </div>
  );
}
 
function SecondPage() {
  return <h1>Segunda Página - Carrinho</h1>;
}
 
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/second-page" element={<SecondPage />} />
    </Routes>
  );
}
 
export default App;