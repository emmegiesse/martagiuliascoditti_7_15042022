function recipesFactory(data) {
    const { id, name, servings, ingredients, ingredient, quantity, unit, time, description, appliance, ustensils } = data ;

    function getRecipeCardDOM(recipesSection) {
        
        recipesSection.innerHTML += `   
            <article class='recipeArticle'>
                <div class='recipeCard'>
                    <h2 class='recipeName'>${name}</h2>
                    <span class='recipeTime'><i class='far fa-clock'></i>${time} min</span>
                </div>
                <div class='recipeInfo'>
                    <div class='recipeIngredients'>${ingredients.map(elt => `
                        <p><b>${elt.ingredient} </b>:
                        ${ 'quantity' in elt ? elt.quantity : ''}
                        ${ 'unit' in elt ? elt.unit: ''}</p>`).join(' ')}
                    </div>
                    <div class='recipeMethod'>
                        <span>${description}</span>
                    </div>
                </div>  
            </article>    
        `
    }

    return {getRecipeCardDOM}

}

// Récupère et crée la gallerie des recettes - réf fonction dans /factories_function/recipes.js
function displayData(recipes) {
    const recipesSection = document.getElementById('recipesGallery');
    recipesSection.innerHTML = "";
    recipes.forEach((recipes) => {
        const recipesModel = recipesFactory(recipes);
        const recipesCardDOM = recipesModel.getRecipeCardDOM(recipesSection);
    });
};



