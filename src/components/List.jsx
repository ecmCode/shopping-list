import { useState } from "react";
import db from "../db/db.json";
import ListItem from "./ListItem";
import style from "./List.module.css"
import Footer from "./Footer";

const List = () => {

    const [data,setData] = useState(db.data)
    
    return ( 
        <div className={style.list}>
            <div className={style.title}>
                Shopping list
            </div>
            <div className={style.listItems}>
                {
                    data.map((data, index) => {    
                        data.id = crypto.randomUUID()
                        return (
                            <ListItem 
                            key={"listitem-" + data.id} 
                            data={data} 
                            index={index+1} 
                            setData={setData}/>
                        )}
                    )
                }
            </div>
            <Footer data={data}/>
        </div>
     );
}
 
export default List;