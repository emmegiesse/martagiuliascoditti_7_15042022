// Récupère et crée la gallerie des recettes - réf fonction dans /factories_function/recipes.js
function displayData(recipes) {
    const recipesSection = document.getElementById('recipesGallery');
    recipesSection.innerHTML = "";
    recipes.forEach((recipes) => {
        const recipesModel = recipesFactory(recipes);
        const recipesCardDOM = recipesModel.getRecipeCardDOM(recipesSection);
    });
};

// Définition de la fonction search -- > récupere seulement les recettes filtrées dans la barre principale
function search (recipes, word) {
    let recipesFilter = [];
    for (let i = 0; i < recipes.length; i++) {
        if (recipes[i].name.toLowerCase().includes(word.toLowerCase())
        ||recipes[i].description.toLowerCase().includes(word.toLowerCase()))
        //||recipes[i].ingredients.some(elt => elt.ingredient.toLowerCase().includes(word))) 
        {recipesFilter.push(recipes[i])
        }
        else {
            let isAdded = false;
            for (let j=0; j < recipes[i].ingredients.length ; j++){
                if (recipes[i].ingredients[j].ingredient.toLowerCase().includes(word.toLowerCase())&&isAdded==false){
                    isAdded = true;
                    recipesFilter.push(recipes[i])
                }
            }
        }
    }
    return recipesFilter;
};

function init() {
    // Récupère les datas des recettes avec une recherche dans la barre principale
    displayData(recipes);
    getAllIngredients(recipes);
    getAllAppliances(recipes);
    getAllUstensils(recipes);
    const searchBar = document.getElementById('searchBarInput');
    searchBar.onchange = function (event) {
        console.log(event.target.value);
        const word = event.target.value; 
        if (word.length >= 3) {
            let recipesFilter = search (recipes, word);
            displayData(recipesFilter);
            console.log(recipesFilter)
            console.log(recipesFilter.length)
            let ingredientsMatch = getAllIngredients(recipesFilter);
            fillIngredients(ingredientsMatch);
            getAllAppliances(recipesFilter);
            getAllUstensils(recipesFilter);
            console.log(getAllIngredients)
        }
        else {
            displayData(recipes);
            
        }
    }
};

/*
cons button 
let ingredientsExample = document.getElementById('ingredientsExample');

function fillIngredients(ingredients) {
    let ul = document.createElement('ul');
    ul.classList.add('listUlIng');
    this.ingredientsExample.appendChild(ul);

    ingredients.forEach((ingredient) => {
        let listIngredients = document.createElement('li');
        
        ul.appendChild(listIngredients);
        listIngredients.innerHTML = `${Utils.upperText(ingredient)}`
        listIngredients.classList.add('list-ingredients');
        listIngredients.setAttribute('data-filter', `${ingredient}`);
    });
}
*/

init()


