import style from "./ListItem.module.css"
import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im';
import { FaTrash } from 'react-icons/fa'

const ListItem = ({ index, data }) => {
    return (
        <div className={style.listItem}>
            <span className={style.data}>
                <span className={style.checkbox}>
                    <ImCheckboxChecked/>
                    <ImCheckboxUnchecked/>
                </span>
                {index}. {data.item} {data.price}
            </span>
            <span>
                <FaTrash/>
            </span>
        </div>
    );
}
 
export default ListItem;