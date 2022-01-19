import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Product from './components/Product';
import { getProductsFromCategory } from './services/Products';
import ItemListContainer from './components/ItemListContainer';
import Loading from './components/Loading';

const App = () => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    let mounted = true
    setLoading(true)
    getProductsFromCategory("MLA", "MLA1055").then(items => {
      if(mounted) {
        console.log(items.results)
        setProducts(items.results)
        setTimeout(() => {
          setLoading(false)
        }, 3000)
      }
    })
    return () => mounted = false;
  }, [])

  return (
    <div className="App">     
      <NavBar />
      <ItemListContainer products={products} />
      {loading ? <Loading /> : null} 
    </div>
  );
}

export default App;
