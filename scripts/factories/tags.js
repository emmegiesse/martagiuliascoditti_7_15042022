// élément du DOM
let tagsBar = document.getElementById("tagsBar");

// function de construction du tag
function buildTags(elt, tag, collection,ingredientsTagSelect) {
    ingList.style.top = '20rem';
    let tagWithoutSpace = tag.replace(/\s/g,"");
    console.log(tag);
    //console.log(tagWithoutSpace);
    elt.style.display = "flex"; //créer le tag 
    elt.innerHTML +=`<div class="chip chip-${collection}" id="chip-${tagWithoutSpace}">
                     ${tag} <i id="close-${tagWithoutSpace}" class='closeTag far fa-times-circle'></i>
                     </div>`; //remplie le tag selectionné
    let allClose = document.getElementsByClassName ("closeTag")
    const allCloseArray = Array.from(allClose);
    //console.log(allCloseArray)
    allCloseArray.forEach((c)=>{
        //console.log (c)
        let closeTag = document.getElementById(c.id); 
        closeTag.onclick = (el) => { 
        //console.log(el.target.id)
        let onlyId = el.target.id.split("-")[1];
        //console.log(onlyId)
        let chipTag = document.getElementById(`chip-${onlyId}`)
        //console.log(chipTag)
        chipTag.style.display = "none";
        let indexToDelete = ingredientsTagSelect.indexOf(tagWithoutSpace);
        ingredientsTagSelect.splice(indexToDelete,1);
        //buildTags(elt, tag, collection,ingredientsTagSelect);
        ingDisplay(recipesMatch)
        }
    });
    return elt;
}