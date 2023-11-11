import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cartData, setCartData] = useState([
        {
            images: ["https://cdn.sportdepot.bg/files/products/33978-419_01.jpg",],
            model: "HELLY HANSEN 911 W HH",
            size: ["S"],
            colors: ["green"],
            price: 84
        },
        {
            images: ["https://cdn.sportdepot.bg/files/products/3026128-002_01.jpg",],
            model: "UNDER ARMOUR Sonic X",
            size: ["37"],
            colors: ["black"],
            price: 112
        }
    ]);

    const addItem = (newItem) => {
        setCartData([newItem, ...cartData]);
    }

    const removeItem = () => {

    }

    return (
        <CartContext.Provider value={{ cartData, addItem, removeItem }}>
            {children}
        </CartContext.Provider>
    )

}