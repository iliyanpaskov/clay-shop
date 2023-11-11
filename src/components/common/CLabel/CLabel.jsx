import './CLabel.scss';

export const CLabel = ({
    inputId,
    title
}) => {
    return (
        <label className="form__label" htmlFor={inputId}>{title}</label>
    )
}
