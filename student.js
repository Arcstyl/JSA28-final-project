let registerbutton = document.querySelector('#registerbutton')

let welcometext = document.querySelector('#welcometext')

if (localStorage.getItem("Username") !== null && localStorage.getItem("Password") !== null){
    registerbutton.style.display = "none"
    welcometext.innerHTML = "Welcome, " + localStorage.getItem("Username")
}

let cart = document.getElementById("cart")

if (localStorage.getItem("CS50 amount") !== null){
    cart.innerHTML = "Your Cart ("+localStorage.getItem("CS50 amount")+")"
}