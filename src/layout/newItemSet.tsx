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

    //TEST
    const [tempState, setState] = useState<string[]>();



    function handleInputUpdates(event:any) {
        setItemSet({
            ...itemSet,
            [event.target.name]: event.target.value
        });
    }
    let initalArray = Array(inputQuantity).fill("test");
    let newArr:string[] = [];

    function handleInputArrayUpdates(event:any, index:number) {
        console.log(event.target.value);
        // setState([...tempState, ])

        newArr = initalArray.map((value, i) => {
            if (i === index) {
                return event.target.value;
            } else {
                // return value;
                return newArr[i];
            }
        });

        //stopping here. This still doesn't fully work, 
        //the issue we've got is that our multiple inputs need to become an array
        //haven't done that in the submit phase, as at that point its already mapped to objects,
        //try for next time: hard code the array index into the input field, 
        //so that it directly mutates the array variable. use that variable in the submit phase.

        //update, try tghis: https://www.youtube.com/watch?v=CT-72lTXdPg or https://www.youtube.com/watch?v=cc_xmawJ8Kg 

        // setItemSet({
        //     setName: "undefined",
        //     setNameUrl: "undefined",
        //     setItemUrls: ["undefined"],
        //     setDescription: "undefined"
        // })
    }

    function handleSubmit(formData:any) {
        formData.preventDefault();

        console.log('test');
        console.log(itemSet);
        console.log(formData);

        // PostLocalStorage("itemSet", itemSet);
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
                        value={itemSet.setItemUrls[index]}
                        onChange={(event) => handleInputArrayUpdates(event, index)}
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