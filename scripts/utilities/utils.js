let recipesMatch = recipes;
//console.log(recipesMatch);

let ingredients = [];
let appliances = [];
let ustensils = [];

function normalizeText(text) {
    return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

function clear(el) {
    el.innerHTML = "";
}