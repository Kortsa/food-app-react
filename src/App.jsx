import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import NavBar from "./components/NavBar";
import Cart from './pages/cart/Cart';
import PlaceOrder from './pages/placeorder/PlaceOrder';
import Home from './pages/home/Home';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
    <div className="app">
      <NavBar />
      <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/placeorder' element={<PlaceOrder />} />
      </Routes>
      </Router>
    </div>
    <Footer />
    </>
    
  )
}

export default App;
