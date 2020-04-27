// http://www.omdbapi.com/?s=superman&apikey=564727fa
// s and apiKey are called query strings 

let moviesList = document.getElementById("moviesList")
let ul = document.getElementById("ul")
let movieDetails =document.getElementById("movieDetails")

let request = new XMLHttpRequest() 
/*// OPTION 1
request.addEventListener('load',function() {
}) */
let press = function(url){
    let requestDetails = new XMLHttpRequest() 
    requestDetails.onload = function(){
        let result = JSON.parse(this.responseText)
        console.log(result)
        
let detailsHtml = `<h1>${result.Title}</h1>
                   <p>${result.Plot}</p>
`
movieDetails.innerHTML = detailsHtml
    }
requestDetails.open("GET", url)
requestDetails.send()
console.log(url)
}
// OPTION 2
request.onload = function() {
    // parse the text as JavaScript Object
    let result = JSON.parse(this.responseText)
//console.log(result)
    let liItems = result.Search.map((movie) => { 
        let urlId = `http://www.omdbapi.com/?i=${movie.imdbID}&apikey=e536cca7`

                return `   <li> 
                <b> <p>${movie.Title} </p></b>
                <button class="buttonColor" onclick="press('${urlId}')">Details</button>
                <img src=${movie.Poster} />
                </li>  `            
    })
    // converting liItems array to a string and then assigning to the ul
    ul.innerHTML = liItems.join(" ")
    console.log(liItems)
}
request.open("GET","http://www.omdbapi.com/?s=batman&apikey=e536cca7")
request.send() 