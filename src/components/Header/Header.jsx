import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

export const Header = () => {

    const [isActive, setIsActive] = useState(false);

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
                    <img src="/icons/search.svg" alt="facebook" />
                    <img src="/icons/cart.svg" alt="facebook" />

                </article>
            </section>

            <section className='header__bottom'>
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
            </section>

        </header>
    )
}
