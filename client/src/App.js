import React, { useEffect } from "react";
import { useState } from "react";
import Header from "./Header";


function App() {
const [recipeData, setRecipeData] = useState([])
const [recipeOfTheDay, setRecipeOfTheDay] = useState(null);
let recipeCards = []

for(let i = 0; i < recipeData.length; i+=1){
let recipe = recipeData[i]
console.log(recipe)

let recipeCardHTML = <div className="recipeCard" style={{border: "3px solid red", width: "200px", height: "200px", margin: "2%" }}>
<img src={recipe.image} style={{height: "100%"}} />
<h1 style={{textAlign: "center", fontSize: "2em"}}>{recipe.title}</h1>
</div>

recipeCards.push(recipeCardHTML)
}

const searchAllFood = async (ingredient) => {
await fetch('http://localhost:3002/searchAllFood', {
method: 'POST',
body: JSON.stringify({
 ingredient: ingredient,
}),
headers: {
'Content-type': 'application/json; charset=UTF-8',
},
})
.then((response) => response.json())
.then((data) => {
  console.log(data)
let spoonacularRecipes = data.results
console.log(spoonacularRecipes)
let smallerRecipeObjects = []
for(let i =0; i < spoonacularRecipes.length; i++){
let smallRecipeObject = new Recipe(spoonacularRecipes[i])
smallerRecipeObjects.push(smallRecipeObject)
}
setRecipeData(smallerRecipeObjects)
})
.catch((err) => {
console.log(err.message);
});
};


function Recipe(spoonacularRecipe) {
this.title = spoonacularRecipe.title;
this.image = spoonacularRecipe.image;
 this.readyInMinutes = spoonacularRecipe.readyInMinutes;
// this.categories = [
// spoonacularRecipe.vegetarian ? "vegetarian" : null,
// spoonacularRecipe.vegan ? "vegan" : null,
// spoonacularRecipe.glutenFree ? "glutenFree" : null,
// spoonacularRecipe.dairyFree ? "dairyFree" : null
// ].filter(Boolean);
// this.instructions = spoonacularRecipe.instructions;
// this.ingredients =
// spoonacularRecipe.extendedIngredients.map(ingredient =>
// ingredient.original);
}


useEffect(function(){
fetch("http://localhost:3002/recipes")
.then(response => response.json())
.then((data) => {
let spoonacularRecipes = data.recipes

let smallerRecipeObjects = []


for(let i =0; i < spoonacularRecipes.length; i++){
let smallRecipeObject = new Recipe(spoonacularRecipes[i])
smallerRecipeObjects.push(smallRecipeObject)
}

setRecipeData(smallerRecipeObjects)
})

}, [])

useEffect(() => {
  fetchRandomRecipe();
}, []);

const fetchRandomRecipe = async () => {
  try {
    // Fetch a random recipe from your API
    const response = await fetch("http://localhost:3002/randomRecipes");
    if (!response.ok) {
      throw new Error("Failed to fetch random recipe");
    }
    const data = await response.json();
    setRecipeOfTheDay(data.recipe);
  } catch (error) {
    console.error("Error fetching random recipe:", error);
  }
};

return (
<div >
<Header searchAllFood={searchAllFood}/>

{recipeOfTheDay && (
        <div>
          <h2>Recipe of the Day</h2>
          <div>
            <img src={recipeOfTheDay.image} alt={recipeOfTheDay.title} style={{ width: "300px", height: "300px", objectFit: "cover" }} />
            <h3>{recipeOfTheDay.title}</h3>
          
          </div>
        </div>
      )}


<div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '20px',
          padding: '20px',
          boxSizing: 'border-box',
        }}
      >
        {recipeData.map((recipe, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #red',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <h2>{recipe.title}</h2>
            <img
              src={recipe.image}
              alt={recipe.title}
              style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
            <p>Ready in {recipe.readyInMinutes} minutes</p>
          </div>
        ))}
      </div>
</div>
);
}

export default App;

// import React, { useEffect } from "react";
// import { useState } from "react";
// import Header from "./Header";
// import recipeData from "./recipes.json"

// function App() {
//   const [recipeData, setRecipeData] = useState([])
  
  
//   let recipeCards = []

//   for(let i = 0; i < recipeData.length; i+=1){
    
//     let recipe = recipeData[i]
//     console.log(recipe)

    
//     let recipeCardHTML = <div className="recipeCard" style={{border: "3px solid red", width: "200px", height: "200px", margin: "2%" }}>
//                               <img src={recipe.image} style={{height: "100%"}}  />
//                             <h1 style={{textAlign: "center", fontSize: "2em"}}>{recipe.title}</h1>
//                          </div>

    
//     recipeCards.push(recipeCardHTML)
//   }

//   function Recipe(spoonacularRecipe) {
//     this.title = spoonacularRecipe.title;
//     this.image = spoonacularRecipe.image;
//     this.readyInMinutes = spoonacularRecipe.readyInMinutes;
//     this.categories = [
//         spoonacularRecipe.vegetarian ? "vegetarian" : null,
//         spoonacularRecipe.vegan ? "vegan" : null,
//         spoonacularRecipe.glutenFree ? "glutenFree" : null,
//         spoonacularRecipe.dairyFree ? "dairyFree" : null
//     ].filter(Boolean); 
//     this.instructions = spoonacularRecipe.instructions;
//     this.ingredients = spoonacularRecipe.extendedIngredients.map(ingredient => ingredient.original);
// }


// useEffect(function(){
  
//   fetch("http://localhost:3001/recipes")
//     .then(response => response.json())
//     .then((data) => {
//       let spoonacularRecipes = data.recipes

//       let smallerRecipeObjects = []


      
//       for(let i =0; i < spoonacularRecipes.length; i++){
//         let smallRecipeObject = new Recipe(spoonacularRecipes[i])
//         smallerRecipeObjects.push(smallRecipeObject)
//       }

//       setRecipeData(smallerRecipeObjects)
//     })  

// }, [])
//   return (
//         <div >
//           <Header/>
          
//           <div style={{display: "flex", justifyContent: "space-evenly"}}>
//             {recipeCards}
//           </div>
//         </div>
//     );
// }

// export default App;



//https://api.spoonacular.com/recipes/random?apiKey=be9afbef553e4e318438dd2b4434f151
