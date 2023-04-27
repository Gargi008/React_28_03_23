import React from 'react'

export const ProductScreen = (props) => {

  //console.log("props.product",props.products)
  return (
    <div className="container">ProductScreen

       {props.products.map((product)=>{return(

        <div style={{ width : '30%'}}> 
        {/*   <p>{product.id}</p> */}
          <h4>{product.name}</h4>
          <img src={product.preview} width="300" height="350"></img>




        </div>

       
       )
       
       
       })}


   

    
    
    </div>
  )
}
