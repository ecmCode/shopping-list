import { useState } from "react";
import db from "../db/db.json";
import ListItem from "./ListItem";
import style from "./List.module.css"
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const List = () => {

    const [data,setData] = useState(db.data)
    const [filter, setFilter] = useState('all')
    
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
                                filter !== "all"
                                
                                ? filter == 'pending'
                                    ? !item.complete &&
                                        <ListItem 
                                        key={`listitem-${Math.floor(Math.random() * 10000)}`}
                                        data={item} 
                                        index={index+1} 
                                        setData={setData}/>
                                    : item.complete &&
                                        <ListItem 
                                        key={`listitem-${Math.floor(Math.random() * 10000)}`}
                                        data={item} 
                                        index={index+1} 
                                        setData={setData}/>
                                :
                                    <ListItem 
                                    key={`listitem-${Math.floor(Math.random() * 10000)}`}
                                    data={item} 
                                    index={index+1} 
                                    setData={setData}/>
                            )}
                        )
                    }
                </div>
                <Sidebar data={data} setData={setData} filter={filter} setFilter={setFilter}/>
            </div>
            <Footer data={data}/>
        </div>
     );
}
 
export default List;