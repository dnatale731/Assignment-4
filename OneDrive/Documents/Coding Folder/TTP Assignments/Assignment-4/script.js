let button1Pressed = false
let button2Pressed = false
let hovered = false
let masterPassword = "12345678"

button1 = document.querySelector("#button1")
button2 = document.querySelector("#button2")
text = document.querySelector("#text")
dontHover = document.querySelector(".dontHover h2")
submit = document.querySelector("#submit")
formHeader = document.querySelector("#formHeader")

//Buttons change the text box
button1.addEventListener("click", function() { 
    text.innerText="I'm right"
    button1Pressed = true 
})
button2.addEventListener("click", function() { 
    text.innerText="No, I'm right!"
    button2Pressed = true
})

//Creates an alert when you hover over the h2 element
dontHover.addEventListener("mouseover", function() { 
    alert("Hey, I told you not to hover over me!")
    hovered = true
})

//Submits the values of the form
submit.addEventListener("click", function() {
    password = document.querySelector("#password").value
    
    //Checks if the password is correct
    if(password === masterPassword) {
        formHeader.innerText = "Password Correct. Thank You For Filling Out My Form"
    }
    else {
        alert("Incorrect Password")
    }
})

if(button1Pressed && button2Pressed) {
    //Will try something when doing CSS
}

if(hovered) {
    //Will try something when doing CSS
}