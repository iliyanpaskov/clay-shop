import React from 'react';
import './CPopularity.scss';

export const CPopularity = ({
    popularity
}) => {
  return (
    <button className='show__popularity'>{popularity}</button>
  )
}
