import './CImageConrainer.scss';

export const CImageConrainer = ({
    image
}) => {
  return (
    <div className='image__container'>
        <img src={image} alt="" />
    </div>
  )
}
