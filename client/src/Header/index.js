import React from "react";
import "./Header.css";
import { useState } from "react";
import SearchBar from "./SearchBar";
import DropdownMenu from "./DropdownMenu";

function Header({searchAllFood}){
return <div id="nav-header-block" className="flex w-full bg-white
border-b border-gray-200">
<div className="nav-container card-view">

<SearchBar placeholder="Search by recipe or ingredients..."
searchAllFood={searchAllFood}/>



<div className="header-logo-module">
<a href="/">
<h1 className="header-logo">Taste See</h1>
</a>
</div>

<DropdownMenu />
</div>
</div>
}


export default Header

// import React from "react";
// import "./Header.css";
// import { useState } from "react";
// import SearchBar from "./SearchBar";
// import DropdownMenu from "./DropdownMenu";

// function Header(){
//     return <div id="nav-header-block" className="flex w-full bg-white border-b border-gray-200">
//                 <div className="nav-container card-view">

//                     <SearchBar placeholder="Search by recipe or ingredients..." />

//                     <div className="header-logo-module">
//                         <a href="/">
//                         <h1 className="header-logo">Taste See</h1>
//                         </a>
//                     </div>

//                     <DropdownMenu />
//                 </div>
//             </div>
// }


// export default Header