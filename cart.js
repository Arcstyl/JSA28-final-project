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

let quantity = document.getElementById("quantity")
let coursename = document.getElementById("cname")
let price = document.getElementById("price")

let increase = document.getElementById("increase")
let decrease = document.getElementById("decrease")

let purchasebutton = document.getElementById("purchasecourse")

if (localStorage.getItem("CS50 course") !== null && localStorage.getItem("CS50 amount") !== null){
    increase.style.display = "inline"
    decrease.style.display = "inline"
    purchasebutton.style.display = "inline"
    quantity.innerHTML = Number(localStorage.getItem("CS50 amount"))
    coursename.innerHTML = "CS50's Intro to Computer Science"

    let priceval = 0
    priceval = Number(localStorage.getItem("CS50 amount")) * 80.2
    if (priceval % 1 !== 0){
        price.innerHTML = "$"+priceval+"0"
    } else {
        price.innerHTML = "$"+priceval+".00"
    }
} else {
    quantity.innerHTML = "None"
    coursename.innerHTML = "None"
    price.innerHTML = "None"

    increase.style.display = "none"
    decrease.style.display = "none"
    purchasebutton.style.display = "none"
}

increase.addEventListener("click", function(){
    localStorage.setItem("CS50 amount", Number(localStorage.getItem("CS50 amount")) + 1)
    location.reload()
})

decrease.addEventListener("click", function(){
    localStorage.setItem("CS50 amount", Number(localStorage.getItem("CS50 amount")) - 1)
    location.reload()
})