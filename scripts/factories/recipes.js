const recipesSection = document.getElementById("recipesGallery"); //Elément du DOM

// Récupère et crée la gallerie des recettes --> appelée dans index.js
function displayRecipes(recipes) {
    recipesSection.innerHTML = "";
    recipes.forEach((recipes) => {
        const recipesModel = recipesFactory(recipes);
        const recipesCardDOM = recipesModel.getRecipeCardDOM(recipesSection);
    });
};

// Création de la card de la recette dans le DOM 
function recipesFactory(recipes) { 
    const { id, name, servings, ingredients, ingredient, quantity, unit, time, description, appliance, ustensils } = recipes ;
    
    function getRecipeCardDOM(recipesSection) {
        recipesSection.innerHTML += `   
            <article class="recipeCard">
                <div class="recipeImg"></div>
                <div class="recipeCardTitle">
                    <h1 class="recipeName">${name}</h1>
                    <span class="recipeTime"><i class="far fa-clock"></i>${time} min</span>
                </div>
                <div class="recipeInfo">
                    <div class="recipeIngredients">${ingredients.map(elt => `
                        <p class="cardIngredient"><b>${elt.ingredient} </b>:
                        ${ "quantity" in elt ? elt.quantity : ""}
                        ${ "unit" in elt ? elt.unit: ""}</p>`).join(" ")}
                    </div>
                    <div class="recipeMethod">
                        <span>${description}</span>
                    </div>
                </div>  
            </article>
        `
    }
    return {getRecipeCardDOM}
}
