import React, {useContext} from 'react';
import { ProductContext } from '../contexts/productContext.jsx';
import { CartContext } from '../contexts/cartContext.jsx';

export const ProductScreen = (props) => {

  //console.log("props.product",props.products)
  const {products, setProducts}= useContext(ProductContext)
  const { addItemToCart } = useContext(CartContext);
  return (
    <div className="cardContainer">

       {products.map((product)=>{
          const addProductToCart = () => {
            addItemToCart(product)};
       
        return(
        <div style={{textAlign : 'center'}}> 
        {/*   <p>{product.id}</p> */}
          <img src={product.preview} width="300" height="350"></img>
          <p style={{fontSize: 15}}>{product.name}</p>
          <p style={{fontSize: 12}}>{product.brand}</p>
          <p style={{fontSize: 15}}>{product.price}/-</p>
          <button buttonType='inverted' onClick={addProductToCart}>Add to Cart</button>
        </div>
       )
       })}
    </div>
  )
}
