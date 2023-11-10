import './CPrice.scss';

export const CPrice = ({
    initialPrice,
    price
}) => {
    return (
        <div className='price__wrapper'>
            <p>$</p>
            {
                price
                    ? <p>{price}</p>
                    : <p>{initialPrice}</p>
            }
        </div>
    )
}
