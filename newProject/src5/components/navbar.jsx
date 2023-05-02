import React, {useContext} from 'react'
import {Link} from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {UserContext} from '../contexts/userContext';
import {signOutUser} from '../utils/firebase';

export const Navbar = () => {
  const {currentUser,setCurrentUser} = useContext(UserContext)
  const signOutHandler = async ()=>{
    await signOutUser();
    setCurrentUser(null)
  }
 
  console.log("currentUser-------",currentUser)
  return (
    <nav className="navbar">
        <div>
            <Link to="/" className='Link logo'>ProProducts</Link>
        </div>
        <ul>
            <li><Link className='Link' to="/">Home</Link></li>
            <li><Link className='Link' to="/products">Products</Link></li>
            <li><Link className='Link' to="/cart">Cart <ShoppingCartIcon/></Link></li>

            {currentUser ? (<span className='Link' onClick ={signOutHandler}>SignOut</span>) : (
                <li><Link className='Link' to="/signin">SignIn</Link></li>
            )}
          
        </ul>
    </nav>
  )
}


