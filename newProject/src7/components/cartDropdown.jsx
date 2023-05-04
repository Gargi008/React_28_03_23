import React, {useContext} from 'react';
import { CartContext } from '../contexts/cartContext';
import './cartDropdown.css';
import CartItem from './cartItem';

export const CartDropdown = () => {

  const { cartItems } = useContext(CartContext);
  return (
    <div className='cart-dropdown-container'>
        <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className='emptyCart'>Your cart is empty</span>
        )}
            <button className='btn' style={{marginTop : 'auto'}}>CheckOut</button>
        </div>
    </div>
  )
}
