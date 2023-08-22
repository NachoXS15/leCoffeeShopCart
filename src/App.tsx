import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Order from './pages/Order';
import { Container } from '@mui/material';
import Header from './components/Header';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart';
import { useEffect, useState } from 'react';
function App() {

  const [bindCart, setBindCart] = useState(false);
  

  return (
    <CartProvider>
      <Header/>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/order' element={<Order />}/>
        </Routes>
    </CartProvider>
  )
}

export default App;
