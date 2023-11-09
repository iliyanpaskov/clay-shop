import { MainImage } from '../MainImage/MainImage';
import { CImageConrainer } from '../common/CImageConrainer/CImageConrainer';
import { CPopularity } from '../common/CPopularity/CPopularity';
import { CTransparentEffect } from '../common/CTransparentEffect/CTransparentEffect';
import './CurrentProduct.scss';

export const CurrentProduct = ({
    product
}) => {

    return (
        <section className='current__product'>
            <article className='current__product__images__wrapper'>
                <MainImage product={product}/>
                <div className='current__product__all__images'>
                    {
                        product.images
                            ? product.images.map((x,index) => <CImageConrainer key={index} image={x}/>)
                            : null
                    }
                    <CTransparentEffect />
                </div>
            </article>

            <article className='current__product__information'>
                <section className='current__product__information__popularity' >
                    <CPopularity popularity={product.popularity}/>
                </section>
            </article>
        </section>
    )
}
