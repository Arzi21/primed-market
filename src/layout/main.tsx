import { Link } from "react-router-dom";
import { useState } from "react";

import { ReadLocalStorageSection, DeleteFromModList } from "../helpers/localStorageCalls";
import { ItemSetCard } from "../components/itemSetCard";
import { ItemSetInterface } from "../interfaces/itemSetInterface";
import { HeroImage } from "../components/heroImage";
import styles from "./main.module.css";

import image from "../imgs/heroimg1.png";
import { DropdownOptions } from "../components/dropdownOptions";

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
            <div className={styles.sectionHeader}>
                <h2>Item Sets</h2> 
                <DropdownOptions dropdownActions= {dropdownActions} dropdownLabels={dropdownLabels}/>
            </div>
            <article className={styles.modListGrid}>
                {itemSet ? itemSet.map((itemSetValues:ItemSetInterface, index:number) => (
                        <ItemSetCard itemSet={itemSetValues} displayDelete={isDeletable} deleteFunc={filterModList} key={index + itemSetValues.setNameUrl}/>
                )) : <p> No item sets added yet. <Link to={"/new_Set/"}> Create your first set!</Link></p>}
            </article>
        </section>
        </>
    );
}