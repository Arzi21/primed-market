import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { ReadModListSet } from "../helpers/localStorageCalls";
import { ItemSetInterface } from "../interfaces/itemSetInterface";


export const ItemSetHighlight = () => {

    const [modApiSet, setModApiSet] = useState<any|null>()

    const urlParams = useParams();
    const modSetName = urlParams.setName;
    const modSet:ItemSetInterface = ReadModListSet(modSetName!);

    useEffect(() => {

        const initalApiUrl = "https://api.warframe.market/v1";
        // const itemURL = "/items/" + modSet.;



        let modSetItemUrls = modSet.setItemUrls
        for (let modUrlFriendlyName of modSetItemUrls) {
        // for (let modUrlFriendlyName of ['vitality']) {
            //create state for mod items,
            //in this loop we call and bind api return to state
            //use state to template the values into a table

            //Bonus: trottle quantity of api calls to avoid overcalling

            console.log('test: ' + modUrlFriendlyName);
            const apiAddress = initalApiUrl + "/items/" + modUrlFriendlyName;
            console.log(apiAddress);
            // fetch(apiAddress)
            // .then(res => res.json())
            // .then(data => setModApiSet(data.payload));
        }
    }, [modSet]);



    let template = modSet.setItemUrls.map((modItem:string, index:number) => (
        <p key={modSetName + "_" + index + 1}> {modItem} </p>
    ));

    return <> {template} </>
}