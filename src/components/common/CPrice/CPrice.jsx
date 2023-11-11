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
                    ? <p>{Math.floor(price)}</p>
                    : <p>{Math.floor(initialPrice)}</p>
            }
        </div>
    )
}
