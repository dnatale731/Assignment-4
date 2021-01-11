let masterPassword = "12345678"

button1 = document.getElementById("button1")
button2 = document.getElementById("button2")
text = document.getElementById("text")
dontHover = document.getElementById("dontHover")
submit = document.getElementById("submit")
formHeader = document.getElementById("formHeader")

//Buttons change the text box
button1.addEventListener("click", function() { 
    text.innerText="I'm right"
})
button2.addEventListener("click", function() { 
    text.innerText="No, I'm right!"
})

//Creates an alert when you hover over the h2 element
dontHover.addEventListener("mouseover", function() { 
    alert("Hey, I told you not to hover over me!")
})

//Submits the values of the form
submit.addEventListener("click", function() {
    password = document.getElementById("password").value
    
    //Checks if the password is correct
    if(password === masterPassword) {
        formHeader.innerText = "Password Correct. Thank You For Filling Out My Form!"
    }
    else {
        alert("Incorrect Password!")
    }
})