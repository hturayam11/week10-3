import {useState} from 'react'


function SearchBar({ placeholder, searchAllFood }) {
const [ingredient, setIngredient] = useState("")

// const findByIngredients = async (ingredients) => {
// await fetch('/findByIngredients', {
// method: 'POST',
// body: JSON.stringify({
// ingredients: ingredients
// }),
// headers: {
// 'Content-type': 'application/json; charset=UTF-8',
// },
// })
// .then((response) => response.json())
// .then((data) => {
// setPosts((posts) => [data, ...posts]);
// setTitle('');
// setBody('');
// })
// .catch((err) => {
// console.log(err.message);
// });
// };
const handleSubmit = (e) => {
e.preventDefault();
searchAllFood(ingredient);
};
return <div className="search-box-module">
<div className="pb-4 cd-3:pb-0">
<form onSubmit={handleSubmit} className="search-form w-full relative" >
<input
className="search-text py-2 pl-10 pr-4"
type="text"
maxLength="100"
autoComplete="off"
autoCorrect="off"
tabIndex="1"
placeholder={placeholder}
onChange={(e) => setIngredient(e.target.value)}
value={ingredient}


/>
<button type="submit">Submit</button>
</form>
</div>
</div>
}

export default SearchBar


// import {useState} from 'react'


// function SearchBar({ placeholder }) {
//   const [ingredients, setIngredients] = useState("")

//   const findByIngredients = async (ingredients) => {
//     await fetch('/findByIngredients', {
//        method: 'POST',
//        body: JSON.stringify({
//           ingredients: ingredients
//        }),
//        headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//        },
//     })
//        .then((response) => response.json())
//        .then((data) => {
//           setPosts((posts) => [data, ...posts]);
//           setTitle('');
//           setBody('');
//        })
//        .catch((err) => {
//           console.log(err.message);
//        });
//  };
 
//  const handleSubmit = (e) => {
//     e.preventDefault();
//     findByIngredients(ingredients);
//  };
//     return <div className="search-box-module">
//             <div className="pb-4 cd-3:pb-0">
//               <form onSubmit={handleSubmit} className="search-form w-full relative" >
//                 <input
//                   className="search-text py-2 pl-10 pr-4"
//                   type="text"
//                   maxLength="100"
//                   autoComplete="off"
//                   autoCorrect="off"
//                   tabIndex="1"
//                   placeholder={placeholder}
//                   onChange={(e) => setIngredients(e.target.value)}
//                   value={ingredients}
//                 />
//                 <button type="submit">Submit</button>
//               </form>
              
//             </div>
//           </div>
//   }

//export default SearchBar