import { CSize } from '../common/CSize/CSize';
import './OrderProduct.scss';

export const OrderProduct = ({
    product
}) => {
    return (
        <section className='order__product'>
            <form className='order__product__form'>
                <div >
                    <article className='order__product__form__sizes'>
                        <section className='order__product__form__sizes__text'>
                            <span>size</span>
                            <span>size guide</span>
                        </section>
                        <section className='order__product__form__sizes__values'>
                            {
                                product.size
                                    ? product.size.map(x => <CSize size={x} key={x} />)
                                    : null
                            }
                        </section>
                    </article>
                    <article className='order__product__form__color'>

                    </article>
                </div>
                <div >

                </div>
            </form>
        </section>
    )
}
