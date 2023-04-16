const errBox = document.querySelector(".email-lbl")
const inputBox = document.querySelector(".input")
const submitBtn = document.querySelector(".submit-btn")
const regEx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/

//Submit button click event 
submitBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    clearInput()
    const inputval = inputBox.value;
    if(inputval.match(regEx)){

        errMsg.textContent = "Email has been submited";
        errMsg.classList.add("err-msg")
        errMsg.style.color = "green"
        errMsg.style.display="inline-block";


    }else if (inputval === "" || inputval === undefined || inputval === null ){

        clearInput()
        errMsg.textContent = "oops input cannot be empty ";
        errMsg.classList.add("err-msg")
        errMsg.style.display="inline-block";
        errMsg.style.color = "red"
        // emptyInput
    }
    else {
        clearInput()
       
        errMsg.textContent ="Please enter a valid email address "
        errMsg.classList.add("err-msg")
        errMsg.style.display="inline-block";
        errMsg.style.color = "red"
        // wrongInput
    }
})

const errMsg =document.createElement("span")

errBox.appendChild(errMsg)

function clearInput(){
 return setTimeout(()=>{
    errMsg.textContent="";
    errMsg.style.display="none";
},2000);

}
