const prenom ="Faouzilha"
const nom ="HAFSI"
const age =57

console.log("Bonjour je m'appelle " + prenom + ' ' + nom + " je suis agée de " + age + " ans")

// il y a 2 types de tableaux*/
/*const monTableau= new Array; (new) instance de l'objet*/
/*une fonction dans un objet une method*/
/*les objets s'ecrivent entre accolades*/

// cette version du tableau ci-dessous est un objet
var monTableau=[];   /*création de tableau*/
monTableau.papa= "toto";  /*séparer l'index d'un point*/
monTableau.maman= "tata";
monTableau.enfant= "titi";

/*monTableau.pop()retire la dernière valeur*/
/*changer log par table pr 1 tableau**/

monTableau["papa"]= "toto";
monTableau["maman"]= "tata";
monTableau["enfant"]= "titi";
console.table(monTableau);
/*console.table(monTableau); var monTableau= new Array;création d'un tableau*/


/*LES FONCTIONS S ECRIVENT AVEC DES MOTS CLES
    function maFonction(){        fonction name(params, callback) ouvrir les accolades
        console.log(('click');
            la boucle for (mettre INSTANCE DE l'index ;CONDITION ; INCREMENT){
               (let i =0; i< est plus petit que la longueur du tableau; i++ (est égale (i=1) 
               exemple : carré[i].addEventlistener('click', maFonction(i))
}) -->
<!-- Les paramettres

function name(params){
    ex: maFonction(Long, Larg){
        console.log(["la surface est de " + Long*Larg +"m2"]);
    }
    maFonction(3, 5) etc...
fonction dans une fonction est une callback (foncionImbriqu()   
} -->