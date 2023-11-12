import { FaXmark } from 'react-icons/fa6'
import './CRemoveItemButton.scss';

export const CRemoveItemButton = ({
    id,
    removeItemHandler
}) => {
    return (
        <label className='remove__cart__item__button'>
            <input type="text" defaultValue={id} onClick={removeItemHandler} />
            <FaXmark />
        </label>
    )
}
