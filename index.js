 //const prenom ="Faouzilha"
// const nom ="HAFSI"
 //const age =57

// console.log("Bonjour je m'appelle " + prenom + ' ' + nom + " je suis agée de " + age + " ans")

// // // il y a 2 types de tableaux*/
// // /*const monTableau= new Array; (new) instance de l'objet*/
// // /*une fonction dans un objet une method*/
// // /*les objets s'ecrivent entre accolades*/

// // // cette version du tableau ci-dessous est un objet
// // /*var monTableau=[];   /*création de tableau*/
// // // monTableau.papa= "toto";  /*séparer l'index d'un point*/
// // // monTableau.maman= "tata";
// // // monTableau.enfant= "titi";

// // // /*monTableau.pop()retire la dernière valeur*/
// // // /*changer log par table pr 1 tableau**/

// // // monTableau["papa"]= "toto";
// // // monTableau["maman"]= "tata";
// // // monTableau["enfant"]= "titi";
// // // console.table(monTableau);
// // /*console.table(monTableau); var monTableau= new Array;création d'un tableau*/


// // /*LES FONCTIONS S ECRIVENT AVEC DES MOTS CLES
// //     function maFonction(){        fonction name(params, callback) ouvrir les accolades
// //         console.log(('click');
// //             la boucle for (mettre INSTANCE DE l'index ;CONDITION ; INCREMENT){
// //                (let i =0; i< est plus petit que la longueur du tableau; i++ (est égale (i=1) 
// //                exemple : carré[i].addEventlistener('click', maFonction(i))
// // }) -->
// // <!-- Les paramettres

// function name(params){
//     ex: maFonction(Long, Larg){
//         console.log(["la surface est de " + Long*Larg +"m2"]);
//     }
// //     maFonction(3, 5) etc...
// // fonction dans une fonction est une callback (foncionImbrique()   
// // } -->*/
// // var a = 42;
// // var b = 4.2;
// // var c = -42;
// // var d = "42";

// // alert ("ma variable est de type : "+ typeof (a) +
// // "\nma variable est de type : "+ typeof (b) +
// // "\nma variable est de type : "+ typeof (c) +
// // "\nma variable est de type : "+ typeof (d) );

// // var machaine = "exemple";
// // var maChaine = new String ("exemple");
// // alert ("ma variable machaine est de type :" + typeof(machaine) +
// // "\nmaChaine est de type :" + typeof (maChaine));

// // var n = null;
// // var u = undefined;
// // var nn = NaN;

// // alert ("ma variable n est de type : " +typeof(n)+
// // "\nma variable u est de type : " + typeof (u)+
// // "\nma variable nn est de type : " + typeof (nn));

// // var x = 32;
// // var y = 5;
// // var z = 2;

// // alert(
// //     y*z
// //     y/z
// //     z+x
// // )
// // alert(
// //     X%y
// // )
// // alert(
// //     y + z * x
// //     (y + z) * x
// // )
// // alert(
// //     (y + z) * x
// // )
// // // y + = z  équivaut y = y + z
// // // renvoi 7
// // // // y * = z  équivaut y = y + z
// // // renvoi 14
// // // y - = z  équivaut y = y + z
// // // renvoi 12
// // // y / = z  équivaut y = y + z
// // // renvoi 6
// // // y % = z  équivaut y = y + z
// // // renvoi 0

// // // alert(
// // //     y
// // // )

// // var heureOuverture = 9;
// // var heureFermeture = 17;
// // var heure = 8;
 
// // if (heure < heureOuverture){
// //     alert('il est trop tôt');
// // }

// // else if(heure>=heureOuverture && heure<=heureFermeture){
// //     alert('bienvenue');
// // }
// // // if(heure<12){
// // //     alert('bienvenue nous sommes le matin')  imbrication d'une condition dans une autre
// // // }                                            ? ou : version simplifiée
// // // else{
// // //     ('nous sommes l\'après midi');
// // // }
// // else{
// // alert('revennez demain');
// // }

// // var note = 1;
// // switch(note){
// //     case 5:
// //         alert("votre note est de 5")
// //         break;
// //      default:
// //         alert("nous ne connaissons pas votre note")
// //      break;
// // }
// // var note = 10;
// // switch(note){   //(expression)
// //     case 5:     //(valeur1):
// //         alert("votre note est de 5")
// //         case note>10°:
// //         alert("votre note est de 10")
// //         break;
// //      default:
// //         alert("nous ne connaissons pas votre note")
// //      break;
// // }
// // var note = 10;
// // var noteAmericaine = "A++";

// // switch(noteAmericaine){   //(expression)
// //     case 5:     //(valeur1):
// //         alert("Excellent travail")
// //         case 10:
// //         alert("votre note est de 10")
// //         break;
// //      default:
// //         alert("nous ne connaissons pas votre note")
// //      break;
// // }

// // if (note == 20){
// //     noteAmericaine = "A+"
// // }
// // else if(note>= 18 && note <=19){
// //     noteAmericaine = "A"
// // }
// // else if(note>= 15 && note <=17){
// //     noteAmericaine = "B"
// // }          
// // else if(note>= 12 && note <=14){   
// //     noteAmericaine = "C"
// // }  
// // else if(note>= 9 && note <=11){
// //     noteAmericaine = "D"
// // }  
// // else if(note>= 6 && note <=8){
// //     noteAmericaine = "E"
// // } 
// // else if(note>= 1 && note <=5){
// //     noteAmericaine = "F"
// // } 

// //  Afficher la valeur d'une réduction déterminée par calcul. 
// // Ce calcul tiendra compte du montant introduit dans une fenêtre 
// // pop-up. Elle sera nulle tant que le montant de la facture 
// // n'atteint pas les 1000 €, de 5 % si le montant est compris 
// // entre 1000 et 2500 € et de 10 % si le total facture dépasse les 2500 €.

// // var facture = 1000;
// // var reduction = 0;


// // if (facture > 2500){
// //          reduction = 0;
// //      }
// //      else if(facture <= 2500 && facture >=1000){
// //         réduction = 5;
// //     }
// //    else {
// //         reduction = 10;
// //     }          
 
// //     var facture = 1000;
// //     var reduction = 0;
    
    
// //     if (facture > 2500){
// //              reduction = 0;
// //          }
// //          else if(facture <= 2500 && facture >=1000){
// //             réduction = 5;
// //         }
// //        else {
// //             reduction = 10;
// //         }  
 


//  //arrayNbr.push(4);[1, 2, 3, 4] ajoute la valeur indiquée à la fin du tableau

// //  arrayNbr.pop();//[1, 2] retire la dernière valeur
// //  arrayNbr.shift()//[2, 3] retire la 1ère valeur
// //  console.table(arrayNbr)
// // var arrayNbr= [1,2,3];
// // var arrayStr=["a","b","c"];

// // arrayStr.concat[arrayStr];
// // var arrayCopy = arrayStr.concat("d",)
// // console.log(arrayCopy);

// // var arrayCopy= arrayStr.concat ("d");//Fusionne des tableaux sans changer les valeurs du tableau initial 

// // arrayStr.join('');//a-b-c joindre les valeurs du tableau sans changer les valeurs du tableau initial

// // arrayStr.slice(1)//[b","c"] Retire le nombre d'elements indiqué du tableau en partant du début sans chancger la valeurs du tableau initial
// // console.log(arrayCopy)
// // console.log(array.slice(-1));//Retire le nombre d'elements indiqué du tableau en partant du début sans changer les valeur tableau initial 
// // [1, 2, 3, "a","b","c"]
// // [1, 2, 3, ["a","b","c"]]// avec le push un tableau dans un tableau

// // array.arrayNbr.reduce((acc,cou,)=> acc + cou);// Calcule la somme de tout le tableau

// // arrayStr.includes("c");
// // arrayStr.indexof("c");
// // console.log(arrayStr.indexof("c"));

// // var arrayNbr = [1, 2, 3];

// // //arrayNbr.find(el=>el > 2);//renvoie la valeur du premier élément trouvé dans le tableau qui respecte la condition
// // arrayNbr.findindex(el => el > 2)// renvoie l'index 2 qui est 1erl'élément trouvé dans le tableau qui respecte la condition

// // console.log(arrayNbr.some(el=>el > 5));

// // arrayNbr.map(el => el *2);//[2, 4, 6] renvoie une fonction sur chaque élément

// // arrayNbr.some(el=>{el > 2})//true passe le test implémenté par la fonction fournie; Elle renvoie un booléen indiquant le résultat du test.

// // arrayNbr.filter(el=>el > 1)//[2,3] renvoie tous les éléments qui respectent la condition

// // console.log(arrayNbr.filter(el=>el > 6));
// // arrayNbr.every(el=>e >1)
// // console.log(arrayNbr.every(el=>el > 0));
// // arrayNbr.reverse(el=>e >1)//
// // console.log(arrayNbr.reverse(el=>el > 0));


// // const array1 = ['one', 'two', 'three'];
// // console.log('array1:', array1);
// // // Expected output: "array1:" Array ["one", "two", "three"]

// // const reversed = array1.reverse();
// // console.log('reversed:', reversed);
// // // Expected output: "reversed:" Array ["three", "two", "one"]

// // // Careful: reverse is destructive -- it changes the original array.
// // console.log('array1:', array1);
// // // Expected output: "array1:" Array ["three", "two", "one"]

// // // const div = document.getElementsByClassName('carré');
// // // div[0].style.bacgroundColor = 'rgb(255,0,0)';
// // // const arrDiv = Array.from(div);
// // // console.log(arrDiv);
// // // // var red = arrDiv.filter(el => (el % 2) == 0);
// // // // console.log(red);





// // // BOUCLE for :

// // // for (let index = 0; index < div.length; index++){
// // //     if (index % 2 !=0){
// // //         div[index].style.bacgroundColor = 'rgb(255,0,0)'
// // //     }elese{
// // //         div[index].style.bacgroundColor = 'rgb(0,255,0)'
// // //         }
// // // }


// // // METHODE map :

// // //div.map((element, index)=>{
// // // if(index % 2!=0){
// // //}else{
// // // element.style.backgroundColor = 'rgb(255,0,0)'
// // //}
// // //})

// // //div.map((element; index)=> index % 2 !=0 ?

// // //   element.style.backgroundColor = 'rgb(255, 0, 0)'
// // //    :
// // //   element.style.backgroundColor = 'rgb(0, 255, 0)'
// // // )
// // // div.map((element, index) => {
// // //   if(index % 2 != 0){
// // //     return element.style.backgroundColor = 'rgb(255, 0, 0)'
// // //   }
// // //   return element.style.backgroundColor = 'rgb(0, 255, 0)'
// // // })

// // // div [0].style.backgroundColor = 'rgb('+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+')';

// // element.style.backgroundColor = `rgb(
// //     ${Math.floor(Math.random () * 256)},
// //     ${Math.floor(Math.random () * 256)},
// //     ${Math.floor(Math.random () * 256)})`
// // function getRandomInt() {
// //     return Math.floor(Math.random() * (256));
// // }


// // const body = document.getElementsByTagName('body');
// // const btn = document.getElementsByClassName('btn');
// //     //console.log(btn);//pr vérif

// function getRandomInt(){
//     return Math.floor(Math.random () *256);
// } 
//     function getbodyBg(){
//     body[0].style.background = 'rgb('+getRandomInt()+','
//     +getRandomInt()+','+getRandomInt()+')';
// } 

// btn[0].addEventListener('click',getbodyBg);

// const img = document.querySelector("#img"); 
// console.log(img);

// img.setAttribute('src','img/telechargement.png');

// const test = document.getElementsByClassName('test');

//   console.log(test);
// // const img = div.getAttribute('id');


// for (let i = 0; i < test.length; i++){
//     console.log(test[1].getAttribute('id)'));
//         }

//     Array.from(test).forEach(element=>{
//         element.addventlistener{
//             'click',
//             function(e){
//                 console.log(e.currentTarget.id)
//             }
//         }
//     });


// const Joueur = jouEur();
// const Ordi = orDi();
// const tab= ['Pierre', 'Feuille', 'Ciseaux'];
// const resultat = document.getElementById('resultat')
// const msgresultat = document.getElementById('msgresultat')
// var scoreJ= 0;
// var score0= 0;

// function orDi(){
//     var orDi = Math.floor(Mat.random()*53);
//         if(orDi < 20){
//             orDi = "Pierre";
//         }
//         else if (orDi > 20 && Ordi < 40){
//             orDi = "Feuille";
//         }
//         else if(orDi > 30) {
//            orDi = "Ciseaux";
//         }

// }
// function jouEur (jouEur){
//         if(jouEur == "Pierre"){
//             jouEur = "Pierre";
//         }
//         else if (jouEur == "Feuille"){
//             jouEur = 2;
//             return jouEur + "J";
//         }
//         else if (jouEur == "Ciseaux"){
//             jouEur = 3;
//             return jouEur + "J";
//         }
// }


//   score.innerHTML = scoreJ'/' + score0;


// function getHead(){
//     head[0].style. background = 'hsl (238, 80%)('+getRandomInt()+','
//     +getRandomInt()+','+getRandomInt()+')';
// } 
// for (let i = 0; i < test.length; i++){
//      console.log(img[0].getAttribute('id)'));
//           }
    
    //  Array.from(img).forEach(element=>{
    //       element.addventlistener{
    //            'click',
    //          function(e){
    //               console.log(e.currentTarget.id)
//            }
//            }

//CORRIGE SOFIANE
// const img = document.querySelectorAll('head img')
// const img = document.querySelectorAll('#image')
// console.log(img)
// ;
// img;addEventListener => console.log(element))


// img.forEach(element=>{
//          element.addventlistener{
//               ('click', e => console.log(element))
//          });
// const Pierre = document.getElementById('Pierre;');
// const Feuille = document.getElementById('feuille;');
// const Ciseaux = document.getElementById('Ciseaux;');

// Pierre.addEventListener('click', e => console.log(Pierre));
// Feuille.addEventListener('click', e => console.log(Feuille));
// Ciseaux.addEventListener('click', e => console.log(Ciseaux));

// function getElement(element){
//     element.addEventListener('click', => console.log.(element));
// // }
// function calcul(x, y){
//     console.log(x * y)
// }
// calcul(3,3);
// calcul(9,3);
// calcul(6,4);

//OBJET : PORTEE ET CONTEXTE

// function getSurface(Long, Larg){
// //  code que va executé la fonction (calculer l'aire d'une surface)
//  console.log("la surface est de " + Long*Larg +"m2");
// }
// getSurface(15,3);

//fonction fléchée => est cantonnée à l'interieur de l'objet
// const getSurface(Long, Larg)=>{
//     //  code que va executé la fonction (calculer l'aire d'une surface)
//      console.log("la surface est de " + Long*Larg +"m2");
//     }
//     getSurface(15,3);

// var apprenant = {
//     nom :'JEAN',
//     prenom :'Paul',
//     age :'30'
// };
// console.log(apprenant.nom);

//intégrer console log à l'intérieur de la fonction qui prend forme d'objet
// let apprenant = {
//     nom :'JEAN',
//     prenom :'Paul',
//     age :'30',
//     clog :{
//         ap : this.nom
//     }
// };
// console.log(apprenant.nom);

// //un attribut dans une fonction
// clog:function () {
//     console.log(this.nom)
// }
// apprenant.clog();

//function voiture(fabricant, modele, annee){
    //le this c'est voiture
   // this.fabricant = fabricant;
   // this.modele = modele;
   // this. annee = annee;
 //}

//let mavoiture = new voiture('Eagle', 'Talon', TS1, 1993);

 //const results = document.querySelector('.results')

 //function Jeux(titre, console, annee) {
   //  this.titre =titre;
   //  this.console = console;
   //  this.annee = annee;
//}

 //let jeu1 = new Jeux('Super Mario Bros.', 'PSP3', 1985);
//let jeu2 = new Jeux('Super Mario Bros: The Lost Levels', 'PSP', 1986);
 //let jeu3 = new Jeux('Super Mario Bros. 2', 'PSP3', 1987);
 //let jeu4 = new Jeux('Super Mario Bros. 3', 'PSP4', 1988);
 //let jeu5 = new Jeux('Super Mario World .', 'Game Boy', 1990);
 //let jeu6 = new Jeux('Super Mario All-Stars.', 'PS4', 1993);
 //let jeu7 = new Jeux('Super Mario World 2: Yoshi\'s Island.', 'Super Nintendo', 1995);
 //let jeu8 = new Jeux('Super Mario 64.', 'Nintendo', 1996);
 //let jeu9 = new Jeux('Super Mario Sunshine.', 'GameCube', 2002);
 //let jeu10 = new Jeux('Super Mario Bros. Deluxe.', 'Game Boy Color', 1999);

// let myCollection = new Object();
// myCollection = {...{jeu1}, ...{jeu2}, ...{jeu3}, ...{jeu4}, ...{jeu5}, ...{jeu6}, ...{jeu7}, ...{jeu8}, ...{jeu9}, ...{jeu10}} 

 //results.innerHTML = Object.values(myCollection).map( jeu =>`
    

 //<div class="card">
         //<h2>Titre : ${jeu.name}</h2>
         //<h3>Console : ${jeu.console}</h3>
        // <h4>Année : ${jeu.year}</h4>
     //</div>
//).join("");

//var courses = {
   // "fruits": [
    //  { "kiwis": 3,
      //  "mangues": 4,
      //  "pommes": null
     // },
    //  { "panier": true },
    //],
   // "legumes":
     // { "patates": "amandine",
       // "figues": "de barbarie",
        //"poireaux": false
     // }
  // };
   

//let shopping = new Object();

//courses.innerHTML = Object.values(courses).map( jeu =>`
    //<id="courses">
        //<id="fruits" : ${courses.fruits}/>
        //<id="legumes": ${courses.legumes}/>
//`).join("");

 //let courses1 =[
 //   {nom: 'kiwis', type:'fruits', quantite:3},
  //  {nom: 'mangues', type: 'fruits', quantite:4},
   // {nom : 'pommes', type: 'fruits', quantite: 'null'},
   // {nom: 'patate amandine', type: 'legumes'},
   // {nom: 'figues amandine', type: 'figues de barbarie'},
   // {nom: 'poireaux', type: 'legumes'}
 //];
   
// console.log(shopping)//


//let mon Array = [0,1,2,3]
//monArray.push(4);   ajoute la valeur indiquée au tableau [0,1,2,3,4]
//monArray.push(4,5);  pour ajouter 2 élément au tableau[0,1,2,3,4,5]
//monArray.pop();     retire la dernière valeur du tableau [0,1,2,3]

//Somme des 2 dernières valeurs
//monArray.push (some)
//let somme = monArray[2] + monArray[3]

//Faire une suite de fibonacci

//let fibo [0,1]

//for(i=1; i <fibo[i]<50;i++){
  
//}
//console.log(fibo[i]);


let fibo =[0,1]
  fibo [0]=0;
  fibo [1]=1;

  for (i = 1; (fibo[i+1]+fibo[i])<50; i++) {
fibo.push
  }
  console.log(fibo);
   
 