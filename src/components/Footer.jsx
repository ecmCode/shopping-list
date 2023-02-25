import style from "./Footer.module.css"

const Footer = ({data}) => {
    return ( 
        <div className={style.footer}>
            <span>
                Items: {data.length}
            </span>
            <span>
                Complete: {
                    data.reduce((completeItems,item) => {
                        return completeItems + item.complete
                    },0)
                }
            </span>
            <span>
                Total: {
                    data.reduce((total,item) => {
                        return total + item.price
                    },0)
                }
            </span>
        </div>
    );
}
 
export default Footer;