import './CInput.scss';

export const CInput = ({
    type,
    name,
    id,
    placeholder
}) => {
    return (
        <input className='form__input' type={type} name={name} id={id} placeholder={placeholder}/>
    )
}
