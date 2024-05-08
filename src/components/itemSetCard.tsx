import { Link } from "react-router-dom";
import { ItemSetInterface } from "../interfaces/itemSetInterface"
import styles from "./itemSetCard.module.css";

export const ItemSetCard = (props: {itemSet:ItemSetInterface, displayDelete:boolean, deleteFunc:any}) => {

    const {itemSet, displayDelete, deleteFunc} = props

    return (
    <div className={styles.cardWrapper}>
        {displayDelete && <button className={styles.deletionButton} onClick={()=> {deleteFunc(itemSet)}}> Delete </button>}
        <Link to={"/set/" + itemSet.setNameUrl} className={styles.cardLink}>
            <p> {itemSet.setItemUrls.length} </p>
            <h3> {itemSet.setName} </h3>
            <p> {itemSet.setDescription} </p>
        </Link>
    </div>
    );
}