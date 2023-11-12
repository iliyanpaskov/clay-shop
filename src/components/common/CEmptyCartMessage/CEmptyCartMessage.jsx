import './CEmptyCartMessage.scss';

export const CEmptyCartMessage = () => {
    return (
        <article className='empty__cart__message'>
            <div className='empty__cart__message__image__wrapper'>
                <img src="/empty-cart.png" alt="" />
            </div>
            <h2>you cart is empty !<br /><span>Let's start shopping !</span></h2>
        </article>
    )
}
