import { useState } from 'react';
import { CColorRadio } from '../common/CColorRadio/CColorRadio';
import { CSizeRadio } from '../common/CSizeRadio/CSizeRadio';
import './OrderProduct.scss';
import { CPrice } from '../common/CPrice/CPrice';
import { CFormButton } from '../common/CFormButton/CFormButton';

export const OrderProduct = ({
    product
}) => {

    const [size, setSize] = useState('');
    const [color, setColor] = useState('');
    const [price, setPrice] = useState(product.price);

    const sizeHandler = (e) => {
        const [sizeOne,sizeTwo,sizeThree, ...rest] = product.size; 
        if(e.currentTarget.value === sizeOne){
            setPrice(product.price * 0.9);
        }else if (e.currentTarget.value ===  sizeTwo){
            setPrice(product.price * 1.15);
        }else if (e.currentTarget.value === sizeThree){
            setPrice(product.price * 0.8);
        }
        
        setSize(e.currentTarget.value);
    }
    const colorHandler = (e) => {
        const [colorOne, colorTwo, colorThree, ...rest] = product.colors;
        if (e.currentTarget.value === colorOne) {
            setPrice(product.price);
        } else if (e.currentTarget.value === colorTwo) {
            setPrice(product.price * 0.8);
        } else if (e.currentTarget.value === colorThree) {
            setPrice(product.price * 0.945);
        }
        setColor(e.currentTarget.value);
    }


    return (
        <section className='order__product'>
            <form className='order__product__form'>
                <div className='order__product__form__props'>
                    <article className='order__product__form__sizes'>
                        <section className='order__product__form__sizes__text'>
                            <span>size</span>
                            <span>size guide</span>
                        </section>
                        <section className='order__product__form__sizes__values'>
                            {
                                product.size
                                    ? product.size.map(x => <CSizeRadio size={x} key={x} handler={sizeHandler} />)
                                    : null
                            }
                        </section>
                    </article>
                    <article className='order__product__form__color'>
                        <p>color</p>
                        <div>
                            {
                                product.colors
                                    ? product.colors.map(x => <CColorRadio key={x} color={x} handler={colorHandler} />)
                                    : null
                            }
                        </div>
                    </article>
                </div>

                <div className='order__product__form__price__buttons'>
                    <CPrice price={price} initialPrice={product.price} />
                    <CFormButton title={"Shop Now"} />
                    <CFormButton title={"Add to cart"} />
                </div>

            </form>
        </section>
    )
}
