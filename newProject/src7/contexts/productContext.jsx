import { createContext,useState } from "react";

// the actual value that you need to access.
export const ProductContext= createContext({
    products: [],
    setProducts:() => null
})
/* current context value, as given by the nearest context provider for the given context. */
export const ProductProvider = ({children})=>{
    const [products,setProducts] = useState([])
    const value = {products,setProducts}


    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}
