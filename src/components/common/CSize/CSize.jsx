import React from 'react';
import './CSize.scss';

export const CSize = ({
    size
}) => {
    return (
        <div className='size__radio'>
            <label >
                <input type="radio" id={size} name="size" value={size} />
                <span className='checkmark'>{size}</span>
                <p >{size}</p>
            </label>
        </div>
    )
}
