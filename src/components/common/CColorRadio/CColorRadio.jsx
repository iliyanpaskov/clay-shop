import React from 'react';
import './CColorRadio.scss';

export const CColorRadio = ({
    color,
    handler
}) => {
    return (
        <div className='color__radio'>
            <label >
                <input type="radio" id={color} name="color" value={color} onClick={handler}/>
                <p style={{background:`${color}`}} className='color__checkmark'></p>
            </label>
        </div>
    )
}
