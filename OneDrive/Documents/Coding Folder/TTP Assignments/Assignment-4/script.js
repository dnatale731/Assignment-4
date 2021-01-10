let button1Pressed = false
let button2Pressed = false
button1 = document.querySelector("#button1")
button2 = document.querySelector("#button2")
text = document.querySelector("#text")

//Buttons change the text box
button1.addEventListener("click", function(){text.innerText="I'm right"; button1Pressed = true})
button2.addEventListener("click", function(){text.innerText="No, I'm right!"; button2Pressed = true})

if(button1Pressed && button2Pressed){
    //Will Implement Part 2 Here
}