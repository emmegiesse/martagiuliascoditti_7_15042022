//Eléments du DOM
const appList = document.querySelector(".appliancesList");
let appliancesTagSelect = [];

function appDisplay (recipesOn) {
    let appMatch = getAppliances(recipesOn); // crée un tableau avec les appareils
    appliancesListDOM(appMatch); // crée il dropdown des appareils 
}

//Function pour récupère les appareils des recettes --> OK
function getAppliances(recipes) {
    let appliances = [];
    recipes.forEach((recipe) => {
        if (!appliances.includes(recipe.appliance))
        appliances.push(recipe.appliance);
    });
    return appliances;
};

// récupère les appareils et crée les éléments du dropdown
function appliancesListDOM (appliances) {
    appList.style.display = "none";
    let ul = document.createElement("ul");
    ul.setAttribute("class","listApp");
    appList.innerHTML = "";
    appList.appendChild(ul); 

    // ne crée pas les éléments du dropdpwn si le tag a été selectionné
    if (appliancesTagSelect.length > 0) {
        appliances = appliances.filter((el) => !appliancesTagSelect.includes(el.replace(/\s/g,"")))
    }
    
    appliances.forEach((appliance) => { // création de la liste des appareils du dropdown
        let listAppliances = document.createElement("li");
        listAppliances.setAttribute("class","appListItem")
        listAppliances.setAttribute("recipes-filter", `${appliance}`);
        listAppliances.innerHTML = `<button class="appChoiseListToTag" id="btn-${appliance}" value="appliance"> ${appliance}`
        ul.appendChild(listAppliances);
    });

    const btnAppliances = document.getElementsByClassName ("appChoiseListToTag");        
    const arrayBtnAppliances = Array.from(btnAppliances);
    arrayBtnAppliances.forEach ((el)=> {
        el.onclick = () => {
            let tagWithoutSpace = el.textContent.replace(/\s/g,"");
            appliancesTagSelect.push(tagWithoutSpace);
            buildTags (tagsBar, el.textContent, "appliances", appliancesTagSelect);
            recipesMatch = searchByAppTags(recipesMatch, appliancesTagSelect);
            closeDropdownAll ()
            displayRecipes (recipesMatch);
            ingDisplay (recipesMatch);
            appDisplay (recipesMatch);
            ustDisplay (recipesMatch);
        }
    })
    return recipesMatch;
}

