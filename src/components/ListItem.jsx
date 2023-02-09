import style from "./ListItem.module.css"


const ListItem = ({ index, data }) => {
    return (
        <div className={style.listItem}>
            {index}. {data.item} {data.price}
        </div>
    );
}
 
export default ListItem;