//Eléments du DOM
const arrows = document.querySelectorAll(".fas");

function closeDropdown(event) { //fonction de fermeture du dropdown
    //console.log (event.target.parentNode.parentNode)
    const arrowFromfilterOn = event.target.parentNode.parentNode.querySelector(".fas");
    const filterTag = event.target.parentNode.parentNode.querySelector(".listToTags");
    const filterOn = event.target.parentNode.parentNode;
    const dropdownOn = event.target.parentNode.parentNode.querySelector(".dropdown");
    const inputSearchOn = event.target.parentNode.parentNode.querySelector(".dropdownSearchInput");

    arrowFromfilterOn.classList.replace("fa-angle-up", "fa-angle-down");
    filterTag.style.display = "none";
    
    filterOn.style.animation = "dropdown-reverse 0.3s both";
    filterOn.style.width = "170px";
    dropdownOn.style.borderRadius = "5px";

    if (inputSearchOn.className.includes("ingredients")) {
        inputSearchOn.setAttribute("placeholder", "Ingredients");
    } else if (inputSearchOn.className.includes("appliances")) {
        inputSearchOn.setAttribute("placeholder", "Appliances");
    } else if (inputSearchOn.className.includes("ustensils")) {
        inputSearchOn.setAttribute("placeholder", "Ustensils");
    }

    arrows.forEach(arrow => arrow.removeEventListener("click", closeDropdown));
    arrows.forEach(arrow => arrow.addEventListener("click", openDropdown));
}

function closeDropdownAll () {
    let dropdowns = document.getElementsByClassName ("dropdownFilter");
    Array.from(dropdowns).forEach ((dropdown) => {
        let event = {target:{parentNode:{parentNode:dropdown}}}
        closeDropdown(event)
    })
}

//fonction d'ouverture et de fermeture du dropdown
function openDropdown (event) { //fonction d'ouverture du dropdown
    const filterOn = event.target.parentNode.parentNode;
    const arrowFromfilterOn = event.target.parentNode.parentNode.querySelector(".fas");
    const filterTag = event.target.parentNode.parentNode.querySelector(".listToTags");
    const dropdownOn = event.target.parentNode.parentNode.querySelector(".dropdown");
    const inputSearchOn = event.target.parentNode.parentNode.querySelector(".dropdownSearchInput");

    arrowFromfilterOn.classList.replace("fa-angle-down", "fa-angle-up");
    filterTag.style.display = "grid";
    
    filterOn.style.animation = "dropdown 0.3s both";
    filterOn.style.width = "600px";
    filterTag.style.borderRadius = "0px 0px 5px 5px";
    dropdownOn.style.borderRadius = "5px 5px 0px 0px";

    if (inputSearchOn.className.includes("ingredients")) {
        inputSearchOn.setAttribute("placeholder", "Rechercher un ingrédient");
    } else if (inputSearchOn.className.includes("appliances")) {
        inputSearchOn.setAttribute("placeholder", "Rechercher un appareil");
    } else if (inputSearchOn.className.includes("ustensils")) {
        inputSearchOn.setAttribute("placeholder", "Rechercher un ustensile");
    }

    arrows.forEach(arrow => arrow.removeEventListener("click", openDropdown));
    arrowFromfilterOn.addEventListener("click", closeDropdown)
}