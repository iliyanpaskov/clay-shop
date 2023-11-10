import { useState } from 'react';
import './CProductInformation.scss';

export const CProductInformation = ({
    product
}) => {
    const [option, setOption] = useState('info');

    const infoHandler = () => {
        setOption('info');
    }
    const brandHandler = () => {
        setOption('brand');
    }
    const deliveryHandler = () => {
        setOption('delivery');
    }

    return (
        <section className='current__product__details'>
            <article className='current__product__details__options'>
                <button className={option === 'info' ? 'option__focus' : null} onClick={infoHandler} >info</button>
                <button className={option === 'brand' ? 'option__focus' : null} onClick={brandHandler} >brand</button>
                <button className={option === 'delivery' ? 'option__focus' : null} onClick={deliveryHandler} >delivery</button>
            </article>
            <article className='current__product__details__content'>
                {
                    product
                        ? <>
                            {option === 'info' ? <p>{product.info}</p> : null}
                            {option === 'brand' ? <p>{product.brand}</p> : null}
                            {option === 'delivery' ? <p>{product.delivery}</p> : null}
                        </>
                        : null
                }
            </article>
        </section>
    )
}
