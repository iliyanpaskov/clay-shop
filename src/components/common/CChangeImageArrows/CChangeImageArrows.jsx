import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'
import './CChangeImageArrows.scss';

export const CChangeImageArrows = ({
    showNextImage,
    showPreviousImage
}) => {
  return (
    <div className='change__image__arrows'>
        <AiOutlineLeft onClick={showNextImage}/>
        <AiOutlineRight onClick={showPreviousImage}/>
    </div>
  )
}
