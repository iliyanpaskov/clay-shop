import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { CCartCard } from '../common/CCartCard/CCartCard';
import { CFormButton } from '../common/CFormButton/CFormButton';
import { CEmptyCartMessage } from '../common/CEmptyCartMessage/CEmptyCartMessage';
import { CTotalOrderPrice } from '../common/CTotalOrderPrice/CTotalOrderPrice';
import { successNotification } from '../../services/notificationServices';
import './Cart.scss';

export const Cart = () => {

    const { isCartShowen, cartData, hideCart,emptyCart } = useContext(CartContext);
    if (!isCartShowen) return null;

    const toShopHandler = () => {
        hideCart();
    }
    
    const continueHandler = () => {
        hideCart();
        successNotification('You order accepted !!!');
        emptyCart();
    }

    return (
        <div className='cart__wrapper' onClick={toShopHandler}>
            <section className='cart' onClick={(e) => e.stopPropagation()}>
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
                    {
                        cartData.length > 0
                            ? <>
                                {cartData.map(x => <CCartCard key={Math.random()} item={x} />)}
                            </>
                            : <CEmptyCartMessage />
                    }

                </article>

                <CTotalOrderPrice/>

                <div className='cart__buttons__wrapper'>
                    <CFormButton title={'To shop'} clickHandler={toShopHandler} />
                    <CFormButton title={'Continue'} clickHandler={continueHandler} />
                </div>
            </section>
        </div>
    )
}
