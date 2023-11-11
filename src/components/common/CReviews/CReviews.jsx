import { useContext } from 'react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { starsCount } from '../../../utils/utils';
import { CommentsContext } from '../../../context/CommentsContext';
import './CReviews.scss';

export const CReviews = () => {

    const {commentsData} = useContext(CommentsContext);

    let stars;
    if (commentsData) {
        stars = starsCount(commentsData);
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
            <span>{110 + commentsData?.length} reviews</span>
        </section>
    )
}
