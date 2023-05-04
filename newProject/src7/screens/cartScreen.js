import React, {useContext} from 'react';
import { ProductContext } from '../contexts/productContext.jsx';

export const CartScreen = () => {
  const {products, setProducts}= useContext(ProductContext)
  console.log("products",products)
  return (
    <div className="container">CartScreen</div>
  )
}
