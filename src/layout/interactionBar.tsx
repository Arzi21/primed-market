import { DropdownOptions } from "../components/dropdownOptions";
import styles from "./interactionBar.module.css"

export const InteractionBar = ({barTitle, dropdownActions, dropdownLabels}:
    {barTitle:string, dropdownActions:any[], dropdownLabels:string[]}) => {

    return (
    <div className={styles.sectionHeader}>
        <h2>{barTitle} </h2> 
        <DropdownOptions dropdownActions={dropdownActions} dropdownLabels={dropdownLabels}/>
    </div>
    );
}