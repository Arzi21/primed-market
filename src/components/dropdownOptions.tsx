import { useState } from "react";

import style from "./dropdownOptions.module.css"

export const DropdownOptions = ({dropdownActions, dropdownLabels}:{dropdownActions:any[], dropdownLabels:string[]}) => {
    // might want to expand this to include other inputs; like checkboxes.

    const [displayDropdown, setDisplayDropdown] = useState(false);

    if (dropdownActions.length !== dropdownLabels.length) {
        console.warn("Dropdown Options is being called with an uneven number of actions and labels");
    }
    
    return( 
        <div className={style.interactionBar}>
            <button onClick={() => {setDisplayDropdown(!displayDropdown)}}>
                <svg width="88" height="36" viewBox="0 0 88 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="87" height="35" rx="8.5" fill="#4B337E" stroke="#704AA4"/>
                    <circle cx="18" cy="18" r="9" fill="#704AA4"/>
                    <circle cx="44" cy="18" r="9" fill="#704AA4"/>
                    <circle cx="70" cy="18" r="9" fill="#704AA4"/>
                </svg>
            </button>
            {displayDropdown && <div>
                <ul>
                {dropdownActions.map((_:any, index:number) => (
                    <li key={"downdownoption"+index}> 
                        <button onClick={() => {
                            dropdownActions[index](); setDisplayDropdown(!displayDropdown);
                        }}> {dropdownLabels[index]} </button>
                    </li>
                ))}
                </ul>
            </div>}
        </div>
    );
}