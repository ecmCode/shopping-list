import style from "./ListItem.module.css"
import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im';
import { FaTrash } from 'react-icons/fa'

const ListItem = ({ index, data, setData}) => {
    
    const handleComplete = (id) => {
        setData((items) => items.map(i => {
            if(i.id == id){
                i.complete = !i.complete
            }
            return i
        }))
    }

    const handleDelete = (id) => {
        setData((items) => items.filter(i => i.id != id ))
    }

    return (
        <div className={style.listItem}>
            <span className={style.data}>
                <span className={style.checkbox} onClick={() => handleComplete(data.id)}>
                    {
                        data.complete
                        ? <ImCheckboxChecked/>
                        : <ImCheckboxUnchecked/>
                    }
                </span>
                {index}. {data.item} {data.price}
            </span>
            <span onClick={() => handleDelete(data.id)}>
                <FaTrash/>
            </span>
        </div>
    );
}
 
export default ListItem;