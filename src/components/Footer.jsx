import style from "./Footer.module.css"

const Footer = ({data}) => {
    let total = 0
    data.forEach(i => total += i.price)
    return ( 
        <div className={style.footer}>
            <div>
                Items: {data.length}
            </div>
            <div>
                Total: {total}
            </div>
        </div>
     );
}
 
export default Footer;