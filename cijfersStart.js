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
        // Maak voor al deze opdrachten een cijfer variabele aan

    let obj0 = new Opdracht('FRO',  'Opdracht1.0');
    let obj1 = new Opdracht('FRO',  'Opdracht1.1');
    let obj2 = new Opdracht('PR',   'Opdracht1.2');
    let obj3 = new Opdracht('SLB',  'Opdracht1.3');
    let obj4 = new Opdracht('BAP',  'Opdracht1.4');
    let obj5 = new Opdracht('NED',  'Opdracht1.5');
    let obj6 = new Opdracht('CMS',  'Opdracht1.6');
    let obj7 = new Opdracht('K-ID', 'Opdracht1.7');
    let obj8 = new Opdracht('ENG',  'Opdracht1.8');
    let obj9 = new Opdracht('PRO',  'Opdracht1.9');
        //bovenstaande maal drie = 9 let variabelen

// Kijk in week6 hoe je een variabele aanmaakt met het keyword new

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
