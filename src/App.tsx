import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Order from './pages/Order';
import { Container } from '@mui/material';
import Header from './components/Header';
function App() {
  return (
    <>
    <Header />
      <section>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/order' element={<Order />}/>
        </Routes>
      </section>
    </>
  )
}

export default App;
