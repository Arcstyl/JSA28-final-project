let submitbtn = document.getElementById("submit")

let username = document.querySelector('.username input')
let password = document.querySelector('#password input')

let repassword = document.querySelector('#repassword input')

submitbtn.addEventListener('click', function(){
    if (username.value == "" || password.value == "" || repassword.value == ""){
        alert("Missing input field")
    } else if (password.value == repassword.value){
        localStorage.setItem("Username", username.value)
        localStorage.setItem("Password", password.value)
        location.href = "main.html"
    } else {
        alert("Your re-entered password does not match your entered password")
    }
})
