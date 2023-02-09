import style from "./ListItem.module.css"


const ListItem = ({ data }) => {
    return (
        <div className={style.listItem}>
            {data.item} {data.price}
        </div>
    );
}
 
export default ListItem;