import Navbar from './components/Navbar';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';
import ComingSoon from './components/ComingSoon';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/products' element={<Products />} />
        <Route exact path='/products/:id' element={<Product />} />
        <Route exact path='/cart' element={<Cart />} />
        <Route exact path='/about' element={<ComingSoon />} />
        <Route exact path='/contact' element={<ComingSoon />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
