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
            <div className={style.data}>
                <div className={style.checkbox} onClick={() => handleComplete(data.id)}>
                    {
                        data.complete
                        ? <ImCheckboxChecked className="text-green-700"/>
                        : <ImCheckboxUnchecked/>
                    }
                </div>
                <div className={style.item}>
                    <span>{index}. {data.item}</span>
                    <span className={style.price}>$ {data.price}</span> 
                </div>
            </div>
            <div className={style.delete} onClick={() => handleDelete(data.id)}>
                <FaTrash/>
            </div>
        </div>
    );
}
 
export default ListItem;