import { useContext, useEffect, useState } from 'react';
import { getSingleProduct } from '../../services/productsServices/productsServices';
import { CurrentProduct } from '../../components/CurrentProduct/CurrentProduct';
import { CurrentProductReview } from '../../components/CurrentProductReview/CurrentProductReview';
import { CommentsContext } from '../../context/CommentsContext';
import './ProductPage.scss';
import { CLoader } from '../../components/common/CLoader/CLoader';

export const ProductPage = () => {

    const [currentProduct, setCurrentProduct] = useState({})
    const { getAllComments, commentsData } = useContext(CommentsContext);

    useEffect(() => {
        const getProduct = async () => {
            const product = await getSingleProduct('e9J9Br3WZ3');
            setCurrentProduct(product.data)
            getAllComments(product.data.reviews);
        }
        getProduct();

    }, []);

    return (

        <section className='product__page'>
            {
                !currentProduct
                    ? <CLoader />
                    : <>
                        <article className='product__page__current__product'>
                            <CurrentProduct product={currentProduct} />
                        </article>
                        <article className='product__page__review'>
                            <CurrentProductReview comments={commentsData} />
                        </article>
                    </>
            }
        </section>
    )
}
