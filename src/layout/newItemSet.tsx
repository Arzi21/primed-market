import { useState } from "react";
import { PostLocalStorage } from "../helpers/localStorageCalls";
import { ItemSetInterface } from "../interfaces/itemSetInterface";

import styles from "./newItemSet.module.css";


export const NewItemSet = () => {

    const [inputQuantity, setInputQuantity] = useState(1);

    function handleSubmit(formData:any) {
        formData.preventDefault();

        const formValues = new FormData(formData.target);
        const formObject = Object.fromEntries(formValues.entries());

        let newItemName = "default";
        let newItems:string[] = [];
        let initalLoop = true;
        
        for (const [key,value] of Object.entries(formValues)) {
            //https://stackoverflow.com/questions/32464948/mapping-object-to-key-value-string-in-one-line
            if (initalLoop){
                newItemName = value;
                initalLoop = false;
            } else {
                newItems.push(key);
            }
        }

        const unformattedNewItemSet = {
            setName: newItemName,
            setNameUrls: "to be added",
            setItemUrls: newItems,
            setDescription: "to be added",
        }

        PostLocalStorage("ItemSet", [unformattedNewItemSet]);

        // currently this doesn't work.
        //need to get the values from the form, not the keys.
        //might be easier to just redo the entire form.
    }

    return (
        <div className={styles.outerWrapper}>
        <form onSubmit={handleSubmit}>
            <h2> Create New Item Set </h2>
            <label>
                Set name
                <input name="setName"/>
            </label>
            <label>
                Set items
                {Array(inputQuantity).fill(0).map((_, index) => (
                    <input key={"itemInputNr" + index} name={"setItem"+(index+1)}/>
                ))}
            </label>
            <button type="button" onClick={()=>{setInputQuantity(prev => prev + 1)}}> Add Slot </button>
            <button type="submit"> Save Set </button>
        </form>
        </div>
    )
}