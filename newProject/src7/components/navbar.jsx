import React, {useContext} from 'react'
import {Link} from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {UserContext} from '../contexts/userContext';
import {signOutUser} from '../utils/firebase';
import { CartDropdown } from './cartDropdown';
import { CartContext } from '../contexts/cartContext';

export const Navbar = () => {
  const {currentUser,setCurrentUser} = useContext(UserContext)
  const {showCartDropdown,setShowCartDropdown,cartItemCount} = useContext(CartContext)
  const signOutHandler = async ()=>{
    await signOutUser();
    setCurrentUser(null)
  }
 
  console.log("currentUser-------",currentUser)
  
  console.log("showCartDropdown-------",showCartDropdown)
  const toggleShowCartDropdown= ()=>{
    setShowCartDropdown(!showCartDropdown)
  }

  return (
    <nav className="navbar">
        <div>
            <Link to="/" className='Link logo'>ProProducts</Link>
        </div>
        <ul>
         {/*    <li><Link className='Link' to="/">Home</Link></li> */}
            <li><Link className='Link' to="/products">Products</Link></li>
            {currentUser ? (<span className='Link' onClick ={signOutHandler}>SignOut </span>) : (
                <li><Link className='Link' to="/signin">Login</Link></li>
            )}
            <li onClick={toggleShowCartDropdown}><Link className='Link'>Cart <ShoppingCartIcon/>
            {cartItemCount}</Link></li>  
        </ul>
        {showCartDropdown && <CartDropdown/>}
        
    </nav>
  )
}


