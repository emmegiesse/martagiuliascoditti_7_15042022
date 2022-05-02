//Récupère tous les ingredients 
function getAllIngredients(recipes) {
    let ingredients = [];
        recipes.forEach((recipe) => {
            recipe.ingredients.forEach((ing) => {
                if (!ingredients.includes(ing.ingredient))
                    ingredients.push(ing.ingredient);
            });
        });
        console.log(ingredients);
    return ingredients;
};

//Récupère tous les appareils 
function getAllAppliances(recipes) {
    let appliances = [];
        recipes.forEach((recipe) => {
                if (!appliances.includes(recipe.appliance))
                    appliances.push(recipe.appliance);
            });
        console.log(appliances);
    return appliances;
};

//Récupère tous les ustensils
function getAllUstensils(recipes) {
    let ustensils = [];
        recipes.forEach((recipe) => {
            recipe.ustensils.forEach((ustensil) => {
                if (!ustensils.includes(ustensil))
                ustensils.push(ustensil);
        });
    });
    console.log(ustensils);
    return ustensils;
}
