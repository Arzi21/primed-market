import { useState } from "react";
import { PostLocalStorage } from "../helpers/localStorageCalls";
import { ItemSetInterface } from "../interfaces/itemSetInterface";

import styles from "./newItemSet.module.css";


export const NewItemSet = () => {

    const [itemSet, setItemSet] = useState({
        setName: "undefined",
        setNameUrl: "undefined",
        setItemUrls: Array(1).fill("undefined"),
        setDescription: "undefined"
    });



    function handleInputUpdates(event:any) {
        setItemSet({
            ...itemSet,
            [event.target.name]: event.target.value
        });
    }

    function handleInputArrayUpdates(inputValue:string, index:number) {
        let mutableItemUrls = itemSet.setItemUrls;
        mutableItemUrls = mutableItemUrls.map((_, i) => {
            if (i === index) {
                return inputValue;
            } else {
                return mutableItemUrls[i];
            }
        });

        setItemSet(prev => ({...prev, setItemUrls:mutableItemUrls}));
    }

    function handleSubmit(formData:any) {
        formData.preventDefault();

        console.log('test');
        console.log(itemSet);
        console.log(formData);

        // PostLocalStorage("itemSet", itemSet);
    }

    function increment() {
        let mutableItemUrls = itemSet.setItemUrls
        mutableItemUrls.push("");
        setItemSet(prev => ({...prev, setItemUrls: mutableItemUrls}))
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
                {itemSet.setItemUrls.map((_, index) => (
                    <input 
                        type="text"
                        key={"itemInputNr" + index} 
                        name={"setItem"+(index+1)} 
                        value={itemSet.setItemUrls[index]}
                        onChange={(event) => handleInputArrayUpdates(event.target.value, index)}
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
            
            <button type="button" onClick={()=>increment()}> Add Slot </button>
            <button type="submit"> Save Set </button>
        </form>
        </div>
    );
}