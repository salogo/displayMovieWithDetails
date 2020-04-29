let ul = document.getElementById("ul")

let request = new XMLHttpRequest() 

request.onload = function() {
    let result = JSON.parse(this.responseText)

    let liItems = Object.keys(result).map(function(coffee) { 
        console.log(result[coffee].coffee)
        console.log(result[coffee].emailAddress)

        return `<li>
        <label> ${result[coffee].coffee}</label>
        <p>${result[coffee].emailAddress} </p>

        </li>
        `

            })
    ul.innerHTML = liItems.join(" ")
}
request.open("GET","https://dc-coffeerun.herokuapp.com/api/coffeeorders/")
request.send() 

let emailTexBox =document.getElementById("emailTexBox")
let button =document.getElementById("button")
let coffeeTexBox =document.getElementById("coffeeTexBox")
let h1 =document.getElementById("h1")
let requestt = new XMLHttpRequest() 


let new_order = button.addEventListener("click",function(){
    console.log("hikk")
    let email = {
        emailAddress: emailTexBox.value, 
        coffee :coffeeTexBox.value
    }
    
requestt.open("POST","https://dc-coffeerun.herokuapp.com/api/coffeeorders/")
requestt.setRequestHeader("Content-Type","application/json")
requestt.send(JSON.stringify(email))
h1.innerHTML = button.value
})


console.log(new_order)
//console.log(JSON.stringify(order))
//requestt.send(JSON.stringify(order))
let deleteByEmail= document.getElementById("deleteByEmail")
let deletButton= document.getElementById("deletButton")

   deletButton.addEventListener("click", function() {
    
    let requesttt = new XMLHttpRequest()
    requesttt.onload = function() {
        console.log(this.responseText)
    }
    console.log(deleteByEmail.value)
    requesttt.open("DELETE",`https://dc-coffeerun.herokuapp.com/api/coffeeorders/${deleteByEmail.value}`)
    requesttt.setRequestHeader("Content-Type","application/json")
    requesttt.send()
})

let searchByEmail = document.getElementById("searchByEmail")
let searchButton = document.getElementById("searchButton")

searchButton.addEventListener("click", function(){
    let requestx = new XMLHttpRequest()
    requestx.onload = function() {
        console.log("ff",this.responseText)
    }
console.log(deleteByEmail.value)
requestx.open("GET",`https://dc-coffeerun.herokuapp.com/api/coffeeorders/${searchButton.value}`)
requestx.setRequestHeader("Content-Type","application/json")
requestx.send()
})