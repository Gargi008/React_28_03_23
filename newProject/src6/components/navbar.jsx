import React from 'react'
import {Link} from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';

export const Navbar = () => {

  const cartCount = useSelector(state => state.cartCount)
  const userLogged = useSelector(state => state.userLogged)
  return (
    <nav className="navbar">
        <div>
            <Link to="/" className='Link logo'>ProProducts</Link>
        </div>
        <ul>
            <li><Link className='Link' to="/">Home</Link></li>
            <li><Link className='Link' to="/products">Products</Link></li>
            <li><Link className='Link' to="/cart">Cart <ShoppingCartIcon/> {cartCount}</Link></li>
            {userLogged ? <span className= 'Link'>SignOut</span> :  <li><Link className='Link' to="/signin">SignIn</Link></li>}
           
        </ul>
    </nav>
  )
}


