import { createContext, useState } from "react";

export const TotalPriceContext = createContext();

export const TotalPriceProvider = ({ children }) => {

    const [initialPrice, setInitialPrice] = useState([])
    const [totalPrice, setTotalPrice] = useState(0);

    const setStartPrice = (price) => {
        setInitialPrice(initialPrice.push(price));
        let amount = initialPrice.reduce((acc, num) => acc + num, 0);
        setTotalPrice(amount);
        setInitialPrice([]);
    }

    const increaseTotalPrice = (price) => {
        setTotalPrice(totalPrice + price);
    }

    const decreaseTotalPrice = (price) => {
        setTotalPrice(totalPrice - price);
    }

    const resetPrice = () => {
        setTotalPrice(0);
    }

    return (
        <TotalPriceContext.Provider value={{ totalPrice, setStartPrice, increaseTotalPrice, decreaseTotalPrice,resetPrice }}>
            {children}
        </TotalPriceContext.Provider>
    )

}