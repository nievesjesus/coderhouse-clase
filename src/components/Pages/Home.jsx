import { useState, useEffect } from 'react';
import { Windows } from 'react-bootstrap-icons';
import { useOutletContext, useParams } from 'react-router-dom';
import { getProductsFromCategory } from '../../services/Products';
import ItemListContainer from '../Containers/ItemListContainer';

const Home = () => {

  const [products, setProducts] = useState([])
  const [setLoading] = useOutletContext();
  const { id } = useParams();


  useEffect(() => {
    let mounted = true
    setLoading(true)

    getProductsFromCategory("MLA", "MLA1055").then(items => {
      if(mounted) {
        if (typeof id === 'undefined') {
          setProducts(items.results)
          setTimeout(() => {
            setLoading(false)
          }, 3000)
        }
      }
    })
    // DOC: Esto es para limpiar el componente cuando se desmonta
    return () => {
      mounted = false;
    } 
  }, [])

  return (
    <div>     
      <ItemListContainer products={products} />
    </div>
  );
}

export default Home;
