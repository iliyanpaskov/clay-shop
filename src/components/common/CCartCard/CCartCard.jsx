import React, { useContext, useState } from 'react';
import { CartContext } from '../../../context/CartContext';
import { CColorRadio } from '../CColorRadio/CColorRadio';
import { CCartItemCount } from '../CCartItemCount/CCartItemCount';
import { CPrice } from '../CPrice/CPrice';
import { CRemoveItemButton } from '../CRemoveItemButton/CRemoveItemButton';
import './CCartCard.scss';

export const CCartCard = ({
    item
}) => {

    const [count, setCount] = useState(1);
    const { removeItem } = useContext(CartContext);

    const removeItemHandler = (e) => {
        removeItem(e.currentTarget.value);
    }

    const increaseHandler = () => {
        if (count < 5) {
            setCount(count + 1);
        }
    }

    const decreaseHandler = () => {
        if (count > 1) {
            setCount(count - 1);
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
