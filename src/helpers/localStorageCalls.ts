import { ItemSetInterface } from "../interfaces/itemSetInterface";

//this is where we'll communicate with localhost for user added sets


export function PostLocalStorage(key:string, value:any) {
    let prevValue:any = []
    if (doesKeyExist(key)) {
        prevValue = localStorage.getItem(key);
        prevValue = JSON.parse(prevValue);
    }
    const updatedLocalStorageData = {data: [...prevValue.data, value]}

    const localStorageUpdate = JSON.stringify(updatedLocalStorageData);
    localStorage.setItem(key, localStorageUpdate);
}

export function ReadLocalStorage(key:string):ItemSetInterface[]|any {
    if (doesKeyExist(key)) {
        const storageData:string = localStorage.getItem(key)!;//"!" here since we vetted in doesKeyExist
        const formattedData = JSON.parse(storageData);
        return formattedData.data;
    } else {
        return console.error("Local storage error. Key not found for: " + key);
    }
}

export function DeleteFromLocalStorage(key:string) {
    return console.warn("deletion currently not set up. Cannot delete key: " + key);

    if (doesKeyExist(key)) {
        localStorage.removeItem(key);
    }
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

export function InitialiseTestValue() {
    //temporary measure
    const exampleSet:ItemSetInterface = {
        setName: "Survival mods", 
        setNameUrl: "Survival_mods", 
        setItemUrls: ["redirection", "vitality", "vigor", "steel_fiber"], 
        setDescription: "This is a starter itemset, it only exsits as an example for how to use this webapp."
    };
    
    localStorage.setItem("itemSet", JSON.stringify({data: [exampleSet]}));
    const itemSet = [exampleSet];
    return itemSet
}



function doesKeyExist(key:string) {
    const storageData = localStorage.getItem(key);
    if (storageData) {
        return true
    } else {
        console.warn("Local storage error. Key not found for: " + key);
        return false
    }
}