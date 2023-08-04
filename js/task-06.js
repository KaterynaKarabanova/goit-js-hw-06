
const inputField = document.querySelector("#validation-input")

const offInput = () => {
    let idColor
    if (inputField.value.length === parseInt(inputField.getAttribute("data-length"))) {
       idColor = `valid`
       
    } else {
       idColor = `invalid`
    }
         inputField.setAttribute("class", idColor);
}

inputField.addEventListener("blur", offInput)