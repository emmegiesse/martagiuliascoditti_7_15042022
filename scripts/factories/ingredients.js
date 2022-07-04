//Eléments du DOM
const ingList = document.querySelector(".ingredientsList");
let ingredientsTagSelect = [];

function ingDisplay (recipesOn) {
    let ingMatch = getIngredients(recipesOn); // crée un tableau avec les ingredients des recettes affichées
    ingredientsListDOM(ingMatch); // crée il dropdown des ingredients
}

//Function pour récupère les ingredients des recettes 
function getIngredients(recipes) { 
    let ingredients = [];
    recipes.forEach((recipe) => {
        recipe.ingredients.forEach((ing) => {
            if (!ingredients.includes(ing.ingredient))
            ingredients.push(ing.ingredient);
        });
    });
    return ingredients;
};

// récupère les ingredients et crée les éléments du dropdown
function ingredientsListDOM (ingredients) {
    ingList.style.display = "none";
    let ul = document.createElement("ul");
    ul.setAttribute("class","listIng");
    ingList.innerHTML = "";
    ingList.appendChild(ul); 

    // ne crée pas les éléments du dropdpwn si le tag a été selectionné
    if (ingredientsTagSelect.length > 0) {
        ingredients = ingredients.filter((el) => !ingredientsTagSelect.includes(el.replace(/\s/g,"")))
    }

    ingredients.forEach((ingredient) => { // création de la liste des ingrédients du dropdown
        let listIngredients = document.createElement("li");
        listIngredients.setAttribute("class","ingListItem")
        listIngredients.setAttribute("data-filter", `${ingredient}`);
        listIngredients.innerHTML = `<button class="ingChoiseListToTag" id="btn-${ingredient}" value="ingredient"> ${ingredient}`
        ul.appendChild(listIngredients);
    });

    const btnIngredients = document.getElementsByClassName ("ingChoiseListToTag");      
    const arrayBtnIngredients = Array.from(btnIngredients);
    arrayBtnIngredients.forEach ((el)=> {
        el.onclick = () => {
            let tagWithoutSpace = el.textContent.replace(/\s/g,"");
            ingredientsTagSelect.push(tagWithoutSpace);
            buildTags (tagsBar, el.textContent, "ingredients");
            recipesMatch = searchByIngTags(recipesMatch, ingredientsTagSelect);
            closeDropdownAll ()
            displayRecipes (recipesMatch);
            ingDisplay (recipesMatch);
            appDisplay (recipesMatch);
            ustDisplay (recipesMatch);
        }
    })
    return recipesMatch;
};
