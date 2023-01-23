/*====================================
Function vs Procedure
Funcția clasică: returnează resultatul codului executat
Procedura clasică: nu returnează rezultatul codului
======================================*/

//Function
function sum(a, b) {
  return a + b;
}

//Procedure
function sum(a, b) {
  console.log(a + b);
}

/*
Până la executarea funcției acesta este stocată în memorie
La momentul executării codului din funcție în memoria locală unde se execută funcția 
se inițializează toate variabilile, după ce funcția se execută toate variabilile sunt 
șterse întrucât aceastea au fost create doar pentru chemarea la moment
*/

/*====================================
Function declaration ( poate fi chemată înainte de declarare )
Function expresion ( nu poate fi chemată înainte de declarare )
IIFE ( Imediately-invoked function expression )
Arrow Function
======================================*/

//Function Declaration
function sum(a, b) {
  return a + b;
}

//Function Expression
const sum = function (a, b) {
  return a + b;
};

//IIFE ( Imediately-invoked function expression )
(function (a, b) {
  return a + b;
})(5, 6); //function parametres

//Arrow Function
const sum2 = (a, b) => {
  a + b;
};

/*
În cadrul funcției putem creea variabilă ( în contextul de chemare a funcției )însă aceasta va fi o variabilă locală 
astfel nu o putem accesa din-afara funcției

Dacă declarăm 2 variabile cu același nume dar una fiind creeată în contextul funcției
iar cealaltă în memoria globală acestea nu vor conflicta
Aceas comportament este ghidat de modul de căutare a varibilelor în cadrul funcție
funcția la momentul executării caută variabilile în memoria locală după care caută în
memoria globală, dacă identifică variabila necesară în memoria locală aceasta nu caută 
în cea globală

Astfel din funcție putem accesa variabile globale 
*/

/*==========================
Aria de vizibilitate a variabilelor

Variabila declarată cu ajutorul var: au vizibilitate globală
Variabila declarată cu ajutorul let / const : orice variabilă creată în contextul oricăror acolade are vizibilitate locală 
 
=================================*/
if (age >= 18) {
  let message = `Hello`; //variabilă locală vizibilă dar în contextul acoladelor
} else {
  let message = `Adios`; //variabilă locală vizibilă dar în contextul acoladelor
}

{
  let message = `Hellor`; //variabilă locală vizibilă dar în contextul acoladelor
}

/*==============================
Funcții de nivel superior: funcții care returnează o altă funcție care vine ca parametru
Callback function : funcții care sunt chemate în interiorul altor funcții
================================*/

function copyArrayAndDoSmoth(arr, instruction) {
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(instruction(arr[i])); // call numSqaure
  }
  return output;
}

function numSquared(num) {
  return num * num;
}

function divide(num) {
  return num / 2;
}

const result = copyArrayAndDoSmoth([1, 2, 3, 4], numSquared);
const result2 = copyArrayAndDoSmoth([10, 20, 30, 40], divide);

/*===================================
Funcție de Recursie: funcția se cheamă singură pe ea
1. Condiția terminală ( condișia de stopare a funcției )
2. Regula de parcurgere pe recursie
====================================*/

function fatorial(n) {
  if (n === 0) return 1; // Condiția Terminală
  return n * factorial(n - 1); // Regula de parcurgere
}

/*
la momentul cînd funcția încearcă să returneze resultaul aceasta se cheamă
pe sine cu parametru transmis în aces moment funcția chemată inițial rămiine în așteptare
pînă funcția din return nu va returna rezultatul  ( acest comportment îl moștenesc
și funcțiile chemate de return conform regulii de parcurgere a recursiei   )
La momnetul cînd ultima funcție chemată returnează nu o altă funcție ci un rezultat concret 
toate funcțiile deasemenea recursiv începe a return arezultatele sale în baza rezultatelor 
returnate de funțiile din adîncul recursiei
*/

/* Function Callback Stack

1. Prima funcție se execută si se returnează pe sine
2. Funcia chemată de prima funcție se execută și se returnează pe sine a treia oară
3. A treia funcție  se execută și returnează resultatul concret ( nu pe sine )
//După ce recursia ajunge la condiția terminală 
1. A Doua funcție returnează rezulatatul în baza rezultatului anterior al funcției 3
1. Prima funcție returnează rezulatatul final în baza rezultatului anterior al funcției 2
*/

/*
Closure: funcție care returnează o altă funcție
funcția returnată memorează ( scope / contextul funcției care o returnează )
*/

function hello(name) {
  const helloName = (surname) => console.log(surname, name); // Arrow Function
  return helloName; // return function
}

/*
dacă funcția hello() returnează altă 
funcție putem salva rezultatul în altă variabilă
astfel helloWorld va fi funcție întrucît funcția inițială returnează funcție
*/
const helloWorld = hello("world"); // valoarea world se închide
helloWorld("Vikea"); // Vikea world
helloWorld("Valera"); //Valera world
helloWorld("Turututu"); //Turututu world
helloWorld("Aleja"); //Aleja world

const helloWorld2 = hello("Rusfeld"); // valoarea world se închide
helloWorld2("Vikea"); // Vikea Rusfeld
helloWorld2("Valera"); //Valera Rusfeld
helloWorld2("Turututu"); //Turututu Rusfeld
helloWorld2("Aleja"); //Aleja Rusfeld

/*
Întrucît funcția helloName se află în contextul execuției a funcției hello
aceasta are acces la parametrele și variabilile funcției care o returnează

Parametrul name al fn hello oadată determinat se izolează dar
fn helloName are acces la ea și o poate folosi

astfel la chemarea fn hello cu parametru name acest name rămiine închis și nemodificat în funcție
la returnarea fn helloName cu paramentru surname conform instrucționilor aceasta
trebuie să ia valoarea name din prima funcție și să o combine cu valoarea surname din funcșia returnată

*/

/*========================================
Contextul this în cadrul funcției
intrumente de setare a contextului
.apply(): 1 parametru este contextul, al doilea o matrice cu paramentri [1, 2,] sau cu un parametru [1] ( matricea este obligatorie )
.bind(): recepționează daor contextul necesar
.call(): 1 parametru este contextul, orice număr de paramentri prin virgulă
==========================================*/

const developer = {
  name: "Nicola",
  salary: 2500,
  getBonus(sum1, sum2) {
    console.log(this.name, "has salary", this.salary + sum);
  },
};

const manager = {
  name: "Aliona",
  salary: 1800,
};

developers.call(manager, 150);
/*call primul paramentru este contextul necesar, al doilea 
paramentru este paramentrul necesar pentru funcție*/
developers.apply(manager, [150, 140]);
developers.apply(manager, [140]);
/*call primul paramentru este contextul necesar, al doilea 
paramentru este paramentrul necesar pentru funcție*/

manager.getBonus = developer.getBonus.bind(manager);
/*
Creăm metoga getBonus în obiectul manager după care cu ajutorul 
bind() setăm contextul necesar, astfel obiectul manager are 
metoda getBonus cu contextul setat pe sine 
Acum această metodă poate fi chemată
manager.getBonus(1, 2) fără a ne mai referi la developer
 */
