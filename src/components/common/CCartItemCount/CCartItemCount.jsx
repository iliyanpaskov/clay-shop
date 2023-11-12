import { CiSquareMinus, CiSquarePlus } from 'react-icons/ci'
import './CCartItemCount.scss';

export const CCartItemCount = ({
    count,
    increase,
    decrease
}) => {
    return (
        <div className='cart__items__count'>
            <CiSquareMinus onClick={decrease} />
            <p>{count}</p>
            <CiSquarePlus onClick={increase} />
        </div>
    )
}
