
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Error from './pages/Error';
import MainLayout from './components/layouts/MainLayout';
import ItemDetailContainer from './components/sections/ItemDetailContainer';
import Offers from './pages/Offerts';
import Categories from './pages/Categories';
import Category from './pages/Category';
import History from './pages/History';
import { CartProvider } from './contexts/CarContext';
import AddItem from './pages/AddItem';
import Cart from './pages/Cart';
import EditItem from './pages/EditItem';

const App = () => {

  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />} >
            <Route index element={ <Home />} />
            <Route path="/product/:id" element={<ItemDetailContainer />} />
            <Route path="/offers/" element={<Offers />} />
            <Route path="/categories/" element={<Categories />} /> 
            <Route path="/category/:id" element={<Category />} />     
            <Route path="/history/" element={<History />} />    
            <Route path="/additem" element={<AddItem />} />      
            <Route path="/cart" element={<Cart />} />           
            <Route path="/edititem/:id" element={<EditItem />} />                                      
            <Route path="*" element={<Error />} />
          </Route>       
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
