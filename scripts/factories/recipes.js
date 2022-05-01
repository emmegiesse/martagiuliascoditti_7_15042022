function recipesFactory(data) {
    const { id, name, servings, ingredients, ingredient, quantity, unit } = data ;

    function getRecipeCardDOM(recipesSection) {

        //const article = document.createElement( 'article' );
        //article.className= 'recipeArticle';

        //const recipePic= document.createElement( 'img' );
        //recipePic.setAttribute("src", name);

        //article.appendChild (recipePic);

        recipesSection.innerHTML += `   
            <p> ${name} </p>
        `

/*


        const phLink = document.createElement('a');
        phLink.setAttribute('href', `./photographer.html?id=${id}`);
        phLink.className = 'phLink';
        const phPic = document.createElement( 'img' );
        phPic.setAttribute("src", picture);
        phPic.setAttribute("alt", `Portait de ${name}`);
        phPic.className = 'phPic';
        const phName = document.createElement( 'h2' );
        phName.textContent = name;
        phName.className = 'phName';
        // texte avec détails du photographe = ville + tagline + prix (ref 4 du brief)
        const phText = document.createElement( 'div' );
        phText.className = 'phText';
        const phCity = document.createElement( 'h3' );
        phCity.textContent = `${city}, ${country}`
        phCity.className = 'phCity';
        const phTagline = document.createElement( 'p' );
        phTagline.textContent = tagline;
        phTagline.className = 'phTagline';
        const phPrice = document.createElement( 'p' );
        phPrice.textContent = `${price}€/jour`
        phPrice.className = 'phPrice';

        //hiérarchie
        article.appendChild(phLink)
        phLink.appendChild(phPic);
        phLink.appendChild(phName);
        article.appendChild(phText);
        phText.appendChild(phCity);
        phText.appendChild(phTagline);
        phText.appendChild(phPrice);
     
        return (article);
        */
    }

   
    return {getRecipeCardDOM}

}

