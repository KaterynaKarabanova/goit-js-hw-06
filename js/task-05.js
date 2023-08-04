
const userName = document.querySelector("#name-input")
const greetUser = document.querySelector("#name-output")
 

const onInput = (event) => {
    if(event.currentTarget.value.length>=1){
        greetUser.textContent = event.currentTarget.value
    } else {
        greetUser.textContent = `Anonymous`
    }
    
}
 userName.addEventListener("input", onInput)