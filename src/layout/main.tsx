import { useState } from "react";
import { ItemSetInterface } from "../interfaces/itemSetInterface";
import styles from "./main.module.css";

export const Main = () => {

    //temporary measure:
    const exampleSet:ItemSetInterface[] = [{setName: "Survival mods", setItems: ["redirection", "vitality", "vigor", "steel_fiber"]}];
    const [itemSet, setItemSet] = useState<ItemSetInterface[]>(exampleSet);

    

    return(
        <main className={styles.main}>
            <p>testing main</p>
        </main>
    );
}