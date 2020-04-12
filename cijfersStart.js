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
for(i=0; i<= 10; i++){
    if (cijfer !== i){
     cijferOb.Cijfer = "Geen juiste waarde ingevuld, u krijgt een willekeurig getal toegewezen " + (Math.floor(Math.random()*10)+1);
   }else{
      cijferOb.Cijfer = cijfer;
       }
    }
}
let cijferOpgv = new cijferObj("OBJ");
//let cijfer1 = new cijferObj("OBJ",10);
document.write(cijferOpgv.Cijfer);

// OPDRACHT 2.
// Maak verschillende variabelen voor je opdrachten.

    // Minimaal 3 opdrachten voor 3 verschillende vakken.
        // Totaal dus 9 opdrachten


    let op0 = new Opdracht('FRO',  'Opdracht1.0');
    let op1 = new Opdracht('FRO',  'Opdracht1.1');
    let op2 = new Opdracht('FRO',  'Opdracht1.2');
    let op3 = new Opdracht('SLB',  'Opdracht1.3');
    let op4 = new Opdracht('SLB',  'Opdracht1.4');
    let op5 = new Opdracht('SLB',  'Opdracht1.5');
    let op6 = new Opdracht('CMS',  'Opdracht1.6');
    let op7 = new Opdracht('CMS',  'Opdracht1.7');
    let op8 = new Opdracht('CMS',  'Opdracht1.8');

//cijfer variabele
  // Maak voor al deze opdrachten een cijfer variabele aan
  // Kijk in week6 hoe je een variabele aanmaakt met het keyword new

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

//Manier 1

// OPDRACHT 3.
// Vul de arrays met de opdrachten en cijfers die je hebt aangemaakt.
// Kijk in week6 voor een voorbeeld hoe je objecten in een array stopt!

let opdrachten = [c0,c1,c2,c3,c4,c5,c6,c7,c8];

function Periode (opdrachten, cijfers) {
    let periodeObj = this;

    periodeObj.opdrachten = opdrachten;
    periodeObj.cijfers = cijfers;
}
// OPDRACHT 4.
// Maak een periode variabele op basis van de bovenstaande functie

//let periodeLet = new Periode(); = undefined
let periodeLet = new Periode("Objecten", 10);
console.table(periodeLet);

// OPDRACHT 5.

//Bekijk of Localstore opgeroepen kan worden:
function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}
//Opdracht 5 BEGIN
// Schrijf de periode variabele naar een JSON variabele
// Kijk in week7 hoe je een JSON variabele aanmaakt
function createJSON(){
let verwijzing = document.querySelector("#json");
let json = document.createElement('a');
json.id="jsona";

//JSON
/*let applicationData = "Content-type; application/json;charset=utf-8" + "encodeURIComponent(JSON.stringify(obj))";
let applicationData = "Content-type; application/json;charset=utf-8" + encodeURIComponent(JSON.stringify(obj));
json.href += 'readme.md','data:' + applicationData;
*/json.href="readme.md";
json.download="json.json";
json.dataset.info='datasetInfo';



verwijzing.appendChild(json);
let abc = document.createTextNode("Download");

//LocalStorage
if (storageAvailable('localStorage')) {
  // localStorage OK
  var obj = { name: "Pietje Puk", age: 30, city: "Nederland" };

  // Put the object into storage
  localStorage.setItem('testObject', JSON.stringify(obj));

  // Retrieve the object from storage
  var retrievedObject = localStorage.getItem('testObject');

  console.log('retrievedObject: ', JSON.parse(retrievedObject));
}
else {
  // localStorage NOK
}

json.appendChild(abc);
window.body.appendChild(json);
}

createJSON();

// OPDRACHT 6.
// Schrijf de json variabele naar de localStorage
// Kijk in week week 6 hoe je een variabele naar de localStorage wegschrijft
