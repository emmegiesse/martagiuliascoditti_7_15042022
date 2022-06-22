//Eléments du DOM
const ustList = document.querySelector(".ustensilsList");
let ustensilsTagSelect = [];

function ustDisplay (recipesOn) {
    let ustMatch = getUstensils(recipesOn); // crée un tableau avec les appareils
    ustensilsListDOM(ustMatch); // crée il dropdown des appareils
    //console.log(ustMatch); 
}

//Function pour récupère les ustensils des recettes
function getUstensils(recipes) {
    //console.log(recipes);
    let ustensils = [];
    recipes.forEach((recipe) => {
        recipe.ustensils.forEach((ustensil) => {
            if (!ustensils.includes(ustensil))
            ustensils.push(ustensil);
        });
    });
    //console.log(ustensils);
return ustensils;
}

// récupère les ustensils et crée les éléments du dropdown
function ustensilsListDOM (ustensils) {
    ustList.style.display = "none";
    let ul = document.createElement("ul");
    ul.setAttribute("class","listUst");
    ustList.innerHTML = "";
    ustList.appendChild(ul); 

    ustensils.forEach((ustensil) => {
        let listUstensils = document.createElement("li");
        listUstensils.setAttribute("class","ustListItem")
        listUstensils.setAttribute("recipes-filter", `${ustensil}`);
        listUstensils.innerHTML = `<button class="ustChoiseListToTag" id="btn-${ustensil}" value="ustensil"> ${ustensil}`
        ul.appendChild(listUstensils);
    });

    const btnUstensils = document.getElementsByClassName ("ustChoiseListToTag");        
    const arrayBtnUstensils = Array.from(btnUstensils);
    //console.log(Array.from(btnUstensils))

    arrayBtnUstensils.forEach ((el)=> {
        //console.log(el.textContent)
        el.onclick = () => {
            let tagWithoutSpace = el.textContent.replace(/\s/g,"");
            //console.log(tagWithoutSpace);
            ustensilsTagSelect.push(tagWithoutSpace);
            //console.log(ustensilsTagSelect)
            buildTags (tagsBar, el.textContent, "ustensils");
            //recipesMatch = searchByUstTags(recipesMatch, ustensilsTagSelect);
            //console.log(recipesMatch);
            displayRecipes (recipesMatch);
        }
    })
    return recipesMatch;
}



