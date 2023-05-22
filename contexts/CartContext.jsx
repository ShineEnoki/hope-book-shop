import React, { createContext, useState } from 'react'

export const CartContext = createContext();

export const CartContextProvider = ({children}) => {
    const [ cart, setCart ] = useState([]);
    const addBookToCart = (book) => {
        setCart(prev => [...prev, book])
    }
    return (
        <CartContext.Provider value={{cart, addBookToCart}} >
            {children}
        </CartContext.Provider>
    )
}