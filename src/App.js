import './App.css';
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

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} >
          <Route index element={ <Home />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="/offers/" element={<Offers />} />
          <Route path="/categories/" element={<Categories />} /> 
          <Route path="/category/:id" element={<Category />} />     
          <Route path="/history/" element={<History />} />                              
          <Route path="*" element={<Error />} />
        </Route>       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
