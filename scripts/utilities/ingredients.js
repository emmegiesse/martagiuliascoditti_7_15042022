//Function pour récupère les ingredients des recettes --> OK
function getIngredients(recipes) { 
    let ingredients = [];
        recipes.forEach((recipe) => {
            recipe.ingredients.forEach((ing) => {
                if (!ingredients.includes(ing.ingredient))
                    ingredients.push(ing.ingredient);
            });
        });
    //console.log(ingredients);
    return ingredients;
};

// Affiche/ferme la liste des ingredients --> OK
function displayIngredients (ingredients) {
    const openDropdown = document.querySelector("#ingredients > button");
    const openIngredientsFilter = document.querySelector("#openIngredientsFilter");
    openIngredientsFilter.addEventListener ("click", (event) => { // affiche la liste dropdown avec clic sur le chevron 
        clear (ingredients);
        fillIngredients (ingredients);
        searchInput(ingredients);
    })
    const searchIngredients = document.getElementById('inputIngredients'); 
    const closeIngredientsFilter = document.querySelector("#closeIngredientsFilter");
    closeIngredientsFilter.addEventListener ("click", (event) => { // referme la liste dropdown avec clic sur le chevron 
        hiddenIngredientsFilter.style.display = "none";
        clear (searchIngredients);
    })
}






