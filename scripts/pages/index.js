function init() {
    displayData(recipes); // affiche toutes les recettes -- > factories/recipes.js
    
    getIngredients(recipes); // crée un tableau avec tous les ingredients -- > utilities/ingredients.js
    let ingredientsAll = getIngredients(recipes); 
    //console.log(ingredientsAll)
    displayIngredients(ingredientsAll); // crée il dropdown des ingredients pour toutes les recettes -- > factories/ingredients.js
    searchInput(ingredientsAll);

   /* getAppliances(recipes); // crée un tableau avec tous les appareils -- > utilities/appliances.js
    let appliancesAll = getAppliances(recipes); 
    //console.log(appliancesAll)
    displayAppliances(appliancesAll); // crée il dropdown des appareils pour toutes les recettes -- > factories/appliances.js
    searchInput(appliancesAll);
    */

    /*
    getUstensils(recipes); // crée un tableau avec tous les ustensiles -- > utilities/ustensils.js
    let ustensilsAll = getUstensils(recipes); 
    console.log(ustensilsAll)
    displayUstensils(ustensilsAll); // crée il dropdown des ustensiles pour toutes les recettes -- > factories/ustensils.js
    searchInput(usensilsAll);
    */

    // Appel de la fonction de recherche dans la barre principale -- > utilities/search.js
    const searchBar = document.getElementById('searchBarInput');  
    searchBar.onchange = function (event) {
        //console.log(event.target.value);
        const input = event.target.value;

        if (input.length >= 2) { // demarre la recherche après 2 caractères
            let recipesMatch = mainSearch (recipes, input); 
            displayData(recipesMatch); // affiche les recettes filtrées -- > factories/recipes.js
            //console.log(recipesMatch)

            let ingredientsMatch = getIngredients(recipesMatch); // crée un tableau avec tous ingredeints des recettes filtrées -- > utilities/filters.js
            displayIngredients(ingredientsMatch); // crée le dropdown des ingredeints des recettes filtrées -- > factories/filters.js
            //console.log(ingredientsMatch);
            searchInput(ingredientsMatch);
            displayData(recipesMatch);
        }
        else {
            displayData(recipes);
        }
    };
};

init() //appelle la function init