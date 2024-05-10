import { useParams } from "react-router-dom";

import { ReadModListSet } from "../helpers/localStorageCalls";


export const ItemSetHighlight = () => {

    const urlParams = useParams();
    const modSetName = urlParams.setName;
    const modSet = ReadModListSet(modSetName!); //add failure handling



    let template = modSet.setItemUrls.map((modItem:string, index:number) => (
        <p key={modSetName + "_" + index + 1}> {modItem} </p>
    ));

    return template
}