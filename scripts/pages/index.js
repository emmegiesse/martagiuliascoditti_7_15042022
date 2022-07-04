function init() {
    displayRecipes(recipes); // Toutes les recettes

    arrows.forEach(arrow => arrow.addEventListener("click", openDropdown)); // Affichage du menu de dropdown au clic du chevron
    let ingredients = ingDisplay(recipes);
    let appliances = appDisplay(recipes);
    let ustensils = ustDisplay(recipes);
    
    const alert = document.querySelector('.alertMessage');
    const mainSearchInput = document.getElementById("searchBarInput");
    mainSearchInput.addEventListener("input",() => {
        const inputMain = mainSearchInput.value;

        if (inputMain.length >= 3) { // demarre la recherche après 3 caractères
            alert.style.display ='none';
            recipesSection.innerHTML = "";
            recipesMatch = mainSearch (recipes, inputMain); 
            if(recipesMatch == 0) {
                alert.style.display ="block";
                alert.textContent = 'Aucune recette ne correspond à votre critère...vous pouvez chercher "tarte aux pommes", "poisson" etc.';
              }
            else{
                displayRecipes(recipesMatch); // affiche les recettes filtrées avec l"input dans la barre principale
                console.log(recipesMatch)
            }
        }
        else {
            alert.style.display ="block";
            alert.textContent = "Veuillez entrer au moins 3 caractères";
            displayRecipes(recipes);
            recipesMatch = recipes; // affiche toutes les recettes
            
        }

        ingredients = ingDisplay(recipesMatch);
        appliances = appDisplay(recipesMatch);
        ustensils = ustDisplay(recipesMatch);
    })

    ingInputFilter.addEventListener("input", openDropdown, searchInput()); // Affichage du menu dropdown à l'écriture d'un texte dans la barre du filtre ingredients et lance la recherche
    appInputFilter.addEventListener("input", openDropdown, searchInput()); // Affichage du menu dropdown à l'écriture d'un texte dans la barre du filtre appareils et lance la recherche   
    ustInputFilter.addEventListener("input", openDropdown, searchInput()); // Affichage du menu dropdown à l'écriture d'un texte dans la barre du filtre ustensils et lance la recherche
}

init();