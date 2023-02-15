import { useState } from "react";
import style from "./Sidebar.module.css"

const Sidebar = ({data, setData}) => {
    const [item,setItem] = useState(null)
    const [price,setPrice] = useState(null)
    return ( 
        <div className={style.sidebar}>
            <div className={style.input}>
                <span>
                    <label htmlFor="item">Item</label>
                    <input 
                    id="item" 
                    name="item" 
                    type="text" 
                    value={item}/>
                </span>
                <span>
                    <label htmlFor="price">Price</label>
                    <input 
                    id="price" 
                    name="price" 
                    type="text" 
                    value={price}/>
                </span>        
            </div>

            <div className={style.btns}>
                <button className={style.addbtn}>Add</button>
                <button className={style.clearbtn}>Clear</button>
            </div>

        </div>
     );
}
 
export default Sidebar;