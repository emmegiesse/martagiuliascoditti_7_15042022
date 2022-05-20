//Function pour récupère les appareils des recettes --> OK
function getAppliances(recipes) {
    let appliances = [];
        recipes.forEach((recipe) => {
            if (!appliances.includes(recipe.appliance))
                appliances.push(recipe.appliance);
        });
    //console.log(appliances);
    return appliances;
};

