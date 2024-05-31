
import button from "../styles/button.module.css";

export const Button = (onClickEvent:any) => {
    return <button className={button.small} onClick={onClickEvent}></button>
}