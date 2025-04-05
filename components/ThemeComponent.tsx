import React, {useState, useEffect} from "react";

const ThemeToggle: React.FC = () => {
    const[darkMode, setDarkMode] = useState(true);

useEffect(()=>{
    if (darkMode){
        document.body.style.background = "#1e1e1e";  //Dark mode background
        document.body.style.color = "white"; //Dark mode text color
    } else {
        document.body.style.background = "#ffffff"; //Light mode background
        document.body.style.color = "black";  //Light mode text color
    }

    const header = document.getElementById("app-header");
    const filtersContainer = document.querySelector(".filters"); //entire filters div
    const filters = document.querySelectorAll("filters label"); //individual labels
    if (header){
        header.style.color=darkMode?"white" :"black";
    }

    if (filtersContainer){
        (filtersContainer as HTMLElement).style.background = darkMode ? "#292929" : "#ddd";
    }

    filters.forEach((filter)=> {
        (filter as HTMLElement).style.color = darkMode ? "white":"#333";
    });
}, [darkMode]);
    return(
        <button  className =" themeToggle" onClick={() => setDarkMode (!darkMode)}>

            {darkMode ? "Light Mode" :  "Dark Mode"}
            </button>
    );
        };

    export default ThemeToggle;