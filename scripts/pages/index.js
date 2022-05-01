function displayData(recipes) {
    const recipesSection = document.getElementById('recipesGallery');
    recipesSection.innerHTML = "";
    recipes.forEach((recipes) => {
        const recipesModel = recipesFactory(recipes);
        const recipesCardDOM = recipesModel.getRecipeCardDOM(recipesSection);
        //recipesSection.appendChild(recipesCardDOM);
    });
};

function search (recipes, word) {
    let recipesFilter = [];
    for (let i = 0; i < recipes.length; i++) {
        if (recipes[i].name.toLowerCase().includes(word.toLowerCase())) {
            recipesFilter.push(recipes[i])
        }
        else if (recipes[i].description.toLowerCase().includes(word.toLowerCase())) {
            recipesFilter.push(recipes[i])
        }
    }
    displayData(recipesFilter);
};

function init() {
    // Récupère les datas des recettes
    displayData(recipes);
    const searchBar = document.getElementById('searchBarInput');
    searchBar.onchange = function (event) {
        console.log(event.target.value);
        const word = event.target.value; 
        if (word.length >= 3) {
            search (recipes, word);
        }
        else {
            displayData(recipes);
        }
    }
};

init();


