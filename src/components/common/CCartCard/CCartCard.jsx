import React, { useState } from 'react';
import { CColorRadio } from '../CColorRadio/CColorRadio';
import { CCartItemCount } from '../CCartItemCount/CCartItemCount';
import { CPrice } from '../CPrice/CPrice';
import {FaXmark} from 'react-icons/fa6'
import './CCartCard.scss';

export const CCartCard = ({
    item
}) => {

    const [count, setCount] = useState(1);

    const increaseHandler = () => {

    }

    const decreaseHandler = () => {

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
                        <CColorRadio color={item.colors[0]} />
                    </div>
                </div>
            </div>
            <CCartItemCount count={count} increase={increaseHandler} decrease={decreaseHandler} />
            <CPrice initialPrice={item.price} price={item.price}/>
            <FaXmark/>
        </article>
    )
}
