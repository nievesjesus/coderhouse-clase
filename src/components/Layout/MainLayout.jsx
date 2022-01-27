import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Shared/NavBar';
import Loading from '../Shared/Loading';
import { getCategories } from '../../services/Products';

const Layout = () => {
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState([])

    useEffect(() => {
      let mounted = true
      getCategories("MLA").then(results => {
        if(mounted) {
            setCategories(results)
        }
      })
      return () => mounted = false;
    }, [])

    return(
        <div className="App">
            <NavBar categories={categories} />
            <Outlet context={[setLoading]} />
            {loading ? <Loading /> : null}             
        </div>
    )
}

export default Layout;