import { Link } from "react-router-dom";
import { useState } from "react";

import { ReadLocalStorageSection, InitialiseTestValue, DeleteFromModList } from "../helpers/localStorageCalls";
import { ItemSetCard } from "../components/itemSetCard";
import { ItemSetInterface } from "../interfaces/itemSetInterface";
import styles from "./main.module.css";

export const Main = () => {

    const [isDeletable, setIsDeletable] = useState(false);
    const [itemSet, setItemSet] = useState(ReadLocalStorageSection("itemSet"))

    function filterModList(toberemoved:ItemSetInterface) {
        const newModList = itemSet.filter((obj:ItemSetInterface) => obj !== toberemoved)
        setItemSet(newModList);
        DeleteFromModList(toberemoved);
    }

    return(
        <section className={styles.main}>
            <h2>Mod List</h2> 
            <div className="interactionBar">
                <button></button>
                <button></button>
                <label> 
                    &#128465;
                    <input type="checkbox" onClick={()=> (setIsDeletable(!isDeletable))}></input>
                </label>
            </div>
            <article className={styles.modListGrid}>
                {itemSet ? itemSet.map((itemSetValues:ItemSetInterface, index:number) => (
                        <ItemSetCard itemSet={itemSetValues} displayDelete={isDeletable} deleteFunc={filterModList} key={index + itemSetValues.setNameUrl}/>
                )) : <p> No item sets added yet. <Link to={"/new_Set/"}> Create your first set!</Link></p>}
            </article>
        </section>
    );
}