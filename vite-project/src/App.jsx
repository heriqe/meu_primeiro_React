import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route, Link } from 'react-router-dom';
import './App.css'
   
function QtdeCliques({qtdeCliques, titleCliques}) {
  return(
      <div>
          <p>Você clicou {qtdeCliques} em {titleCliques}</p>
      </div>
  );
}
function Home() {
    const [SucoLimao, setSucoLimao] = useState(0)

    function CompraSucoDeLimao(){
      setSucoLimao(SucoLimao + 1);
    }
    return (<div className="card">
              <h1>Página Inicial</h1>
              <h2>Clique para comprar suco de limão</h2>
              <button onClick={CompraSucoDeLimao}>Comprar suco de limao</button>
              <QtdeCliques qtdeCliques={sucoLimao} titleCliques="suco de limão"/>
              <Link to="/second-page"><button>Carrinho</button>
              </Link>
            </div>
)}; 
    


function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/second-page" element={<SecondPage />} />
      </Routes>
  );
}

export default App
