// Fonction pour recharger la page en haut à gauche
/*window.onbeforeunload = function () {
    window.scrollTo(0, 0); // Recharger la page
};*/

// Fonction pour afficher ou masquer le bouton en fonction de la position de défilement
window.onscroll = function () {
    afficherMasquerBouton();
};


// Fonction pour masquer ou afficher le bouton selon la position de l'utilisateur dans la page web
function afficherMasquerBouton() {
    const bouton = document.getElementById("btn-retour-haut"); // Récupération du bouton
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) { // Si l'utilisateur est dans la page web et qu'il est supérieur ou égal à 20 pixels
        bouton.style.display = "block"; // Afficher le bouton
    } else {
        bouton.style.display = "none"; // Masquer le bouton
    }
}

// Fonction pour remonter en haut de la page
function retourHaut() {
    document.body.scrollTop = 0; // Pour les anciens navigateurs
    document.documentElement.scrollTop = 0; // Pour les navigateurs modernes
}

document.addEventListener('DOMContentLoaded', function () {
    var arrow = document.querySelector('.arrow');
    var arrowContainer = document.getElementById('arrow-container');

    function toggleArrow() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 0) {
            arrowContainer.style.display = 'none';
        } else {
            arrowContainer.style.display = 'block';
        }
    }

    window.addEventListener('scroll', toggleArrow);
});
