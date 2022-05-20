// déclaration des constantes
let hiddenUstensilsFilter = document.getElementById("hiddenUstensilsFilter")
let ustensilsList = document.getElementById("ustensilsList");
const tagsBar = document.getElementById("tagsBar");

// récupère les ingredients et crée les éléments du dropdown --> OK
function fillUstensils(ustensils) {
    //console.log(ustensils)
    hiddenUstensilsFilter.style.display = "block"
    clear(ustensilsList)

    let ul = document.createElement("ul");
    ul.setAttribute("class","listUst");
    ustensilsList.appendChild(ul);

    ustensils.forEach((ustensils) => {
        let listUstensils = document.createElement("li");
        listUstensils.setAttribute("class","ustListItem")
        llistUstensils.setAttribute("data-filter", `${ustensils}`);
        listUstensils.innerHTML = `<button class="ustChoiseListToTag" id="btn-${ustensil}" value="ustensil"> ${ustensil}`
        ul.appendChild(listUstensils);
    });

    const btnUstensils = document.getElementsByClassName ("ustChoiseListToTag");        
    const arrayBtnUstensils = Array.from(btnUstensils);
    //console.log(Array.from(btnUstensils))
    arrayBtnUstensils.forEach ((el)=>
    //console.log(el.textContent)
    el.onclick = () => {
        let ustensilTag = document.getElementById('ustensilTag');
        buildTags (ustensilTag, el.textContent);

    });


}

