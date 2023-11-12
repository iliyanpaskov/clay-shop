import { Cart } from '../Cart/Cart';
import { MainImage } from '../MainImage/MainImage';
import { OrderProduct } from '../OrderProduct/OrderProduct';
import { CHeart } from '../common/CHeart/CHeart';
import { CImageConrainer } from '../common/CImageConrainer/CImageConrainer';
import { CPopularity } from '../common/CPopularity/CPopularity';
import { CProductInformation } from '../common/CProductInformation/CProductInformation';
import { CReviews } from '../common/CReviews/CReviews';
import { CTransparentEffect } from '../common/CTransparentEffect/CTransparentEffect';
import './CurrentProduct.scss';

export const CurrentProduct = ({
    product
}) => {

    return (
        <>
            <Cart />
            <section className='current__product'>
                <article className='current__product__images__wrapper'>
                    <MainImage product={product} />
                    <div className='current__product__all__images'>
                        {
                            product.images
                                ? product.images.map((x, index) => <CImageConrainer key={index} image={x} />)
                                : null
                        }
                        <CTransparentEffect />
                    </div>
                </article>

                <article className='current__product__information'>
                    <section className='current__product__information__popularity' >
                        <CPopularity popularity={product.popularity} />
                        <CHeart />
                    </section>
                    <h1 className='current__product__information__model'>{product.model}</h1>
                    <CReviews />
                    <CProductInformation product={product} />
                    <OrderProduct product={product} />
                </article>
            </section>
        </>
    )
}
