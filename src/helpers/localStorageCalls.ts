// import { useState } from "react";
import { ItemSetInterface } from "../interfaces/itemSetInterface";

//this is where we'll communicate with localhost for user added sets

export function InitialiseTestValue() {
    //temporary measure

    const exampleSet:ItemSetInterface[] = [{setName: "Survival mods", setNameUrl: "Survival_mods", setItemUrls: ["redirection", "vitality", "vigor", "steel_fiber"], setDescription: "This is a starter itemset, it only exsits as an example for how to use this webapp."}];
    // const [itemSet, setItemSet] = useState<ItemSetInterface[]>(exampleSet);

    localStorage.setItem("ItemSet", JSON.stringify(exampleSet));

    const itemSet = exampleSet

    return {itemSet}
}

export function PostLocalStorage(key:string, value:any) {
    const fetchedData = JSON.stringify(value)
    localStorage.setItem(key, fetchedData);
}

export function ReadLocalStorage(key:string) {
    
    const storageData = localStorage.getItem(key);

    if (storageData) {
        const formattedData:ItemSetInterface[] = JSON.parse(storageData);
        return formattedData;
    } else {
        return console.error("Local storage error. Key not found for: " + key);
    }
}

export function DeleteLocalStorage(key:string) {
    
}

export function DropLocalStorage() {
    //hard coding access to this
    const isTableDropAllowed = true;

    const promptUserConfirmation = window.confirm("Dropping the entire table is irreversible.");

    if (isTableDropAllowed && promptUserConfirmation) {
        localStorage.clear();
    } else {
        console.log("Dropping the entire table is not currently permitted");
    }
}