import { MainImage } from '../MainImage/MainImage';
import { CImageConrainer } from '../common/CImageConrainer/CImageConrainer';
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
                            ? product.images.map(x => <CImageConrainer key={Math.random()} image={x} />)
                            : null
                    }
                    <CTransparentEffect />
                </div>
            </article>

            <article className='current__product__information'>
                asdasd
            </article>
        </section>
    )
}
