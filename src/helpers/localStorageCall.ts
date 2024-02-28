// import { useState } from "react";
import { ItemSetInterface } from "../interfaces/itemSetInterface";

export function LocalStorageCall() {

    //this is where we'll communicate with localhost for user added sets


    //temporary measure:
    const exampleSet:ItemSetInterface[] = [{setName: "Survival mods", setNameUrl: "Survival_mods", setItemUrls: ["redirection", "vitality", "vigor", "steel_fiber"], setDescription: "This is a starter itemset, it only exsits as an example for how to use this webapp."}];
    // const [itemSet, setItemSet] = useState<ItemSetInterface[]>(exampleSet);

    const itemSet = exampleSet

    return {itemSet}
}