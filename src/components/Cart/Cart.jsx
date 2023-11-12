import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { CCartCard } from '../common/CCartCard/CCartCard';
import { CFormButton } from '../common/CFormButton/CFormButton';
import './Cart.scss';

export const Cart = () => {
    const { isCartShowen, cartData ,hideCart} = useContext(CartContext);
    if (!isCartShowen) return null;

    const toShopHandler = () => {
        hideCart()
    }

    const continueHandler = () => {

    }

    return (
        <div className='cart__wrapper' onClick={hideCart}>
            <section className='cart' onClick={(e)=>e.stopPropagation()}>
                <article className='cart__header'>
                    <ul>
                        <li>
                            <Link className='link__active' to={'/'}>Cart</Link>
                        </li>
                        <li>
                            <Link to={'#'}>Checkout</Link>
                        </li>
                        <li>
                            <Link to={'#'}>Shipping</Link>
                        </li>
                        <li>
                            <Link to={'#'}>Done</Link>
                        </li>
                    </ul>
                </article>

                <article className='cart__cards'>
                    {cartData.map(x => <CCartCard key={Math.random()} item={x} />)}
                </article>

                <article className='cart__total__price'>
                    <h2>Total amount</h2>
                </article>

                <div className='cart__buttons__wrapper'>
                    <CFormButton title={'To shop'} clickHandler={toShopHandler} />
                    <CFormButton title={'Continue'} clickHandler={continueHandler} />
                </div>
            </section>
        </div>
    )
}
