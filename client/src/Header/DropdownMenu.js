import { useState } from "react";

function DropdownMenu() {
    // State to manage dropdown visibility
    const [isOpen, setIsOpen] = useState(false);
 
    // Toggle dropdown visibility
    const toggleDropdown = () => setIsOpen(!isOpen);
 
    return (
        <div className="nav-menu-module">
            <div className="relative">
            <button
                className="dropdown-header -mr-6 md:-mr-4 p-1 rounded-full text-gray-900 border-gray-900 transition-colors duration-100"
                style={{ borderWidth: "2px" }}
                onClick={toggleDropdown} // Toggle on click
            >
                <svg
                className="size-4 svg-stroke"
                viewBox="0 0 24 24"
                style={{ strokeWidth: 3 }}
                >
                <path d="M19 9l-7 7-7-7"></path>
                </svg>
            </button>
            {/* Conditionally render the dropdown content based on isOpen state */}
            {isOpen && (
                <ul className="absolute z-10 bg-white shadow-lg  mt-2">
                <li><a className="block p-2 hover:bg-gray-100" href="/">Recipes</a></li>
                <li><a className="block p-2 hover:bg-gray-100" href="/about">About</a></li>
        
        
                </ul>
            )}
            </div>
        </div>
   );
 }

 export default DropdownMenu