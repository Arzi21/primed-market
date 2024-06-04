import { useParams } from "react-router-dom";

import { ItemSetRow } from "../components/itemSetRow";
import { ReadModListSet } from "../helpers/localStorageCalls";
import { ItemSetInterface } from "../interfaces/itemSetInterface";


export const ItemSetHighlight = () => {

    const urlParams = useParams();
    const modSetName = urlParams.setName;
    const modSet:ItemSetInterface = ReadModListSet(modSetName!);



    let template = modSet.setItemUrls.map((setItemUrlName:string, index:number) => (
        <ItemSetRow key={modSetName + "_" + index + 1} itemUrl={setItemUrlName}/>
    ));

    return <section> {template} </section>
}