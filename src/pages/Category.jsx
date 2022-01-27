import { useState, useEffect } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import { getProductsFromCategory } from '../services/Products';
import ItemListContainer from '../components/sections/ItemListContainer';

const Category = () => {

  const [products, setProducts] = useState([])
  const [setLoading] = useOutletContext();
  const { id } = useParams();

  useEffect(() => {
    let mounted = true
    setLoading(true)
    if (typeof id !== 'undefined') {    
        getProductsFromCategory("MLA", id).then(items => {
            if(mounted) {
                setProducts(items.results)
                setTimeout(() => {
                  setLoading(false)
                }, 3000)
            }
          })          
    }
    return () => mounted = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return (
    <div>     
      <ItemListContainer products={products} />
    </div>
  );
}

export default Category;
