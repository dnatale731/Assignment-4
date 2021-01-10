let button1Pressed = false
let button2Pressed = false
let hovered = false
button1 = document.querySelector("#button1")
button2 = document.querySelector("#button2")
text = document.querySelector("#text")
dontHover = document.querySelector(".dontHover h1")

//Buttons change the text box
button1.addEventListener("click", function(){ text.innerText="I'm right"; button1Pressed = true })
button2.addEventListener("click", function(){ text.innerText="No, I'm right!"; button2Pressed = true })
dontHover.addEventListener("mouseover", function(){ alert("Hey, I told you not to hover over me!"); hovered = true })

if(button1Pressed && button2Pressed) {
    //Original plan didn't work, will try something else when doing CSS
}

if(hovered) {
    //Will Implement Part 3 Here
}