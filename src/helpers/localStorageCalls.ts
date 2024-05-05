import { ItemSetInterface } from "../interfaces/itemSetInterface";

//this is where we'll communicate with localhost for user added sets


export function PostLocalStorage(key:string, value:ItemSetInterface):void {
    const prevValue = ReadLocalStorage(key);
    const updatedLocalStorageArray = [...prevValue.data, value]
    overrideLocalstorageItemset(updatedLocalStorageArray);
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

export function DeleteFromLocalStorage(modCard:ItemSetInterface):void {
    const dirtyLocalstorage = ReadLocalStorage("itemSet");
    let cleanLocalstorage = dirtyLocalstorage.filter((obj:ItemSetInterface) => obj.setName !== modCard.setName);
    overrideLocalstorageItemset(cleanLocalstorage);
}

export function DropLocalStorage():void {
    const isTableDropAllowed = true;
    const promptUserConfirmation = window.confirm("Dropping the entire table is irreversible.");
    if (isTableDropAllowed && promptUserConfirmation) {
        localStorage.clear();
    } else {
        console.log("Dropping the entire table is not currently permitted");
    }
}

export function InitialiseTestValue():ItemSetInterface[] {
    //temporary measure
    const exampleSet:ItemSetInterface = {
        setName: "Survival mods", 
        setNameUrl: "Survival_mods", 
        setItemUrls: ["redirection", "vitality", "vigor", "steel_fiber"], 
        setDescription: "This is a starter itemset, it only exsits as an example for how to use this webapp."
    };
    
    overrideLocalstorageItemset([exampleSet]);
    return [exampleSet];
}



function overrideLocalstorageItemset(newPackage:ItemSetInterface[]):void {
    const updatePackage = JSON.stringify({data: newPackage});
    localStorage.setItem("itemSet", updatePackage);
}

function doesKeyExist(key:string):boolean {
    const storageData = localStorage.getItem(key);
    if (storageData) {
        return true
    } else {
        console.warn("Local storage error. Key not found for: " + key);
        return false
    }
}