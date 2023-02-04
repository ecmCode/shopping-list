import ListItem from "./ListItem";
import style from "./List.module.css"
const List = () => {
    return ( 
        <div>
            <div className={style.title}>
                Shopping list
            </div>
            <ListItem />
            <ListItem />
            <ListItem />
        </div>
     );
}
 
export default List;