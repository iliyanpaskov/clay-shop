import { useContext } from 'react';
import { TotalPriceContext } from '../../../context/TotalPriceContext';
import './CTotalOrderPrice.scss';
import { CPrice } from '../CPrice/CPrice';

export const CTotalOrderPrice = () => {

    const { totalPrice } = useContext(TotalPriceContext);

    return (
        <article className='cart__total__price'>
            <div className='cart__total__price__content'>
                <h2>Total amount: </h2>
                <CPrice initialPrice={totalPrice} price={totalPrice} />
            </div>
        </article>
    )
}
