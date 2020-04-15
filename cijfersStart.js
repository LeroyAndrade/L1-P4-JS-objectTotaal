function opdracht(vak, beschrijving) {
    let opdrObj = this;

    opdrObj.vak = vak;
    opdrObj.beschrijving = beschrijving;
}
// opdracht 1.
// Maak de cijfer functie af.

// opdracht is een object die met behulp van de bovenstaande
// functie is aangemaakt.

// cijfer een nummer van 0 tot 10

function CijferObj(opdracht, cijfer) {
let cijferOb = this;
cijferOb.opdracht = opdracht;
cijferOb.cijfer = cijfer;
   if (cijfer >=11){
     cijferOb.cijfer = "Geen juiste waarde ingevuld, u krijgt een willekeurig getal toegewezen " + (Math.floor(Math.random()*10)+1);
    }
   else{
     cijferOb.cijfer = cijfer;
    }
}
//let cijferOpgv = new CijferObj("OBJ");
let cijferOpgv = new CijferObj("Object opdracht 1, cijfer is een ",10);
document.write(cijferOpgv.opdracht + cijferOpgv.cijfer + '<br/>');

// opdracht 2.
// Maak verschillende variabelen voor je opdrachten.

    // Minimaal 3 opdrachten voor 3 verschillende vakken.
        // Totaal dus 9 opdrachten


    let op0 = new opdracht('FRO',  'opdracht1.0');
    let op1 = new opdracht('FRO',  'opdracht1.1');
    let op2 = new opdracht('FRO',  'opdracht1.2');
    let op3 = new opdracht('SLB',  'opdracht1.3');
    let op4 = new opdracht('SLB',  'opdracht1.4');
    let op5 = new opdracht('SLB',  'opdracht1.5');
    let op6 = new opdracht('CMS',  'opdracht1.6');
    let op7 = new opdracht('CMS',  'opdracht1.7');
    let op8 = new opdracht('CMS',  'opdracht1.8');

//cijfer variabele
  // Maak voor al deze opdrachten een cijfer variabele aan
  // Kijk in week6 hoe je een variabele aanmaakt met het keyword new

//Manier 0
let c0 = new CijferObj(op0.beschrijving,op0.cijfer);
let c1 = new CijferObj(op1.beschrijving,op1.cijfer);
let c2 = new CijferObj(op2.beschrijving,op2.cijfer);
let c3 = new CijferObj(op3.beschrijving,op3.cijfer);
let c4 = new CijferObj(op4.beschrijving,op4.cijfer);
let c5 = new CijferObj(op5.beschrijving,op5.cijfer);
let c6 = new CijferObj(op6.beschrijving,op6.cijfer);
let c7 = new CijferObj(op7.beschrijving,op7.cijfer);
let c8 = new CijferObj(op8.beschrijving,op8.cijfer);

//Manier 1

// opdracht 3.
// Vul de arrays met de opdrachten en cijfers die je hebt aangemaakt.
// Kijk in week6 voor een voorbeeld hoe je objecten in een array stopt!

let opdrachten = [c0,c1,c2,c3,c4,c5,c6,c7,c8];

function Periode (opdrachten, cijfers) {
    let PeriodeObj = this;

    PeriodeObj.opdrachten = opdrachten;
    PeriodeObj.cijfers = cijfers;
}
// opdracht 4.
// Maak een periode variabele op basis van de bovenstaande functie

//let periodeLet = new Periode(); = undefined
let periodeLet = new Periode("Objecten", 10);
console.table(PeriodeObj.opdrachten, PeriodeObj.cijfers);

// opdracht 5.

//opdracht 5.1 BEGIN
// Schrijf de periode variabele naar een JSON variabele
// Kijk in week7 hoe je een JSON variabele aanmaakt
function createJSON(){
  let myObj =periodeLet;

  //Stringify converts naar string
  let myJSONOBJ = JSON.stringify(myObj);


// opdracht 6.
// Schrijf de JSON variabele naar de localStorage
  // Plaays object in storage
  localStorage.setItem("myObj", myJSONOBJ);

//EXTRA eigen input: toon item vanuit storage;
  // Retrieve the object from storage
  let retrievedObject = JSON.parse(localStorage.getItem("myObj"));
  document.write('<br/>'+"Naam is "+retrievedObject.opdrachten+" en student cijfer is "+periodeLet.cijfers);
//  console.log("retrievedObject: ", JSON.parse(retrievedObject));

json.appendChild(abc);
window.body.appendChild(json);
}

createJSON();
