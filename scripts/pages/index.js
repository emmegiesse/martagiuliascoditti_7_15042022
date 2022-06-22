function init() {
    displayRecipes(recipes);
    let ingredients = ingDisplay(recipes);
    let appliances = appDisplay(recipes);
    let ustensils = ustDisplay(recipes);
    
    searchBarInput.onchange = function (event) { // Fonction de recherche dans la barre principale
        const inputMain = event.target.value;
        if (inputMain.length >= 2) { // demarre la recherche après 2 caractères
            recipesSection.innerHTML = "";
            recipesMatch = mainSearch (recipes, inputMain); 
            displayRecipes(recipesMatch); // affiche les recettes filtrées avec l"input dans la barre principale
            //console.log(recipesMatch)
        }
        else {
            displayRecipes(recipes);
            recipesMatch = recipes; // affiche toutes les recettes
        }

        ingredients = ingDisplay(recipesMatch);
        appliances = appDisplay(recipesMatch);
        ustensils = ustDisplay(recipesMatch);
    }

    arrows.forEach(arrow => arrow.addEventListener("click", openDropdown)); // Affichage du menu de dropdown au clic du chevron
    ingInputFilter.addEventListener("input", openDropdown, searchInput()); // Affichage du menu dropdown à l'écriture d'un texte dans la barre du filtre ingredients et lance la recherche
    appInputFilter.addEventListener("input", openDropdown, searchInput()); // Affichage du menu dropdown à l'écriture d'un texte dans la barre du filtre appareils et lance la recherche   
    ustInputFilter.addEventListener("input", openDropdown, searchInput()); // Affichage du menu dropdown à l'écriture d'un texte dans la barre du filtre ustensils et lance la recherche
    
    ingredients = ingDisplay(recipesMatch);
    appliances = appDisplay(recipesMatch);
    ustensils = ustDisplay(recipesMatch);
    console.log (ingredients, appliances, ustensils)

}

init();