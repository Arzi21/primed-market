import { useParams } from "react-router-dom";

import { ItemSetRow } from "../components/itemSetRow";
import { ReadModListSet } from "../helpers/localStorageCalls";
import { ItemSetInterface } from "../interfaces/itemSetInterface";
import styles from "./itemSetHighlight.module.css";
import { useState } from "react";
import { InteractionBar } from "./interactionBar";

export const ItemSetHighlight = () => {

    const [isSelectable, setIsSelectable] = useState<boolean>(false);
    const [showButton, setShowButton] = useState<boolean>(false);

    const urlParams = useParams();
    const modSetName = urlParams.setName;
    const modSet:ItemSetInterface = ReadModListSet(modSetName!);



    let tableRows = modSet.setItemUrls.map((setItemUrlName:string, index:number) => (
        <ItemSetRow 
            key={modSetName + "_" + index + 1} 
            itemUrl={setItemUrlName} 
            isSelectable={isSelectable}
            showButton={showButton}
        />
    ));

    return (
        <section>
            <InteractionBar barTitle={modSetName!} dropdownActions={[]} dropdownLabels={[]}/>
            <table className={styles.tableRow}> {tableRows} </table>
        </section>
    );
}