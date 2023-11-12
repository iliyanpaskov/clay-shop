import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import './Header.scss';

export const Header = () => {

    const {cartData,showCart} = useContext(CartContext);

    return (
        <header className='header'>

            <section className='header__top'>
                <article className='header__top__logo'>
                    <img src="/icons/clay_shop_logo.svg" alt="logo" />
                </article>
                <article className='header__top__social__icons'>
                    <img src="/icons/instagram.svg" alt="instagram" />
                    <img src="/icons/twitter.svg" alt="twitter" />
                    <img src="/icons/facebook.svg" alt="facebook" />
                </article>
                <article className='header__top__icons'>
                    <div>
                        <img src="/icons/search.svg" alt="facebook" />
                    </div>
                    <div>
                        <img src="/icons/cart.svg" alt="facebook" onClick={showCart}/>
                        <p className='header__top__icons__cart__count'>{cartData.length}</p>
                    </div>
                </article>
            </section>

            <nav className='header__nav'>
                <ul>
                    <li>
                        <NavLink to='#'>home</NavLink>
                    </li>
                    <li>
                        <NavLink to='#'>shop</NavLink>
                    </li>
                    <li>
                        <NavLink to='#'>blog</NavLink>
                    </li>
                    <li>
                        <NavLink to='#'>contact</NavLink>
                    </li>
                </ul>
            </nav>

        </header>
    )
}
