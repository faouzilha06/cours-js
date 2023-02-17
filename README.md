# Cours de JavaScript
## Introduction au JavaScript
### Titre niveau 3
#### Titre niveau 4 /*ainisi de suite*/




<p align="center">**Les règles de déclaration des variables en JavaScrip**</p>


<ol>
  <li</li>

</ol>
<ul>
  <li></li>
 
</ul>
#JS
Affiche la page web logo JS
[cliquez ici](https://commons.wikimedia.org/wiki/File:JavaScript-logo.png)
<img
 src="image\js-logo.webp"/>

 Concernant le nom de nos variables, nous avons une grande liberté dans le nommage de celles-ci mais il y a quand même quelques règles à respecter :
 <ul>
    <li>Le nom d’une variable doit obligatoirement commencer par une lettre ou un underscore (_) et ne doit pas commencer par un chiffre ;</li>
    <li>   Le nom d’une variable ne doit contenir que des lettres, des chiffres et des underscores mais pas de caractères spéciaux ;</li>
    <li>Le nom d’une variable ne doit pas contenir d’espace.</li>
</ul>
les variables est sensible à la casse en JavaScript.  Par exemple, les noms texte, TEXTE et tEXTe vont pouvoir définir des variables différentes.

var maChaine= new String ("exemple")

#####var a = 42
#####var b = 4.2
#####var c = -42
#####var d = "42"

alert ("ma variablee est de type : "+ typeof (a) +
"\nma variable est de type : "+ typeof (b) +
"\nma variable est de type : "+ typeof (c) +
"\nma variable est de type : "+ typeof (d) +));

mot clé LET 
let prenom ;
let monAge; 2 valeurs créées mais non stockées

Pour initialiser 1 variable, on utilise l'opérateur + qui est 1 opérateur d'affectation 
exemple :
let prenom ='Pierre'
let monAge;
monAge = 15;

Modifier la valeur stockée dans 1variable
1) l'initialisé
2) utilisé l'opérateur =

exemple :
let prenom = 'Pierre';
let monAge;
monAge = 15;

lOn stocke la valeur "Pierre" dan la variable PRENOM puis on affecte la valeur "Mathilde" à notre variable. Cette fvaleur vient écraser l'ancienne car 1 variable ne peut stocker qu'une valeur à la fois.


fonctionne avec var 

prenom = 'Pierre'; 
var prenom;

mais ne fonctionne pas avec let
nom = 'Giraud';
let nom;

La redéclaration de variables








