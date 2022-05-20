// Définition de la fonction search dans la barre principale -- > OK
function mainSearch (recipes, input) {
    let recipesFilter = []; // tableau des recettes filtrées
    for (let i = 0; i < recipes.length; i++) {
        if (recipes[i].name.toLowerCase().includes(input.toLowerCase())
        ||recipes[i].description.toLowerCase().includes(input.toLowerCase()))
        //||recipes[i].ingredients.some(elt => elt.ingredient.toLowerCase().includes(word))) 
        {recipesFilter.push(recipes[i])
        }
        else {
            let isAdded = false;
            for (let j=0; j < recipes[i].ingredients.length ; j++){
                if (recipes[i].ingredients[j].ingredient.toLowerCase().includes(input.toLowerCase())&&isAdded==false){
                    isAdded = true;
                    recipesFilter.push(recipes[i])
                }
            }
        }
    }
    //console.log(recipesFilter)
    return recipesFilter;
};

// Définition de la fonction search dans les barres ingredients, ustensils et appareils
function searchInputFilters (filter, input) {
    let filterMatch = []; // tableau des ingredients, ustensils et appreils filtrés 
    filter.forEach (elt => {
        //console.log(elt)
        if (normalizeText(elt).includes(normalizeText(input))){
            filterMatch.push(elt)
        }
    })
    //console.log(filterMatch)
    return filterMatch;
}

// Active la recherche avec input dans la barre du dropdown
function searchInput(ingredients, appliances, ustensils) {
    
    const searchIngredients = document.getElementById('inputIngredients'); // recherche filtre ingredients
    searchIngredients.onchange = function (event) {
        let ingSearch = event.target.value;
        //console.log(event.target.value);
        if (ingSearch.length > 2) {
            clear (ingredientsList);
            //console.log(ingredientsList)
            let ingFilterMatch = searchInputFilters(ingredients, ingSearch)
            fillIngredients (ingFilterMatch)
            //console.log(ingFilterMatch)
            displayIngredients ();
        }
        else {
            fillIngredients (ingredients)
        }
    }

// recherche pour tag des ingredients 
function searchByIngTags(recipes, tagIng) {
    let resultIng = [];
    for (let i = 0; i < recipes.length; i++) {
        if (recipes[i].ingredients.includes(tagIng)){
        /*recipes.forEach(recipe => {
        if (recipe.ingredients.some(elt => normalizeText(elt.ingredient).includes(tagIng))) {*/
            resultIng.push(recipe);
        }
    }; 
    //console.log(resultIng)
    return resultIng;
 }



}