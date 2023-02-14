import style from "./Footer.module.css"

const Footer = ({data}) => {
    return ( 
        <div className={style.footer}>
            <div>
                Items: {data.length}
            </div>
            <div>
                Total: {data.reduce((total,item) => {
                    return total + item.price
                },0)}
            </div>
        </div>
    );
}
 
export default Footer;