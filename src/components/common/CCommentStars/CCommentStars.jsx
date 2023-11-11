import { starsCountToArray } from '../../../utils/utils';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import './CCommentStars.scss';

export const CCommentStars = ({
    count
}) => {
    let stars;
    if (count) {
        stars = starsCountToArray(count);
    }

    return (
        <section className='comment__stars'>
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
        </section>
    )
}
