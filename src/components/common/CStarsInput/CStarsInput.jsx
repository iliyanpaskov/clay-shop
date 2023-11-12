import { useState } from 'react';
import { BsStarFill } from 'react-icons/bs';
import './CStarsInput.scss';

export const CStarsInput = () => {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    return (
        <div className='stars__radio__input__wrapper'>
            {[...Array(5)].map((stars, index) => {
                const currentRating = index + 1;
                return (


                    <label htmlFor={`${currentRating}`} key={Math.random()}>

                        <input
                            type="radio"
                            name='stars'
                            id={`${currentRating}`}
                            value={currentRating}
                            onClick={() => setRating(currentRating)}
                        />
                        <BsStarFill
                            color={currentRating <= (hover || rating) ? '#EDA3B5' : '#8E8E93'}
                            onMouseEnter={() => setHover(currentRating)}
                            onMouseLeave={() => setHover(0)}
                        />
                        <label key={Math.random()}>
                            <input type="number" name="star" defaultValue={rating} />
                        </label>
                    </label>


                )
            })}
        </div>
    )
}
