import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './Cart.scss';
import { Link, NavLink } from 'react-router-dom';
import { CCartCard } from '../common/CCartCard/CCartCard';

export const Cart = () => {
    const { isCartShowen, cartData} = useContext(CartContext);
    if (isCartShowen) return null;

    return (
        <div className='cart__wrapper'>
            <section className='cart'>
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
                    {cartData.map(x=><CCartCard key={x.model} item={x}/>)}
                </article>

            </section>
        </div>
    )
}
