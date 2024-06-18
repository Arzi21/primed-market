import { useState } from "react";
import { UpdateLocalStorage } from "../../helpers/localStorageCalls";
import { ItemSetInterface } from "../../interfaces/itemSetInterface";

import styles from "./newItemSetForm.module.css";



export const NewItemSetForm = () => {

    const emptyItemSet = {
        setName: "",
        setNameUrl: "",
        setItemUrls: Array(1).fill(""),
        setDescription: ""
    }

    const [itemSet, setItemSet] = useState<ItemSetInterface>(emptyItemSet);



    function handleInputUpdates(event:any) {
        if (event.target.name === "setName") {
            setItemSet({
                ...itemSet,
                [event.target.name]: event.target.value,
                setNameUrl: event.target.value.replaceAll(" ", "_")
            });
        } else {
            setItemSet({
                ...itemSet,
                [event.target.name]: event.target.value
            });
        }
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

        setItemSet(prev => ({...prev, setItemUrls: mutableItemUrls}));
    }

    function handleSubmit(formData:any) {
        formData.preventDefault();

        //form validation needed

        UpdateLocalStorage("itemSet", itemSet);
        setItemSet(emptyItemSet);
    }

    function addInputField() {
        let mutableItemUrls = itemSet.setItemUrls
        mutableItemUrls.push("");
        setItemSet(prev => ({...prev, setItemUrls: mutableItemUrls}))
    }
    

    return (
        <form className={styles.outerWrapper} onSubmit={handleSubmit}>
            <label>
                Set name
                <input 
                    type="text"
                    name="setName" 
                    value={itemSet.setName} 
                    onChange={handleInputUpdates}
                    placeholder="test"
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
                        placeholder="test"
                    />
                ))}
            </label>

            <label>
                Description
                <textarea 
                    name="setDescription" 
                    value={itemSet.setDescription} 
                    onChange={handleInputUpdates}
                    placeholder="test"
                />
            </label>
            
            <button type="button" onClick={()=>addInputField()}> Add Slot </button>
            <button type="submit"> Save Set </button>
        </form>
    )
}