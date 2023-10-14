let registerbutton = document.querySelector('#registerbutton')

let welcometext = document.querySelector('#welcometext')

if (localStorage.getItem("Username") !== null && localStorage.getItem("Password") !== null){
    registerbutton.style.display = "none"
    welcometext.innerHTML = "Welcome, " + localStorage.getItem("Username")
}

let purchase = document.getElementById("purchase")
let cart = document.getElementById("cart")

if (localStorage.getItem("CS50 amount") !== null){
    cart.innerHTML = "Your Cart ("+localStorage.getItem("CS50 amount")+")"
}

purchase.addEventListener("click", function(){
    if (localStorage.getItem("Username") !== null && localStorage.getItem("Password") !== null){
        if (localStorage.getItem("CS50 course") ==  null || localStorage.getItem("CS50 amount") == null){
            localStorage.setItem("CS50 course", "bought")
            localStorage.setItem("CS50 amount", 1)
            location.reload()
        } else {
            location.reload()
            localStorage.setItem("CS50 amount", Number(localStorage.getItem("CS50 amount")) + 1)
        }
    } else {
        alert("Please create an account")
    }
})
