function Opdracht(vak, beschrijving) {
    let opdrObj = this;

    opdrObj.vak = vak;
    opdrObj.beschrijving = beschrijving;
}
// OPDRACHT 1.
// Maak de Cijfer functie af.

// opdracht is een object die met behulp van de bovenstaande
// functie is aangemaakt.

// Cijfer een nummer van 0 tot 10

function cijferObj(opdracht, cijfer) {
let cijferOb = this;
cijferOb.Opdracht = opdracht;
cijferOb.Cijfer = cijfer;
}
let cijfer1 = new cijferObj("",'10');
document.write(cijfer1.Cijfer);

// OPDRACHT 2.
// Maak verschillende variabelen voor je opdrachten.
    // Minimaal 3 opdrachten voor 3 verschillende vakken.
    // Totaal dus 9 opdrachten
// Kijk in week6 of studie.js hoe je een variabele aanmaakt met het keyword new

// Maak voor al deze opdrachten een cijfer variabele aan
// Kijk in week6 hoe je een variabele aanmaakt met het keyword new
function opdrachtObj(vak,opdracht, mening) {
let opdrachtOb = this;
//variabele1
opdrachtOb.Vak = vak;
//variabele2
opdrachtOb.Opdracht = opdracht;
//variabele3
opdrachtOb.Mening = mening;
}
let letObj1 = new opdrachtObj('FRO', 'Object week 8', 'Leerzaam');
let letObj2 = new opdrachtObj('CMS', 'CMS week 8', 'Leerzaam');
let letObj3 = new opdrachtObj('SLB', 'Zelfreflectie', 'Leerzaam');
document.write('<br/>'+letObj1.Vak);

let forInOpdracht2="";
for (const property in letObj1) {
forInOpdracht2+=(`${property}: ${letObj1[property]}`+'<br/>');
}document.write('<br/>'+'<br/>'+"Opgave 5 OOP" +'<br/>'+ forInOpdracht2);
















// OPDRACHT 3.
// Vul de arrays met de opdrachten en cijfers die je hebt aangemaakt.
// Kijk in week6 voor een voorbeeld hoe je objecten in een array stopt!
let opdrachten = [];
let cijfers = [];

function Periode (opdrachten, cijfers) {
    let periodeObj = this;

    periodeObj.opdrachten = opdrachten;
    periodeObj.cijfers = cijfers;
}

// OPDRACHT 4.
// Maak een periode variabele op basis van de bovenstaande functie

// OPDRACHT 5.
// Schrijf de periode variabele naar een JSON variabele
// Kijk in week7 hoe je een JSON variabele aanmaakt

// OPDRACHT 6.
// Schrijf de json variabele naar de localStorage
// Kijk in week week 6 hoe je een variabele naar de localStorage wegschrijft
