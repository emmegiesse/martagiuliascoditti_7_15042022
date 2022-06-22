// Définition de la fonction search dans la barre principale 
function mainSearch (recipes, input) {
    let recipesMatch = []; // tableau des recettes filtrées
    for (let i = 0; i < recipes.length; i++) { // Recherche dans nom , description, ingredient
        if (recipes[i].name.toLowerCase().includes(input.toLowerCase())
        ||recipes[i].description.toLowerCase().includes(input.toLowerCase()))
        //||recipes[i].ingredients.some(elt => elt.ingredient.toLowerCase().includes(word))) 
        /*const result = recipes.filter((recipe) => recipe.name.toLowerCase().includes(inputElement)
        || recipe.description.toLowerCase().includes(inputElement)
        || recipe.ingredients.some(item => item.ingredient.toLowerCase().includes(inputElement))*/
        {recipesMatch.push(recipes[i])}
        else {
            let isAdded = false;
            for (let j=0; j < recipes[i].ingredients.length ; j++){
                if (recipes[i].ingredients[j].ingredient.toLowerCase().includes(input.toLowerCase())&&isAdded==false){
                    isAdded = true;
                    recipesMatch.push(recipes[i])
                }
            }
        }
    }
    //console.log(recipesMatch)
    return recipesMatch;
};

// Définition de la fonction search dans les barres ingredients, ustensils et appareils
const ingInputFilter = document.getElementById("inputIngredients");
const appInputFilter = document.getElementById("inputAppliances");
const ustInputFilter = document.getElementById("inputUstensils");

function searchInputFilters (filter, input) {
    let filterMatch = []; // tableau des ingredients, ustensils et appreils filtrés 
    //console.log(filter)
    filter.forEach (elt => {
        //console.log(elt)
        if (normalizeText(elt).includes(normalizeText(input))){
            filterMatch.push(elt)
        }
    })
    //console.log(filterMatch)
    return filterMatch;
}

function searchInput() {
    // recherche filtre ingredients
    ingInputFilter.onchange = function (event) { 
        let ingSearch = event.target.value;
        //console.log(event.target.value);
        let ingredientsMatch; 
        if (ingSearch.length > 2) {
            ingredientsMatch = getIngredients(recipesMatch); 
            let ingFilterMatch = searchInputFilters(ingredientsMatch, ingSearch);
            ingredientsListDOM(ingFilterMatch)
        }   
        else {
            ingredientsMatch = getIngredients(recipes);
            ingDisplay(recipesMatch);
        }   
            openDropdown(event)
     }
    // recherche filtre appareils
    appInputFilter.onchange = function (event) { 
        let appSearch = event.target.value;
        //console.log(event.target.value);
        let appliancesMatch; 
        if (appSearch.length > 2) {
            appliancesMatch = getAppliances(recipesMatch); 
        }   
        else {
            appliancesMatch = getAppliances(recipes); 
        }   
        let appFilterMatch = searchInputFilters(appliancesMatch, appSearch);
            //console.log(appFilterMatch)
            appliancesListDOM(appFilterMatch)
            openDropdown(event)
     }

    // recherche filtre ustensils
    ustInputFilter.onchange = function (event) { 
        let ustSearch = event.target.value;
        //console.log(event.target.value);
        let ustensilsMatch; 
        if (ustSearch.length > 2) {
            ustensilsMatch = getUstensils(recipesMatch); 
        }   
        else {
            ustensilsMatch = getUstensils(recipes); 
        }   
        let ustFilterMatch = searchInputFilters(ustensilsMatch, ustSearch);
            //console.log(ustFilterMatch)
            ustensilsListDOM(ustFilterMatch)
            openDropdown(event)
     }
}

// recherche pour tag des ingredients 
function searchByIngTags(recipes, tagIng) {
    let resultIng = [];
    for (let i = 0; i < recipes.length; i++) {
        //console.log(recipes[i].ingredients)
        let currentIngredients = recipes[i].ingredients;
        let numbers = 0;
        currentIngredients.forEach(
            ing => {
                let currentIng = ing.ingredient.replace(/\s/g,"");
                if (tagIng.includes(currentIng))
                    {numbers++;}
                })
                if (numbers == tagIng.length)
                    {resultIng.push(recipes[i])}
                }; 
                console.log(resultIng)
                console.log(recipes)
                console.log(tagIng)
                return resultIng;
            }
            
            
            
            
            
            