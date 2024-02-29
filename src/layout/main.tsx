import { Link } from "react-router-dom";
import { InitialiseTestValue } from "../helpers/localStorageCalls";

import { ItemSetCard } from "../components/itemSetCard";
import styles from "./main.module.css";

export const Main = () => {

    const {itemSet} = InitialiseTestValue();

    return(
        <section className={styles.main}>
            <h2>testing main</h2>
            {itemSet.map((itemSetValues) => (
                <Link to={"/set/" + itemSetValues.setNameUrl} key={itemSetValues.setNameUrl}>
                    <ItemSetCard itemSet={itemSetValues}/>
                </Link>
            ))}
        </section>
    );
}