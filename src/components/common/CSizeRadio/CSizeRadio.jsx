import React from 'react';
import './CSizeRadio.scss';

export const CSizeRadio = ({
    size,
    handler
}) => {
    return (
        <div className='size__radio'>
            <label >
                <input type="radio" id={size} name="size" value={size} onClick={handler} />
                <span className='checkmark'>{size}</span>
                <p >{size}</p>
            </label>
        </div>
    )
}
