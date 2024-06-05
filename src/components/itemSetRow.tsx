import { useEffect, useState } from "react";
import { SetRowInterface } from "../interfaces/setRowInterface";

import style from "./itemSetRow.module.css";

export const ItemSetRow = ({itemUrl}:{itemUrl:string}) => {

    const mockData = {
        img: "string",
        quantity: 1,
        orderCreator: "string",
        modRankCurrent: 1,
        modRankMax: 1,
        onlineValue: 1,
        maxValue: 1
    };

    const [modApiSet, setModApiSet] = useState<SetRowInterface|null>(mockData);


    useEffect(() => {

        const apicall = "http://localhost:4000";


        // for (let modUrlFriendlyName of modSetItemUrls) {
            //create state for mod items,
            //in this loop we call and bind api return to state
            //use state to template the values into a table

            //Bonus: trottle quantity of api calls to avoid overcalling



            //if we want to fetch this api we need to either disable cors, or use a proxy server to handle the dataflow.
            //currently we'll be using a chrome extension to block cors requests. if this works it MUST be replaced (if we made a backend)
            const apiAddress = apicall + "/items/" + itemUrl + "/orders";
            // fetch(apiAddress)
            // .then(res => res.json())
            // .then(data => setModApiSet(data.payload))
            // .catch(err => console.log(err))
    }, []);
    console.log(modApiSet);


    return <article className={style.row}>
        { modApiSet ? <p> 
            <div>
                <span> <input type="checkbox"/> </span>
                <span> <img src={modApiSet.img} alt={itemUrl}/> </span>
                <span> {`${itemUrl} ${modApiSet.quantity}`} </span>
                <span> {modApiSet.orderCreator} </span>
                <span> {`${modApiSet.modRankCurrent}/${modApiSet.modRankMax}`} </span>
            </div>
            <div>
                <span> {`${modApiSet.onlineValue} (${modApiSet.maxValue})`} </span>
                <span> <img src="platicon" alt="currencySymbol"/> </span>
                <span> <a href={"https://warframe.market/items/" + itemUrl}>Link to market</a> </span>
                <span> <button> Clipboard Info</button> </span>
            </div>
        </p> : <p>noDataFound</p>}
    </article>
}