import { NewItemSetForm } from "../components/formComponents/newItemSetForm";
import styles from "./newItemSet.module.css";


export const NewItemSet = () => {

    return (
        <div>
            <h2 className={styles.header}> Create New Item Set</h2>
            <NewItemSetForm/>
        </div>
    );
}