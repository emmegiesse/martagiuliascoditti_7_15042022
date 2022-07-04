//Eléments du DOM
const ustList = document.querySelector(".ustensilsList");
let ustensilsTagSelect = [];

function ustDisplay (recipesOn) {
    let ustMatch = getUstensils(recipesOn); // crée un tableau avec les appareils
    ustensilsListDOM(ustMatch); // crée il dropdown des appareils
}

//Function pour récupère les ustensils des recettes
function getUstensils(recipes) {
    let ustensils = [];
    recipes.forEach((recipe) => {
        recipe.ustensils.forEach((ustensil) => {
            if (!ustensils.includes(ustensil))
            ustensils.push(ustensil);
        });
    });
return ustensils;
}

// récupère les ustensils et crée les éléments du dropdown
function ustensilsListDOM (ustensils) {
    ustList.style.display = "none";
    let ul = document.createElement("ul");
    ul.setAttribute("class","listUst");
    ustList.innerHTML = "";
    ustList.appendChild(ul); 

    // ne crée pas les éléments du dropdpwn si le tag a été selectionné
    if (ustensilsTagSelect.length > 0) {
        ustensils = ustensils.filter((el) => !ustensilsTagSelect.includes(el.replace(/\s/g,"")))
    }

    ustensils.forEach((ustensil) => {
        let listUstensils = document.createElement("li");
        listUstensils.setAttribute("class","ustListItem")
        listUstensils.setAttribute("recipes-filter", `${ustensil}`);
        listUstensils.innerHTML = `<button class="ustChoiseListToTag" id="btn-${ustensil}" value="ustensil"> ${ustensil}`
        ul.appendChild(listUstensils);
    });

    const btnUstensils = document.getElementsByClassName ("ustChoiseListToTag");        
    const arrayBtnUstensils = Array.from(btnUstensils);
    arrayBtnUstensils.forEach ((el)=> {
        el.onclick = () => {
            let tagWithoutSpace = el.textContent.replace(/\s/g,"");
            ustensilsTagSelect.push(tagWithoutSpace);
            buildTags (tagsBar, el.textContent, "ustensils");
            recipesMatch = searchByUstTags(recipesMatch, ustensilsTagSelect);
            closeDropdownAll ()
            displayRecipes (recipesMatch);
            ingDisplay (recipesMatch);
            appDisplay (recipesMatch);
            ustDisplay (recipesMatch);
        }
    })
    return recipesMatch;
}



