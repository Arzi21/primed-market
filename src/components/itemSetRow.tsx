import { useEffect, useState } from "react";


export const ItemSetRow = ({itemUrl}:{itemUrl:string}) => {

    const [modApiSet, setModApiSet] = useState<any|null>()


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
            fetch(apiAddress)
            .then(res => res.json())
            .then(data => setModApiSet(data.payload))
            .catch(err => console.log(err))
    }, []);
    console.log(modApiSet);


    return <article>
        <p> {itemUrl} </p>
    </article>
}