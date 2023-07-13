import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Section from './Components/Section';
import Footer from './Components/Footer';
import About from './Components/About';
import Contact from './Components/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cards from './Components/Cards';
import Cart from './Components/Cart';
import RegisterUser from './Components/RegisterUser';
import LogIn from './Components/Login';
import { useStateValue } from './StateProvider'
import CartState from './context/CartState';
import ProductPage from './Components/ProductPage';
function App() {
  const [{ user }, dispatch] = useStateValue()

  useEffect(() => {
    if (localStorage.getItem("set-email")) {
      dispatch({
        type: "SET_USER",
        user: localStorage.getItem("set-email")
      })
    } else {
      dispatch({
        type: "SET_USER",
        user: null
      })
    }
  }, [1])


  return (
    <>
      <CartState>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Section />}></Route>
            <Route exact path='/login' element={<LogIn />}></Route>
            <Route exact path='/product' element={<Cards />}></Route>
            <Route exact path='/about' element={<About />}></Route>
            <Route exact path='/contact' element={<Contact />}></Route>
            <Route exact path='/cart' element={<Cart />}></Route>
            <Route exact path='/signup' element={<RegisterUser />}></Route>
            <Route exact path='/productpage' element={<ProductPage />}></Route>
          </Routes>
          <Footer />
        </Router>
      </CartState>
    </>
  );
}

export default App;

