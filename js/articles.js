
const sectionDArticle = document.querySelector('#article-list');
const boutonAjouter = document.querySelector('#add-article');
const articleVide = document.querySelector('#article-vide');

/**
 * Crée un nouvel article à partir du template #article-vide
 * @param {string}titre Titre de l'article
 * @param {string}texte Contenu de l'article
 */
function nouvelArticle(titre, texte) {
    const newArticle = articleVide.content.cloneNode(true);

    newArticle.querySelector('.article-title').textContent = titre;
    newArticle.querySelector('.article-text').textContent = texte;
    newArticle.querySelector('.article-delete').addEventListener('click', (event) =>{
        event.target.parentElement.remove();
    });

    const newElement = newArticle.querySelector('article')
    newElement.addEventListener('mouseover', function()  {
        newElement.classList.add('hover')
    })
    newElement.addEventListener('mouseout', function()  {
        newElement.classList.remove('hover')
    })

    sectionDArticle.append(newArticle);
}

boutonAjouter.addEventListener('click', function () {
    let articleTitle, articleText
    do {
        articleTitle = prompt("Entrez Le titre de l'article :");

    } while (!articleTitle);
    do {
        articleText = prompt("Entrez Le texte de l'article :");

    } while (!articleText);

    nouvelArticle(articleTitle, articleText);
});
