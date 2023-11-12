import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [isCartShowen, setIsCartShowen] = useState(false);
    const [cartData, setCartData] = useState([
        {
            objectId: '1',
            images: ["https://cdn.sportdepot.bg/files/products/33978-419_01.jpg",],
            model: "HELLY HANSEN 911 W HH",
            size: "S",
            colors: "green",
            price: 84,
            count: 1
        },
        {
            objectId: '2',
            images: ["https://cdn.sportdepot.bg/files/products/3026128-002_01.jpg",],
            model: "UNDER ARMOUR Sonic X",
            size: ["37"],
            colors: ["black"],
            price: 112,
            count: 1
        }
    ]);

    const addItem = (newItem) => {
        setCartData([newItem, ...cartData]);
    }

    const removeItem = (id) => {
        const arr = cartData.filter((x) => x.objectId !== id);
        setCartData([...arr]);
    }

    const showCart = () => {
        setIsCartShowen(true);
    }

    const hideCart = () => {
        setIsCartShowen(false);
    }

    return (
        <CartContext.Provider value={{ cartData, addItem, removeItem, isCartShowen, showCart, hideCart }}>
            {children}
        </CartContext.Provider>
    )

}