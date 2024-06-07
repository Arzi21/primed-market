import { useEffect, useState } from "react";
import { SetRowInterface } from "../interfaces/setRowInterface";

import style from "./itemSetRow.module.css";
import buttonStyle from "../styles/button.module.css";

export const ItemSetRow = ({itemUrl, isSelectable, showButton}:
    {itemUrl:string, isSelectable:boolean, showButton:boolean}) => {

    const [modApiSet, setModApiSet] = useState<SetRowInterface|null>();

    useEffect(() => {

        const apicall = "http://localhost:4000";

        const apiAddress = apicall + "/items/" + itemUrl + "/orders";
        fetch(apiAddress)
        .then(res => res.json())
        .then(data => setModApiSet(data.payload))
        .catch(err => console.log(err))
    }, []);
    


    return (
        <tr className={style.row}>
            {isSelectable && <td> <label><input type="checkbox"/></label> </td>}
            { modApiSet ? <>
                <td> <img className={style.platIcon} src={modApiSet.img} alt={itemUrl}/> </td>
                <td> <p>{itemUrl}</p> </td>
                <td> <p>{modApiSet.quantity}</p> </td>
                <td> <p>{modApiSet.orderCreator}</p> </td>
                <td> <p>{`${modApiSet.modRankCurrent}/${modApiSet.modRankMax}`}</p> </td>
    
                <td className={style.emptyfield}></td>
    
                <td> {`${modApiSet.onlineValue} (${modApiSet.maxValue})`} </td>
                <td> <img className={style.platIcon} src="platicon" alt="currencySymbol"/> </td>
                <td> <a href={"https://warframe.market/items/" + itemUrl}>Link to market</a> </td>
                {showButton && <td> <button className={buttonStyle.small}>Clipboard Info</button> </td>}
            </>: <>
                <td> <p>{itemUrl} could not be fetched</p> </td>
            </>}
        </tr>
    )


}