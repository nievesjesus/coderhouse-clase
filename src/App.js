import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import Error from './components/Pages/Error';
import MainLayout from './components/Layout/MainLayout';
import ItemDetailContainer from './components/Containers/ItemDetailContainer';
import Offers from './components/Pages/Offerts';
import Categories from './components/Pages/Categories';
import Category from './components/Pages/Category';
import History from './components/Pages/History';

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
