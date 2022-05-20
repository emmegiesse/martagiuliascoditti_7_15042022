//Function pour récupère les ustensils des recettes --> OK
function getUstensils(recipes) {
    let ustensils = [];
        recipes.forEach((recipe) => {
        if (!ustensils.includes(recipe.ustensils))
            ustensils.push(recipe.ustensils);
    });
    //console.log(appliances);
    return ustensils;
}

// Affiche/ferme la liste des ustensiles --> OK
function displayUstensils (ustensils) {
    const openDropdown = document.querySelector("#ustensils > button");
    const openUstensilsFilter = document.querySelector("#openUstensilsFilter");
    openUstensilsFilter.addEventListener ("click", (event) => { // affiche la liste dropdown avec clic sur le chevron 
        clear (ustensils);
        fillIngredients (ustensils);
        searchInput(ustensils);
    })
    const searchUstensils = document.getElementById('inputUstensils'); 
    const closeUstensilsFilter = document.querySelector("#closeUstensilsFilter");
    closeUstensilsFilter.addEventListener ("click", (event) => { // referme la liste dropdown avec clic sur le chevron 
        hiddenUstensilsFilter.style.display = "none";
        clear (searchUstensils);
    })
}