let registerbutton = document.querySelector('#registerbutton')

let welcometext = document.querySelector('#welcometext')

if (localStorage.getItem("Username") !== null && localStorage.getItem("Password") !== null){
    registerbutton.style.display = "none"
    welcometext.innerHTML = "Welcome, " + localStorage.getItem("Username")
}

// let accountdetail = document.querySelector("#detail div")

let general = document.querySelector("#general")

let generaldetail = document.querySelector("#generaldetail")

generaldetail.innerHTML = "Account info: " + "<b>"+localStorage.getItem("Username")+"</b>" + "<br><br>Password: " + "<b>"+localStorage.getItem("Password")+"</b>" + "<br><br>Purchased Items: "

general.addEventListener("click", function(){
    generaldetail.style.display = "block"
    generaldetail.innerHTML = "Account info: " + "<b>"+localStorage.getItem("Username")+"</b>" + "<br><br>Password: " + "<b>"+localStorage.getItem("Password")+"</b>" + "<br><br>Purchased Items: "
})

let notification = document.querySelector("#notification")

notification.addEventListener("click", function(){
    generaldetail.innerHTML = "<b>Allow notifications for new deals:</b><br><button>Yes</button>"
})

let cart = document.getElementById("cart")

if (localStorage.getItem("CS50 amount") !== null){
    cart.innerHTML = "Your Cart ("+localStorage.getItem("CS50 amount")+")"
}