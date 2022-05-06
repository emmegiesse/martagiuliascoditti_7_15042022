function fillIngredients(ingredients) {
    console.log(ingredients)
    let ul = document.createElement('ul');
    ul.classList.add('listUlIng');
    let hiddenIngredientsFilter = document.getElementById('hiddenIngredientsFilter')
    hiddenIngredientsFilter.style.display = 'block'
    let ingredientsExample = document.getElementById('ingredientsExample');
    ingredientsExample.innerHTML = "";
    ingredientsExample.appendChild(ul);

    ingredients.forEach((ingredient) => {
        let listIngredients = document.createElement('li');
        //onclick -- genere tags
        ul.appendChild(listIngredients);
        listIngredients.innerHTML = `${ingredient}`
        listIngredients.classList.add('list-ingredients');
        listIngredients.setAttribute('data-filter', `${ingredient}`);
    });
}

function displayIngredients (ingredients) {
    const openList = document.querySelector("#ingredients > button")
    const openIngredientsFilter = document.querySelector("#openIngredientsFilter")
    openIngredientsFilter.addEventListener ('click', (event) => { 
        //launchButton ();
        fillIngredients (ingredients)
        console.log (fillIngredients)
    })
    const closeIngredientsFilter = document.querySelector("#closeIngredientsFilter")
    closeIngredientsFilter.addEventListener ('click', (event) => { 
        let hiddenIngredientsFilter = document.getElementById('hiddenIngredientsFilter')
        hiddenIngredientsFilter.style.display = 'none'
    })
}



