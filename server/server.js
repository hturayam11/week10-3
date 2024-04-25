const express = require('express');
const cors = require('cors')
//const recipes = require('./food.json')

const app = express();
app.use(cors())

let arrayOfData = ["hello"]

//const bodyParser = require("body-parser")
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const APIKEY = "13193fd12b7f4d31a0a530677089ce1a"
const URL = "https://api.spoonacular.com/"

app.get('/recipes', async (req, res) => {
var rURL = URL+"recipes/random?apiKey=" + APIKEY + "&number=24"
var response = await fetch(rURL);
//console.log(response.json())
var data = await response.json();
console.log(data)
res.json(data)
})

app.get('/randomRecipes', async (req, res) => {
    var rURL = URL+"recipes/random?apiKey=" + APIKEY 
    var response = await fetch(rURL);
    //console.log(response.json())
    var data = await response.json();
    console.log(data)
    res.json(data)
    })

// app.post('/findByIngredients', async (req, res) => {
// var ingredients = req.body
// var rURL = URL+"recipes/findByIngredients?apiKey=" + APIKEY +
//"&number=24&ingredients=" + ingredients
// var response = await fetch(rURL);
// //console.log(response.json())
// var data = await response.json();
// console.log(data)
// res.json(data)
// })

app.post('/searchAllFood', async (req, res) => {
    console.log(req.body)
var ingredient = req.body.ingredient
var rURL = URL+"recipes/complexSearch?apiKey=" + APIKEY + "&number=24&query=" + ingredient


var response = await fetch(rURL);
//console.log(response.json())
var data = await response.json();
console.log(data)
res.json(data)
})

app.post("/", function (request, response){
let body = request.body
console.log(body)
arrayOfData.push(body.value)
response.send("ok")
})


app.listen(3002, () => {
console.log('Worldview Api listening on port 3001!');
});

// const express = require('express');
// const cors = require('cors')
// //const recipes = require('./food.json')

// const app = express();
// app.use(cors())

// let arrayOfData = ["hello"]

// const bodyParser = require("body-parser")

// const APIKEY = "8b8b78f9321f42539c00b2652546f347"
// const URL = "https://api.spoonacular.com/recipes/" 

// app.get('/recipes', async (req, res) => {
//     var rURL = URL+"random?apiKey=" + APIKEY + "&number=24"   
//     var response = await fetch(rURL);
//     //console.log(response.json())
//     var data = await response.json();
//     console.log(data)
//     res.json(data)
// })

// app.post('/findByIngredients', async (req, res) => {
//     var ingredients = req.body
//     var rURL = URL+"findByIngredients?apiKey=" + APIKEY + "&number=24&ingredients=" + ingredients
//     var response = await fetch(rURL);
//     //console.log(response.json())
//     var data = await response.json();
//     console.log(data)
//     res.json(data)
// })


// app.post("/", function (request, response){
//         let body = request.body
//         console.log(body)
    
//         arrayOfData.push(body.value)
    
//         response.send("ok")
//     })


// app.listen(3001, () => {
//         console.log('Worldview Api listening on port 3001!');
//     });