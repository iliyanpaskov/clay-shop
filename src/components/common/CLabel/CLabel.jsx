import './CLabel.scss';

export const CLabel = ({
    inputId,
    title
}) => {
  return (
    <label className="form__label" role="input-lable" htmlFor={inputId}>{title}</label>
  )
}
