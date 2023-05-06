import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/navbar';

import React, { useState , useEffect, useContext} from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import { HomeScreen } from './screens/homeScreen';
import { ProductScreen } from './screens/productScreen';
import { CartScreen } from './screens/cartScreen';
import { SignupScreen } from './screens/signupScreen';
import { UserAuthentication } from './screens/userAuthentication';
import { ProductContext } from './contexts/productContext.jsx';
import { Checkout } from './screens/checkout';


function App() {

  const {products, setProducts}= useContext(ProductContext)



  //console.log("products------------",products)


  useEffect(()=>{
    fetch("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
    .then(res=>res.json())
    .then((items) => setProducts(items))
  },[])


 
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomeScreen/>}></Route>
        <Route path="/products" element={<ProductScreen products={products}/>}></Route>
        <Route path="/cart" element={<CartScreen/>}></Route>
        <Route path="/signin" element={<UserAuthentication/>}></Route>
        <Route path="checkout" element={<Checkout/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
