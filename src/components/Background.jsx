import style from "./Background.module.css"

const Background = ({children}) => {
    return (
        <div className={style.background}>
            <div className={style.banner}></div>
            {children}
        </div>
    );
}
 
export default Background;