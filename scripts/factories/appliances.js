//Eléments du DOM
const appList = document.querySelector(".appliancesList");
let applianceTag = document.getElementById("appliancesTags");
let appliancesTagSelect = [];

function appDisplay (recipesOn) {
    let appMatch = getAppliances(recipesOn); // crée un tableau avec les appareils
    appliancesListDOM(appMatch); // crée il dropdown des appareils
    //console.log(appMatch); 
}

//Function pour récupère les appareils des recettes --> OK
function getAppliances(recipes) {
    //console.log(recipes);
    let appliances = [];
    recipes.forEach((recipe) => {
        if (!appliances.includes(recipe.appliance))
        appliances.push(recipe.appliance);
    });
    //console.log(appliances);
    return appliances;
};

// récupère les appareils et crée les éléments du dropdown
function appliancesListDOM (appliances) {
    appList.style.display = "none";
    let ul = document.createElement("ul");
    ul.setAttribute("class","listApp");
    appList.innerHTML = "";
    appList.appendChild(ul); 

    appliances.forEach((appliance) => {
        let listAppliances = document.createElement("li");
        listAppliances.setAttribute("class","appListItem")
        listAppliances.setAttribute("recipes-filter", `${appliance}`);
        listAppliances.innerHTML = `<button class="appChoiseListToTag" id="btn-${appliance}" value="appliance"> ${appliance}`
        ul.appendChild(listAppliances);
    });

    const btnAppliances = document.getElementsByClassName ("appChoiseListToTag");        
    const arrayBtnAppliances = Array.from(btnAppliances);
    //console.log(Array.from(btnAppliances))

    arrayBtnAppliances.forEach ((el)=> {
        //console.log(el.textContent)
        el.onclick = () => {
            let tagWithoutSpace = el.textContent.replace(/\s/g,"");
            //console.log(tagWithoutSpace);
            appliancesTagSelect.push(tagWithoutSpace);
            //console.log(appliancesTagSelect)
            buildTags (tagsBar, el.textContent, "appliances");
            recipesMatch = searchByAppTags(recipesMatch, appliancesTagSelect);
            //console.log(recipesMatch);
            displayRecipes (recipesMatch);
        }
    })
    return recipesMatch;
}

