// Définition de la fonction search dans la barre principale 
function mainSearch (recipes, input) {
    let recipesMatch = []; // tableau des recettes filtrées
    
    for (let i = 0; i < recipes.length; i++) { // Recherche dans nom , description, ingredient // ALGO 1
        if (recipes[i].name.toLowerCase().includes(input.toLowerCase())
        ||recipes[i].description.toLowerCase().includes(input.toLowerCase()))
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
    return recipesMatch;
};

// Définition de la fonction search dans les barres ingredients, ustensils et appareils
const ingInputFilter = document.getElementById("inputIngredients");
const appInputFilter = document.getElementById("inputAppliances");
const ustInputFilter = document.getElementById("inputUstensils");

function searchInputFilters (filter, input) {
        let filterMatch = []; // tableau des ingredients, ustensils et appreils filtrés 
    filter.forEach (elt => {
        if (normalizeText(elt).includes(normalizeText(input))){
            filterMatch.push(elt)
        }
    })
    return filterMatch;
}

function searchInput() {
    
    ingInputFilter.onchange = function (event) { // recherche filtre ingredients
        let ingSearch = event.target.value;
        let ingredientsMatch; 
        if (ingSearch.length > 3) {
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
     
    appInputFilter.onchange = function (event) { // recherche filtre appareils
        let appSearch = event.target.value;
        let appliancesMatch; 
        if (appSearch.length > 2) {
            appliancesMatch = getAppliances(recipesMatch); 
        }   
        else {
            appliancesMatch = getAppliances(recipes); 
        }   
        let appFilterMatch = searchInputFilters(appliancesMatch, appSearch);
            appliancesListDOM(appFilterMatch)
            openDropdown(event)
    }

    ustInputFilter.onchange = function (event) { // recherche filtre ustensils
        let ustSearch = event.target.value;
        let ustensilsMatch; 
        if (ustSearch.length > 2) {
            ustensilsMatch = getUstensils(recipesMatch); 
        }   
        else {
            ustensilsMatch = getUstensils(recipes); 
        }   
        let ustFilterMatch = searchInputFilters(ustensilsMatch, ustSearch);
            ustensilsListDOM(ustFilterMatch)
            openDropdown(event)
    }
}

// Fucntions de recherche des tags 
function searchByIngTags(recipes, tagIng) { // recherche pour tag des ingredients 
    let resultIng = [];
    if (tagIng.length>0) {
        for (let i = 0; i < recipes.length; i++) {
            let currentIngredients = recipes[i].ingredients;
            let numbers = 0;
            currentIngredients.forEach(ing => {
                let currentIng = ing.ingredient.replace(/\s/g,"");
                if (tagIng.includes(currentIng))
                {numbers++;}
            })
            if (numbers == tagIng.length)
            {resultIng.push(recipes[i])}
        }; 
    } else {
        resultIng = recipes
    }
return resultIng;
}

function searchByAppTags(recipes, tagApp) { //recherche pour tag appareils
    let resultApp = [];
    for (let i = 0; i < recipes.length; i++) {
        let currentAppliance = recipes[i].appliance;
        let numbers = 0;
        if (tagApp.includes(currentAppliance))
            {numbers++;}
        if (numbers == tagApp.length)
        {resultApp.push(recipes[i])}
    }; 
return resultApp;
}

function searchByUstTags(recipes, tagUst) {  // recherche pour tag des ustensils
    let resultUst = [];
    for (let i = 0; i < recipes.length; i++) {
        let currentUstensils = recipes[i].ustensils;
        let numbers = 0;
        currentUstensils.forEach(ust => {
            let currentUst = ust.replace(/\s/g,"");
            if (tagUst.includes(currentUst))
            {numbers++;}
        })
        if (numbers == tagUst.length)
        {resultUst.push(recipes[i])}
    }; 
return resultUst;
}
