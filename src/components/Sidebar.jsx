import { useState, useRef } from "react";
import style from "./Sidebar.module.css"

const Sidebar = ({data, setData,filter,setFilter}) => {
    const [item,setItem] = useState(null)
    const [price,setPrice] = useState(null)

    const inputItemRef = useRef(null);
    const inputPriceRef = useRef(null);

    const handleAdd = () => {
        if(item.trim() != '' && price.trim() != ''){
            if(Number(price) > 0){
                setData([...data,{item: item, complete:false, price: Number(price)}])
            }
        }
        setItem(null)
        setPrice(null)
        inputItemRef.current.value = ''
        inputPriceRef.current.value = ''
    }

    const handleClear = () => {
        setData([])
        setItem(null)
        setPrice(null)
        inputItemRef.current.value = ''
        inputPriceRef.current.value = ''
    }

    const handleFilter = (id) => {
        setFilter(id)
    }
    
    return ( 
        <div className={style.sidebar}>
            <div className={style.input}>
                <span>
                    <label htmlFor="item">Item</label>
                    <input 
                    ref={inputItemRef}
                    id="item" 
                    name="item" 
                    type="text" 
                    value={item}
                    onChange={(e) => setItem(e.target.value)}
                    />
                </span>
                <span>
                    <label htmlFor="price">Price</label>
                    <input 
                    ref={inputPriceRef}
                    id="price" 
                    name="price" 
                    type="text" 
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    />
                </span>        
            </div>

            <div className={style.btns}>
                <button 
                onClick={handleAdd}
                className={style.addbtn}>
                    Add
                </button>
                <button 
                onClick={handleClear}
                className={style.clearbtn}>
                    Clear
                </button>
            </div>

            <div className={style.filter}>
                <button
                id="all"
                onClick={(e) => handleFilter(e.target.id)}
                className={style.filter}>
                    All
                </button>
                <button
                id="completed" 
                onClick={(e) => handleFilter(e.target.id)}
                className={style.filter}>
                    Completed
                </button>
                <button
                id="pending" 
                onClick={(e) => handleFilter(e.target.id)}
                className={style.filter}>
                    Pending
                </button>
            </div>

        </div>
     );
}
 
export default Sidebar;