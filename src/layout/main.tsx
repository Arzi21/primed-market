import { Link } from "react-router-dom";
import { ReadLocalStorage } from "../helpers/localStorageCalls";

import { ItemSetCard } from "../components/itemSetCard";
import styles from "./main.module.css";
import { ItemSetInterface } from "../interfaces/itemSetInterface";

export const Main = () => {

    const itemSet = ReadLocalStorage("itemSet");

    return(
        <section className={styles.main}>
            <h2>testing main</h2>
            {itemSet ? itemSet.map((itemSetValues:ItemSetInterface) => (
                <Link to={"/set/" + itemSetValues.setNameUrl} key={itemSetValues.setNameUrl}>
                    <ItemSetCard itemSet={itemSetValues}/>
                </Link>
            )) : <p> No item sets added yet. <Link to={"/new_Set/"}> Create your first set!</Link></p>}
        </section>
    );
}