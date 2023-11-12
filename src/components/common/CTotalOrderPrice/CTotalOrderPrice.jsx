import { useContext } from 'react';
import { TotalPriceContext } from '../../../context/TotalPriceContext';
import { CPrice } from '../CPrice/CPrice';
import { CartContext } from '../../../context/CartContext';
import './CTotalOrderPrice.scss';

export const CTotalOrderPrice = () => {

    const { cartData } = useContext(CartContext);
    const { totalPrice, resetPrice } = useContext(TotalPriceContext);

    if (cartData.length < 1) {
        resetPrice();
    }

    return (
        <article className='cart__total__price'>
            <div className='cart__total__price__content'>
                <h2>Total amount: </h2>
                <CPrice initialPrice={totalPrice} price={totalPrice} />
            </div>
        </article>
    )
}
