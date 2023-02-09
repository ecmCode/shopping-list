import style from "./ListItem.module.css"
import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im';
import { FaTrash } from 'react-icons/fa'

const ListItem = ({ index, data, setDatabase}) => {
    
    const handleComplete = (id) => {
        console.log(id)
    }

    const handleDelete = (id) => {
        console.log(id)  
    }

    // const handleComplete = (id) => {
    //     const updated = database.map((data) => {
    //       if(data.id === id){
    //         data.complete = !data.complete;
    //       }
    //       return data;
    //     })
    //     setDatabase(updated)
        
    //   }
    
    //   const handleDelete = (id) => {
    //     const newDatabase = database.filter((data) => data.id != id)
    //     setDatabase(newTodo)    
    //   }

    return (
        <div className={style.listItem}>
            <span className={style.data}>
                <span className={style.checkbox} onClick={() => handleComplete(data)}>
                    {
                        data.complete
                        ? <ImCheckboxChecked/>
                        : <ImCheckboxUnchecked/>
                    }
                </span>
                {index}. {data.item} {data.price}
            </span>
            <span onClick={() => handleDelete(data)}>
                <FaTrash/>
            </span>
        </div>
    );
}
 
export default ListItem;