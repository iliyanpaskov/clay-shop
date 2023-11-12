import { Link, NavLink } from 'react-router-dom';
import './Footer.scss';

export const Footer = () => {
    return (
        <footer className='footer'>

            <nav className='footer__nav'>
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

            <section className='footer__lists'>
                <article className='one'>
                    <img src="/icons/clay_shop_logo.svg" alt="logo" />
                    <p>
                        Fashion is a popular
                        aesthetic expression at a particular time, place and in a specific context,
                        especially in clothing, footwear, lifestyle, accessories, makeup.
                    </p>
                </article>

                <article className='two'>
                    <h3>Hot links</h3>
                    <ul>
                        <li>
                            <Link>Home</Link>
                        </li>
                        <li>
                            <Link>Shop</Link>
                        </li>
                        <li>
                            <Link>Blog</Link>
                        </li>
                        <li>
                            <Link>Contacts</Link>
                        </li>
                    </ul>
                </article>

                <article className='three'>
                    <h3>More info</h3>
                    <ul>
                        <li>
                            <Link>How it works</Link>
                        </li>
                        <li>
                            <Link>About us</Link>
                        </li>
                        <li>
                            <Link>Decline rules</Link>
                        </li>
                        <li>
                            <Link>Terms & Conditions</Link>
                        </li>
                    </ul>
                </article>
                <article className='four'>
                    <h3>Customer care</h3>
                    <ul>
                        <li>
                            <Link>FAQ</Link>
                        </li>
                        <li>
                            <Link>Terms of use</Link>
                        </li>
                        <li>
                            <Link>Privacy Policy</Link>
                        </li>
                        <li>
                            <Link>Discount system</Link>
                        </li>
                    </ul>
                </article>

            </section>

            <section className='footer__bottom'>
                <p>© Clay Shop all rights reserved</p>
                <div>
                    <img src="/icons/instagram.svg" alt="instagram" />
                    <img src="/icons/twitter.svg" alt="twitter" />
                    <img src="/icons/facebook.svg" alt="facebook" />
                </div>
            </section>
        </footer>
    )
}
