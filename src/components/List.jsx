import { useState } from "react";
import db from "../db/db.json";
import ListItem from "./ListItem";
import style from "./List.module.css"

const List = () => {

    const [database,setDatabase] = useState(db.data)
    return ( 
        <div className={style.list}>
            <div className={style.title}>
                Shopping list
            </div>
            <div className={style.listItems}>
                {
                    database.map((data, index) => (
                        <ListItem 
                        key={crypto.randomUUID()} 
                        data={data} 
                        index={index+1} 
                        setDatabase={setDatabase}/>
                    ))
                }
                
            </div>
            
        </div>
     );
}
 
export default List;