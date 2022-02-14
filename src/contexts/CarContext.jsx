import { useState, createContext } from "react";

export const CartContext = createContext();

export const  CartProvider = ({ children }) => {
    const [items, setItems] = useState([])

    const cartItems = () => {
        return items.length
    }

    const addItem = (producto, qty) => {
        setItems([...items, {qty: qty, ...producto}])      
    }

    return (
        <CartContext.Provider value={{ items, cartItems, addItem}}>
            {children}
        </CartContext.Provider>
    )

}