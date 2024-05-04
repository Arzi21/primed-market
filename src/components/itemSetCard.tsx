import { Link } from "react-router-dom";
import { ItemSetInterface } from "../interfaces/itemSetInterface"
import { DeleteFromLocalStorage } from "../helpers/localStorageCalls";
import styles from "./itemSetCard.module.css";

export const ItemSetCard = (props: {itemSet:ItemSetInterface, displayDelete:boolean}) => {

    const {itemSet} = props

    return ( //note: need to remove the overarching <a>. cant nest button in link
    <div className={styles.wrapperCard}>
        <button className={styles.deletionButton} onClick={()=> {DeleteFromLocalStorage(itemSet.setName)}}> Delete </button>
        <Link to={"/set/" + itemSet.setNameUrl} className={styles.linkCard}>
            <h3> {itemSet.setName} </h3>
            <p> {itemSet.setItemUrls.length} </p>
            <p> {itemSet.setDescription} </p>
        </Link>
    </div>
    );
}