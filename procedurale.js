const img = document.querySelectorAll('.commandes img');
const tab = ['pierre', 'feuille', 'ciseaux'];
const resultat = document.getElementById('resultat');
const msgResult = document.getElementById('msgResult');
const score = document.getElementById('score');
var scoreJ = 0;
var scoreO = 0;
function setImgAttr(ordinateur) {
    resultat.setAttribute('src', 'img/' + ordinateur + '.png');
    resultat.setAttribute('alt', ordinateur);
}
function getOrdiDesktop() {
    var ordinateur = tab[Math.floor(Math.random() * 3)];
    setImgAttr(ordinateur);
    return ordinateur;
}
function getCurrentTarget(e) {
    var joueur = e.currentTarget.id;
    getOrdiDesktop();
    return joueur
}
function getElement(element) {
    element.addEventListener('click', e => getCurrentTarget(e));
}
img.forEach(element => getElement(element));














