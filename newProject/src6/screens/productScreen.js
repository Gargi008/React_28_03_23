import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { addProducts } from '../actions'

export const ProductScreen = (props) => {

  const dispatch = useDispatch()

  //console.log("props.product",props.products)
  return (
    <div className="container">ProductScreen

       {props.products.map((product)=>{return(

        <div style={{ width : '30%'}}> 
        {/*   <p>{product.id}</p> */}
          <h4>{product.name}</h4>
          <img src={product.preview} width="300" height="350"></img>

          <button onClick = {()=>{
            dispatch(addProducts())
          }}>Add to Cart</button>

        </div>

       
       )
       
       
       })}


   

    
    
    </div>
  )
}
