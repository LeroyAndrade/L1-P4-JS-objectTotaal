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
for(i=0; i< 11; i++){
  if (cijfer !== i)
  {
  cijferOb.Cijfer += "Geen waarde ingevuld, u krijgt een willekeurig getal ", cijferOb.Cijfer =Math.floor(Math.random()*10)+1;
  } else {
          cijferOb.Cijfer = cijfer;
         }
  }
  }
let cijfer1 = new cijferObj("OBJ");
//let cijfer1 = new cijferObj("OBJ",10);
document.write(cijfer1.Cijfer);

// OPDRACHT 2.
// Maak verschillende variabelen voor je opdrachten.

    // Minimaal 3 opdrachten voor 3 verschillende vakken.
        // Totaal dus 9 opdrachten
        // Maak voor al deze opdrachten een cijfer variabele aan
// Kijk in week6 hoe je een variabele aanmaakt met het keyword new
    let op0 = new Opdracht('FRO',  'Opdracht1.0');
    let op1 = new Opdracht('FRO',  'Opdracht1.1');
    let op2 = new Opdracht('PR',   'Opdracht1.2');
    let op3 = new Opdracht('SLB',  'Opdracht1.3');
    let op4 = new Opdracht('BAP',  'Opdracht1.4');
    let op5 = new Opdracht('NED',  'Opdracht1.5');
    let op6 = new Opdracht('CMS',  'Opdracht1.6');
    let op7 = new Opdracht('K-ID', 'Opdracht1.7');
    let op8 = new Opdracht('ENG',  'Opdracht1.8');
    let op9 = new Opdracht('PRO',  'Opdracht1.9');

//Manier 0
let c0 = new cijferObj(op0.beschrijving,op0.vak);
let c1 = new cijferObj(op1.beschrijving,op1.vak);
let c2 = new cijferObj(op2.beschrijving,op2.vak);
let c3 = new cijferObj(op3.beschrijving,op3.vak);
let c4 = new cijferObj(op4.beschrijving,op4.vak);
let c5 = new cijferObj(op5.beschrijving,op5.vak);
let c6 = new cijferObj(op6.beschrijving,op6.vak);
let c7 = new cijferObj(op7.beschrijving,op7.vak);
let c8 = new cijferObj(op8.beschrijving,op8.vak);
let c9 = new cijferObj(op9.beschrijving,op9.vak);

//Manier 1
let c00 = new cijferObj(op0.beschrijving,op0.vak);
let c11 = new cijferObj(op1.beschrijving,op1.vak);
let c22 = new cijferObj(op2.beschrijving,op2.vak);
let c33 = new cijferObj(op3.beschrijving,op3.vak);
let c44 = new cijferObj(op4.beschrijving,op4.vak);
let c55 = new cijferObj(op5.beschrijving,op5.vak);
let c66 = new cijferObj(op6.beschrijving,op6.vak);
let c77 = new cijferObj(op7.beschrijving,op7.vak);
let c88 = new cijferObj(op8.beschrijving,op8.vak);
let c99 = new cijferObj(op9.beschrijving,op9.vak);

//let cijferRand=

// OPDRACHT 3.
// Vul de arrays met de opdrachten en cijfers die je hebt aangemaakt.
// Kijk in week6 voor een voorbeeld hoe je objecten in een array stopt!
let opdrachten = [c0,c1,c2,c3,c4,c5,c6,c7,c8,c9];
let cijfers = [];

function Periode (opdrachten, cijfers) {
    let periodeObj = this;

    periodeObj.opdrachten = opdrachten;
    periodeObj.cijfers = cijfers;
}//let student2Arr = [student2.Studentnummer,student2.Naam,student2.Klasnaam,student2.Opleiding +'<br>'];

// OPDRACHT 4.
// Maak een periode variabele op basis van de bovenstaande functie

//let periodeLet = new Periode(); = undefined
let periodeLet = new Periode("Objecten", 10);


// OPDRACHT 5.
// Schrijf de periode variabele naar een JSON variabele
// Kijk in week7 hoe je een JSON variabele aanmaakt

// OPDRACHT 6.
// Schrijf de json variabele naar de localStorage
// Kijk in week week 6 hoe je een variabele naar de localStorage wegschrijft
