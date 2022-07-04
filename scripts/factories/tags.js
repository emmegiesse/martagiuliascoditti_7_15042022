// élément du DOM
let tagsBar = document.getElementById("tagsBar");

function buildTags(elt, tag, collection) { // function de construction du tag
    ingList.style.top = '20rem';
    let tagWithoutSpace = tag.replace(/\s/g,"");
    elt.style.display = "flex"; //créer le tag 
    elt.innerHTML +=`<div class="chip chip-${collection}" id="chip-${tagWithoutSpace}">
                     ${tag} <i id="close-${tagWithoutSpace}" class='closeTag far fa-times-circle'></i>
                     </div>`; //remplie le tag selectionné
    
    let allClose = document.getElementsByClassName ("closeTag")
    const allCloseArray = Array.from(allClose);

    allCloseArray.forEach((c)=>{ //function de fermeture du tag 
        let closeTag = document.getElementById(c.id); 
        closeTag.onclick = (el) => { 
            let onlyId = el.target.id.split("-")[1];
            let chipTag = document.getElementById(`chip-${onlyId}`)
            chipTag.style.display = "none";
           
            if (ingredientsTagSelect.indexOf(onlyId)>=0) {   
                ingredientsTagSelect.splice(ingredientsTagSelect.indexOf(onlyId),1);
                }
            else if (appliancesTagSelect.indexOf(onlyId)>=0) {   
                appliancesTagSelect.splice(appliancesTagSelect.indexOf(onlyId),1);
            }
            else if (ustensilsTagSelect.indexOf(onlyId)>=0){    
                appliancesTagSelect.splice(ustensilsTagSelect.indexOf(onlyId),1);
            }
            
            recipesMatch = recipes;
            recipesMatch = searchByIngTags(recipesMatch, ingredientsTagSelect);
            recipesMatch = searchByAppTags(recipesMatch, appliancesTagSelect);
            recipesMatch = searchByUstTags(recipesMatch, ustensilsTagSelect);

            displayRecipes (recipesMatch);   
            ingDisplay(recipesMatch)
            appDisplay(recipesMatch)
            ustDisplay(recipesMatch)

        }
    });
    return elt;
}