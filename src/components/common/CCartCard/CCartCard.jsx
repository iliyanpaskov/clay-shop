import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../../context/CartContext';
import { CColorRadio } from '../CColorRadio/CColorRadio';
import { CCartItemCount } from '../CCartItemCount/CCartItemCount';
import { CPrice } from '../CPrice/CPrice';
import { CRemoveItemButton } from '../CRemoveItemButton/CRemoveItemButton';
import { TotalPriceContext } from '../../../context/TotalPriceContext';
import './CCartCard.scss';

export const CCartCard = ({
    item
}) => {

    const [count, setCount] = useState(1);
    const [amount, setAmount] = useState(item.price)
    const { removeItem } = useContext(CartContext);
    const {setStartPrice, increaseTotalPrice ,decreaseTotalPrice} = useContext(TotalPriceContext);

    useEffect(()=>{
     setStartPrice(item.price)
    },[])


    const removeItemHandler = (e) => {
        removeItem(e.currentTarget.value);
    }

    const increaseHandler = () => {
        if (count < 5) {
            setCount(count + 1);
            setAmount(item.price);
            increaseTotalPrice(amount)
        }
    }

    const decreaseHandler = () => {
        if (count > 1) {
            setCount(count - 1);
            setAmount(item.price);
            decreaseTotalPrice(amount);
        }
    }

    return (
        <article className='cart__card'>
            <div className='cart__card__item__wrapper'>
                <div className='cart__card__image'>
                    <img src={item.images[0]} alt="" />
                </div>
                <div className='cart__card__item__props'>
                    <h2>{item.model}</h2>
                    <p>Size <span>{item.size}</span></p>
                    <div>
                        <p>Color</p>
                        <CColorRadio color={item.colors} />
                    </div>
                </div>
            </div>
            <CCartItemCount count={count} increase={increaseHandler} decrease={decreaseHandler} />
            <CPrice initialPrice={item.price * count} price={item.price * count} />
            <CRemoveItemButton id={item.objectId} removeItemHandler={removeItemHandler} />
        </article>
    )
}
