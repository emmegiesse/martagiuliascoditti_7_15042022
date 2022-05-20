// déclaration des constantes
let hiddenIngredientsFilter = document.getElementById("hiddenIngredientsFilter")
let ingredientsList = document.getElementById("ingredientsList");
let ingredientsTagSelect = [];

// récupère les ingredients et crée les éléments du dropdown --> OK
function fillIngredients(ingredients) {
    //console.log(ingredients)
    hiddenIngredientsFilter.style.display = "block";
    clear(ingredientsList);

    let ul = document.createElement("ul");
    ul.setAttribute("class","listIng");
    ingredientsList.appendChild(ul);

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
        let ingredientTag = document.getElementById('ingredientTag');
        //buildTags (ingredientTag, el.textContent);
        ingredientTagSelect.push(el.textContent)
        buildTags (ingredientTag, el.textContent, "ingredients");
        //console.log(selectedIngTag);
        //tagsBar.innerHTML += selectedIngTag;
        search (ingredientsTagSelect);
    }
    });

    // Recherche par tag
function filterTags(recipes) {
    let selected = [];
    let ingredientTag = document.getElementById('ingredientTag');

    document.querySelector('#ingredientsList').addEventListener('click', (event) => {
        let classValue = event.target.classList.value;

        if (-1 === classValue.indexOf('selected')) {
            event.target.classList.add('selected');
            selected.push(event.target.getAttribute('data-filter'));
            
            hideButtonsOnClick(document.querySelector("#ingredients > button"),
                document.querySelector("#openIngredientsFilter"),
                document.querySelector("#hiddenIngredientsFilter"))

            //buildTags(ingredientTag, event.target.getAttribute('data-filter'));
            //removeTagsOnClick(document.querySelector("#ingredientTag > i"), event, ingredientTag, recipes);
            //document.getElementById('mainContent').innerHTML = ''; //clearRecipesSection
            /*let result = searchByIngTags(recipes, selected);
            displayData(result);
            ingredientsList.innerHTML = ''; 
            fillIngredients (getAllIngredients(result));*/
        } else {
            resetSection(event, ingredientTag, recipes);
        };
    });
    return selected;
}
}