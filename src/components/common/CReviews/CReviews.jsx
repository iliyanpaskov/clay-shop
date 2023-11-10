import { starsCount } from '../../../utils/utils';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import './CReviews.scss';

export const CReviews = ({
    reviews
}) => {
    let stars;
    if (reviews) {
        stars = starsCount(reviews);
    }

    return (
        <section className='current__product__information__reviews'>
            <div>
                {
                    stars
                        ? <>
                            {
                                stars.map((x) => x === 1 ? <BsStarFill key={Math.random()} /> : null)
                            }
                            {
                                stars.map(x => x === 0.5 ? <BsStarHalf key={Math.random()} /> : null)
                            }
                            {
                                stars.map(x => x === 0 ? <BsStar key={Math.random()} /> : null)
                            }
                        </>
                        : null
                }
            </div>
            <span>{reviews?.length} reviews</span>
        </section>
    )
}
