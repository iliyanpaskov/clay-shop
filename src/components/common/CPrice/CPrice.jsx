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
                    ? <p>{Math.floor(Number(price)).toString()}</p>
                    : <p>{Math.floor(Number(initialPrice)).toString()}</p>
            }
        </div>
    )
}
