import { useState, useEffect } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import { getProductsFromCategory } from '../services/Products';
import ItemListContainer from '../components/sections/ItemListContainer';
import { collection, getDocs, query, where, getDoc, doc} from "firebase/firestore";
import { db } from '../firebase';

const Home = () => {

  const [products, setProducts] = useState([])
  const {setLoading} = useOutletContext();
  const { id } = useParams();


  useEffect(() => {
    let mounted = true
    setLoading(true)

    getProductsFromCategory("MLA", "MLA1055").then(items => {
      if(mounted) {
        setProducts(items.results)
        setTimeout(() => {
          setLoading(false)
        }, 1000)
      }
    })

    return () => mounted = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps    
  }, [id])

  useEffect(() => {
  
    const getFromFirebase =  async () => {
      console.log("usando un query y un where para filtrar")
      const q =  query(collection(db, "items"), where("name", "==", "iPhone 12"));  
      // Si no quiero filtrar los datos, solo hago un getDocs a colleciton(db, "items")
      const snapshot = await getDocs(q)
      snapshot.forEach((doc) => {
        console.log(doc.data())
      })

      /// con promises
      // getDocs(q).then(docs => console.log(docs.data()))

      console.log("Obtener mis documentos usando getDoc, sirve para trer un unico registro")
      const docRef = doc(db, "items", "XIYMHQmgJbMqpy3Fw5Y0")
      const docSnapshot = await getDoc(docRef)
      console.log(docSnapshot.data())
    }

    getFromFirebase()

  }, []);

  return (
    <div>     
      <ItemListContainer products={products} />
    </div>
  );
}

export default Home;
