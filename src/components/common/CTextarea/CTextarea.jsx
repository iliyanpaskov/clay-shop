import './CTextarea.scss';

export const CTextarea = ({
id,
name,
placeholder
}) => {
  return (
    <textarea className='form__textarea' id={id} name={name} placeholder={placeholder}></textarea>
  )
}
