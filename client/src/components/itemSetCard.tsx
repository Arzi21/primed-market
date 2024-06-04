import { Link } from "react-router-dom";
import { ItemSetInterface } from "../interfaces/itemSetInterface"
import styles from "./itemSetCard.module.css";
import animations from "../styles/animations.module.css";

export const ItemSetCard = ({itemSet, displayDelete, deleteFunc}:{itemSet:ItemSetInterface, displayDelete:boolean, deleteFunc:any}) => {


    return (
    <div className={`${styles.cardWrapper} + ${animations.initializedFadeIn}`}>
        {displayDelete && <button className={styles.deletionButton} onClick={()=> {deleteFunc(itemSet)}}> X </button>}
        <Link to={"/set/" + itemSet.setNameUrl} className={styles.cardLink}>
            <p> {itemSet.setItemUrls.length} </p>
            <h3> {itemSet.setName} </h3>
            <p> {itemSet.setDescription} </p>
        </Link>
    </div>
    );
}