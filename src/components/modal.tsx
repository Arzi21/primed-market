import { useState } from "react";
import { UpdateLocalStorage } from "../helpers/localStorageCalls";
import { ItemSetInterface } from "../interfaces/itemSetInterface";

import styles from "./modal.module.css";
import { NewItemSetForm } from "./formComponents/newItemSetForm";

export const Modal = () => {


    return (
    <aside className={styles.modalWrapper}> 
        <section>
            <div>
                <h2> Create New Set </h2>
                <button> X </button>
            </div>

            <article>
                <NewItemSetForm/>
            </article>
        </section>
    </aside>
    )
}