import { Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import NavBar from "./components/Navbar/Navbar";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";

import LoginPopup from "./components/LoginPopup/LoginPopup";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <NavBar setShowLogin={setShowLogin} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/placeorder" element={<PlaceOrder />} />
        </Routes>
        
      </div>
      <Footer />
    </>
  );
}

export default App;
