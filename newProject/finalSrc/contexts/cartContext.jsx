import { createContext, useState, useEffect } from "react";


export const addProductToCart = (cartItems, newProduct)=>{


  const productExistinginCart = cartItems.find(
    (cartItem)=> newProduct.id === cartItem.id
  )


  if(productExistinginCart){
    return cartItems.map((cartItem)=>
    newProduct.id === cartItem.id ? { ...cartItem , quantity : cartItem.quantity + 1} : cartItem
    )
  }
   
  return [...cartItems, { ...newProduct, quantity: 1}]

}

const removeCartItem = (cartItems, cartItemToRemove) => {
  // find the cart item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  // check if quantity is equal to 1, if it is remove that item from the cart
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  // return back cartitems with matching cart item with reduced quantity
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

export const CartContext = createContext({
  cartItems:null ,
  setCartItems:()=>null,
  showCartDropdown: false,
  setShowCartDropdown: ()=>null,
  addItemToCart: ()=>null,
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartItemCount: 0,
  cartTotal: 0,
})


export const CartProvider = ({children})=>{
  const [showCartDropdown,setShowCartDropdown] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [cartItemCount, setCartItemCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const count = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartItemCount(count);
  }, [cartItems]);


  const addItemToCart =(product)=>{
    setCartItems(addProductToCart(cartItems, product ))
  }
  const removeItemToCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  };

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

 

 


  const value = {
    cartItems,
    setCartItems,
    showCartDropdown,
    setShowCartDropdown ,
    addItemToCart,
    cartItemCount,
    removeItemToCart,
    clearItemFromCart,
    cartTotal,

  }



  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}



