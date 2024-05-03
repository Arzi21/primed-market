import { ItemSetInterface } from "../interfaces/itemSetInterface"
import { DeleteFromLocalStorage } from "../helpers/localStorageCalls";
import styles from "./itemSetCard.module.css";

export const ItemSetCard = (props: {itemSet:ItemSetInterface, displayDelete:boolean}) => {

    const {itemSet} = props

    return ( //note: need to remove the overarching <a>. cant nest button in link
    <div className={styles.wrapper}>
        <button className={styles.deletionButton} onClick={()=> {DeleteFromLocalStorage(itemSet.setName)}}> Delete </button>
        <h3> {itemSet.setName} </h3>
        <p> {itemSet.setItemUrls.length} </p>
        <p> {itemSet.setDescription} </p>
    </div>
    );
}