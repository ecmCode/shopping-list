import { useState } from "react";
import db from "../db/db.json";
import ListItem from "./ListItem";
import style from "./List.module.css"
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const List = () => {

    const [data,setData] = useState(db.data)
    
    return ( 
        <div className={style.list}>
            <div className={style.title}>
                Shopping list
            </div>
            <div className={style.container}>
                <div className={style.listItems}>
                    {
                        data.map((item, index) => {    
                            item.id = crypto.randomUUID()
                            return (
                                <ListItem 
                                key={`listitem-${new Date().getTime()}-${Math.floor(Math.random() * 1000000)}`}
                                // key={"listitem-" + item.id} 
                                data={item} 
                                index={index+1} 
                                setData={setData}/>
                            )}
                        )
                    }
                </div>
                <Sidebar data={data} setData={setData}/>
            </div>
            <Footer data={data}/>
        </div>
     );
}
 
export default List;