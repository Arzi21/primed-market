

export function validateForm(formInput:string):boolean {
    let formIsValid = true;

    if (!doesContainText(formInput)) {
        formIsValid = false;
    }


    return formIsValid;
}

export function removeQuotationmarks(string:string) {
    string = string.replace('"', "");
    string = string.replace("'", "");
    string = string.replace("`", "");
    string = string.replace("´", "");
    return string;
}



function doesContainText(string:string):boolean {
    let foundText = true;

    if (string.length == 0) {
        foundText = false;
        console.warn("detected empty form input. Review all input fields.");
    }

    return foundText;
}