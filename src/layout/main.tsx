import { Link } from "react-router-dom";
import { useState } from "react";

import { ReadLocalStorageSection, DeleteFromModList } from "../helpers/localStorageCalls";
import { ItemSetInterface } from "../interfaces/itemSetInterface";
import { DropdownOptions } from "../components/dropdownOptions";
import { ItemSetCard } from "../components/itemSetCard";
import { HeroImage } from "../components/heroImage";
import image from "../imgs/heroimg1.png";
import styles from "./main.module.css";
import { InteractionBar } from "./interactionBar";

export const Main = () => {

    const [isDeletable, setIsDeletable] = useState(false);
    const [itemSet, setItemSet] = useState(ReadLocalStorageSection("itemSet"));

    function filterModList(toberemoved:ItemSetInterface) {
        const newModList = itemSet.filter((obj:ItemSetInterface) => obj !== toberemoved);
        setItemSet(newModList);
        DeleteFromModList(toberemoved);
    }

    function toggleDeletability() {
        setIsDeletable(!isDeletable);
    }

    function testAction() {
        alert("test");
    }

    const dropdownActions = [toggleDeletability, testAction, testAction];
    const dropdownLabels = ["Delete", "Test", "Test"];

    return(
        <>
        <HeroImage imagePath={image}/>
        <section className={styles.main}>
            <InteractionBar barTitle="Item Sets" dropdownActions= {dropdownActions} dropdownLabels={dropdownLabels}/>
            <article className={styles.modListGrid}>
                {itemSet ? itemSet.map((itemSetValues:ItemSetInterface, index:number) => (
                    <ItemSetCard itemSet={itemSetValues} displayDelete={isDeletable} deleteFunc={filterModList} key={index + itemSetValues.setNameUrl}/>
                )) : <p> No item sets added yet. <Link to={"/new_Set/"}> Create your first set!</Link></p>}
            </article>
        </section>
        </>
    );
}