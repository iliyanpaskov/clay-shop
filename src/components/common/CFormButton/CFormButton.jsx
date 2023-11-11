import './CFormButton.scss';

export const CFormButton = ({
    title,
    clickHandler
}) => {
    return (
        <button className='form__button' onClick={clickHandler}>{title}</button>
    )
}
