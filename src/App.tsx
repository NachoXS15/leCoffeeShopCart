import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Order from './pages/Order';
import Header from './components/Header';
import { CartProvider } from './context/CartContext';

function App() {

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
