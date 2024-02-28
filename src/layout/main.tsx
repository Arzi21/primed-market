import { useState } from "react";
import { ItemSetInterface } from "../interfaces/itemSetInterface";

import { ItemSetCard } from "../components/itemSetCard";
import styles from "./main.module.css";
import { Link } from "react-router-dom";

export const Main = () => {

    //temporary measure:
    const exampleSet:ItemSetInterface[] = [{setName: "Survival mods", setNameUrl: "Survival_mods", setItemUrls: ["redirection", "vitality", "vigor", "steel_fiber"], setDescription: "This is a starter itemset, it only exsits as an example for how to use this webapp."}];
    const [itemSet, setItemSet] = useState<ItemSetInterface[]>(exampleSet);

    

    return(
        <main className={styles.main}>
            <h2>testing main</h2>
            {itemSet.map((itemSetValues) => (
                <Link to={"/set/" + itemSetValues.setNameUrl}>
                    <ItemSetCard itemSet={itemSetValues}/>
                </Link>
            ))}
        </main>
    );
}