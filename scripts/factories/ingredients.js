//Eléments du DOM
const ingList = document.querySelector(".ingredientsList");
let ingredientsTagSelect = [];

function ingDisplay (recipesOn) {
    console.log("ingDisplay")
    let ingMatch = getIngredients(recipesOn); // crée un tableau avec les ingredients
    ingredientsListDOM(ingMatch); // crée il dropdown des ingredients
    //console.log(ingMatch); 
}

//Function pour récupère les ingredients des recettes 
function getIngredients(recipes) { 
    //console.log(recipes);
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

// récupère les ingredients et crée les éléments du dropdown
function ingredientsListDOM (ingredients) {
    //console.log(ingredients);
    ingList.style.display = "none";
    let ul = document.createElement("ul");
    ul.setAttribute("class","listIng");
    ingList.innerHTML = "";
    ingList.appendChild(ul); 

    if (ingredientsTagSelect.length > 0){
        ingredients = ingredients.filter((el) => !ingredientsTagSelect.includes(el.replace(/\s/g,"")))
    }
    console.log(ingredients);
    console.log(ingredientsTagSelect);
    ingredients.forEach((ingredient) => {
        let listIngredients = document.createElement("li");
        listIngredients.setAttribute("class","ingListItem")
        listIngredients.setAttribute("data-filter", `${ingredient}`);
        listIngredients.innerHTML = `<button class="ingChoiseListToTag" id="btn-${ingredient}" value="ingredient"> ${ingredient}`
        ul.appendChild(listIngredients);
    });

    const btnIngredients = document.getElementsByClassName ("ingChoiseListToTag");        
    const arrayBtnIngredients = Array.from(btnIngredients);
    //console.log(Array.from(btnIngredients))

    arrayBtnIngredients.forEach ((el)=> {
        //console.log(el.textContent)
        el.onclick = () => {
            let tagWithoutSpace = el.textContent.replace(/\s/g,"");
            //console.log(tagWithoutSpace);
            ingredientsTagSelect.push(tagWithoutSpace);
            console.log(ingredientsTagSelect)
            buildTags (tagsBar, el.textContent, "ingredients", ingredientsTagSelect);
            recipesMatch = searchByIngTags(recipesMatch, ingredientsTagSelect);
            //console.log(recipesMatch);
            displayRecipes (recipesMatch);
            //getIngredients(recipesMatch);
            ingDisplay (recipesMatch);
        }
    })
    return recipesMatch;
};
