import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar';
import Product from './components/Product';

const App = () => {

  const [products, setProducts] = useState([
    {name: "Espada Doran", brand: "LoL", stock: 10},
    {name: "Pocion de Vida", brand: "Riot", stock: 3},
    {name: "Segador", brand: "LoL", stock: 1},
    {name: "Runes", brand: "LoL", stock: 0}    
  ])

  return (
    <div className="App">
      <h2>Mi carrito</h2>
      <div style={{ marginBottom: 10}}>
        {products.map(product => {
          return <Product productName={product.name}  brand={product.brand} stock={product.stock}/>
        })}
      </div>   
    </div>
  );
}

export default App;
