let registerbutton = document.querySelector('#registerbutton')

let welcometext = document.querySelector('#welcometext')

if (localStorage.getItem("Username") !== null && localStorage.getItem("Password") !== null){
    registerbutton.style.display = "none"
    welcometext.innerHTML = "Welcome, " + localStorage.getItem("Username")
}

let fn = document.getElementById("fn")
let ln = document.getElementById("ln")
let ea = document.getElementById("ea")
let send = document.getElementById("send")

send.addEventListener("click", function(){
    if (fn.value == "" || ln.value == "" || ea.value == ""){
        alert("You are missing one or more field(s)")
    } else {
        alert("Success! Your report is being sent to our staffs. Please wait from 1 day up to a week for a response depending on traffic.")
        location.reload()
    }
})

let cart = document.getElementById("cart")

if (localStorage.getItem("CS50 amount") !== null){
    cart.innerHTML = "Your Cart ("+localStorage.getItem("CS50 amount")+")"
}