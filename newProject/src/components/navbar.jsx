import React from 'react'
import {Link} from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
export const Navbar = () => {
  return (
    <nav className="navbar">
        <div>
            <Link to="/" className='Link logo'>ProProducts</Link>
        </div>
        <ul>
            <li><Link className='Link' to="/">Home</Link></li>
            <li><Link className='Link' to="/products">Products</Link></li>
            <li><Link className='Link' to="/cart">Cart <ShoppingCartIcon/></Link></li>
        </ul>
    </nav>
  )
}


