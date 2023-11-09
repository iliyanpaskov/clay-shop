import { useEffect, useState } from 'react';
import './ProductPage.scss';
import { getSingleProduct } from '../../services/productsServices/productsServices';
import { CurrentProduct } from '../../components/CurrentProduct/CurrentProduct';

export const ProductPage = () => {

    const [currentProduct, setCurrentProduct] = useState({})

    useEffect(() => {
        const getProduct = async () => {
            const product = await getSingleProduct('e9J9Br3WZ3');
            setCurrentProduct(product.data)
        }
        getProduct();

    }, []);

    return (
        <section className='product__page'>
            <article className='product__page__current__product'>
                <CurrentProduct product={currentProduct}/>
            </article>
            <article className='product__page__review'></article>
        </section>
    )
}
