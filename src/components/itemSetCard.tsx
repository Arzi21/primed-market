import { ItemSetInterface } from "../interfaces/itemSetInterface"
import styles from "./itemSetCard.module.css";

export const ItemSetCard = (props: {itemSet:ItemSetInterface}) => {

    const {itemSet} = props

    return (
    <div className={styles.wrapper}>
        <h3> {itemSet.setName} </h3>
        <p> {itemSet.setItemUrls.length} </p>
        <p> {itemSet.setDescription} </p>
    </div>
    );
}