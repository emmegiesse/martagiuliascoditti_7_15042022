let recipesMatch = recipes;

function clear (funct) { //function pour vider
    funct.innerHTML = "";
}

function normalizeText(text) {
    return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}