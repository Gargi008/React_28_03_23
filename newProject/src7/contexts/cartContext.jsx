import { createContext,useState, useEffect } from "react";

export const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === productToAdd.id
    );
    if (existingCartItem) {
      return cartItems.map((cartItem) =>
        cartItem.id === productToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  };
// the actual value that you need to access.
export const CartContext= createContext({
    showCartDropdown: true,
    setShowCartDropdown:() => null,
    cartItems: [],
    addItemToCart: () => {},
    cartItemCount: 0,
})
/* current context value, as given by the nearest context provider for the given context. */
export const CartProvider = ({children})=>{
    const [showCartDropdown,setShowCartDropdown] = useState(false)
    const [cartItems, setCartItems] = useState([]);
    const [cartItemCount, setCartItemCount] = useState(0);

    useEffect(() => {
        const count = cartItems.reduce(
          (total, cartItem) => total + cartItem.quantity,
          0
        );
        setCartItemCount(count);
      }, [cartItems]);

    const addItemToCart = (product) =>
    setCartItems(addCartItem(cartItems, product));

    const value = {
        showCartDropdown,
        setShowCartDropdown ,
        cartItems,
        addItemToCart,
        cartItemCount,
    }
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
