import { useState } from "react";
import { PostLocalStorage } from "../helpers/localStorageCalls";
import { ItemSetInterface } from "../interfaces/itemSetInterface";

import styles from "./newItemSet.module.css";


export const NewItemSet = () => {

    const [inputQuantity, setInputQuantity] = useState(1);
    const [itemSet, setItemSet] = useState({
        setName: "undefined",
        setNameUrl: "undefined",
        setItemUrls: ["undefined"],
        setDescription: "undefined"
    });

    function handleInputUpdates(event:any) {
        setItemSet({
            ...itemSet,
            [event.target.name]: event.target.value
        });
    }

    function handleSubmit(formData:any) {
        formData.preventDefault();

        console.log('test');

        // PostLocalStorage("ItemSet", itemSet);

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
                <input 
                    type="text"
                    name="setName" 
                    value={itemSet.setName} 
                    onChange={handleInputUpdates}
                    defaultValue="test"
                />
            </label>

            <label>
                Set items
                {Array(inputQuantity).fill(0).map((_, index) => (
                    <input 
                        type="text"
                        key={"itemInputNr" + index} 
                        name={"setItem"+(index+1)} 
                        value={itemSet.setItemUrls}
                        onChange={handleInputUpdates}
                    />
                ))}
            </label>

            <label>
                Description
                <textarea 
                    name="setDescription" 
                    value={itemSet.setDescription} 
                    onChange={handleInputUpdates}
                    defaultValue="test"
                />
            </label>
            
            <button type="button" onClick={()=>{setInputQuantity(prev => prev + 1)}}> Add Slot </button>
            <button type="submit"> Save Set </button>
        </form>
        </div>
    );
}