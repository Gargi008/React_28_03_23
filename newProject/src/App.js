import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/navbar';

import { BrowserRouter , Routes, Route } from 'react-router-dom';
import { HomeScreen } from './screens/homeScreen';
import { ProductScreen } from './screens/productScreen';
import { CartScreen } from './screens/cartScreen';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomeScreen/>}></Route>
        <Route path="/products" element={<ProductScreen/>}></Route>
        <Route path="/cart" element={<CartScreen/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
