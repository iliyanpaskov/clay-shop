import {useState} from 'react';
import { CChangeImageArrows } from '../common/CChangeImageArrows/CChangeImageArrows';
import './MainImage.scss';

export const MainImage = ({
    product
}) => {

    const [imageIndex, setImageIndex] = useState(0);

    const nextImageHandler = () => {
        if (imageIndex > 0) {
            setImageIndex(imageIndex - 1)
        } else {
            setImageIndex(4);
        }
    }

    const previousImageHandler = () => {
        if (imageIndex < product.images.length - 1) {
            setImageIndex(imageIndex + 1)
        } else {
            setImageIndex(0);
        }
    }

    return (
        <div className='main__image__frame'>
            {
                product.images
                    ? <img src={product.images[imageIndex]} alt="" />
                    : null
            }
            <CChangeImageArrows showNextImage={nextImageHandler} showPreviousImage={previousImageHandler} />
        </div>
    )
}
