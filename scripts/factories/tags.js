// élément du DOM
let tagsBar = document.getElementById("tagsBar");

function buildTags(elt, tag, collection) { // function de construction du tag
    ingList.style.top = '20rem';
    let tagWithoutSpace = tag.replace(/\s/g,"");
    //console.log(tag);
    //console.log(tagWithoutSpace);
    elt.style.display = "flex"; //créer le tag 
    elt.innerHTML +=`<div class="chip chip-${collection}" id="chip-${tagWithoutSpace}">
                     ${tag} <i id="close-${tagWithoutSpace}" class='closeTag far fa-times-circle'></i>
                     </div>`; //remplie le tag selectionné

    console.log(ingredientsTagSelect)
    console.log(appliancesTagSelect)
    console.log(ustensilsTagSelect)
    
    let allClose = document.getElementsByClassName ("closeTag")
    const allCloseArray = Array.from(allClose);
    //console.log(allCloseArray)

    allCloseArray.forEach((c)=>{ //function de fermeture du tag 
        //console.log (c)
        let closeTag = document.getElementById(c.id); 
        closeTag.onclick = (el) => { 
            //console.log(el.target.id)
            let onlyId = el.target.id.split("-")[1];
            //console.log(onlyId)
            let chipTag = document.getElementById(`chip-${onlyId}`)
            //console.log(chipTag)
            chipTag.style.display = "none";
            console.log(onlyId)
           
            if (ingredientsTagSelect.indexOf(onlyId)>=0) {
                console.log(ingredientsTagSelect.indexOf(onlyId))     
                ingredientsTagSelect.splice(ingredientsTagSelect.indexOf(onlyId),1);
                console.log(ingredientsTagSelect)
                }
            else if (appliancesTagSelect.indexOf(onlyId)>=0) {
                console.log(appliancesTagSelect.indexOf(onlyId))     
                appliancesTagSelect.splice(appliancesTagSelect.indexOf(onlyId),1);
                console.log(appliancesTagSelect)
            }
            else if (ustensilsTagSelect.indexOf(onlyId)>=0){
                console.log(ustensilsTagSelect.indexOf(onlyId))     
                appliancesTagSelect.splice(ustensilsTagSelect.indexOf(onlyId),1);
                console.log(ustensilsTagSelect)
            }
            
            recipesMatch = recipes;
            //console.log(recipesMatch)

            recipesMatch = searchByIngTags(recipesMatch, ingredientsTagSelect);
            recipesMatch = searchByAppTags(recipesMatch, appliancesTagSelect);
            recipesMatch = searchByUstTags(recipesMatch, ustensilsTagSelect);
        
            //console.log(ingredientsTagSelect)
            displayRecipes (recipesMatch);   

            ingDisplay(recipesMatch)
            appDisplay(recipesMatch)
            ustDisplay(recipesMatch)

        }
    });
    return elt;
}