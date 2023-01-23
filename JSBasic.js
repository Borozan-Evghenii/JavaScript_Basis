/*=====================================
Tipuri și Valori
=======================================*/

undefined; //Orice variabilă cărei anu i sa atribuit o valoare are valoarea undefined
null; //nimic

//Boolean
true, false;

//String
("String");
"String"`String`;

//Number BigInt
18;
3.14;
NaN; //not a number

//Tip Object
const varia = {}; //Object
const arr = []; //array
const func = () => {}; //function

/*=====================================
Operatori Matematici 
 - , + , *, /, %, **
=======================================*/

/*=====================================
Operatori Unari 
 - , + 
=======================================*/
+"2"; //number 2
+"2 sad"; // NaN

"Hello" + "world"; // "Hello world"
2 + "2"; // 22
"2" + 2; // 22

/*=====================================
Increment / Decrement
 -- , ++ 
 =+, -=, *=, /=
=======================================*/
let x = 1;
console.log(x++); //x = x + 1 result 2
console.log(++x); //x = x + 1 result 2
console.log(x--); //x = x - 1 result 0
console.log(--x); //x = x - 1 result 0
console.log((x += 4)); //x = x + 4
console.log((x -= 4)); //x = x - 4
console.log((x *= 4)); //x = x * 4
console.log((x /= 4)); //x = x / 4

/*=====================================
Expresii Logice
>, <, // mai mare , mai mic
>=, <=, //mai mare sau egal , mai mic sau egal
!=, //nu este egal
==, // egal
===, // total egal ( după tipul de date )
=======================================*/

/*=====================================
Expresii Logice Compuse
&& // expresia logică și ( true dacă ambele expresii sunt true )
||  // expresia logică sau ( true dacă na dintre  expresii este true )
=======================================*/
1 === 1 && 2 === 2; // true
1 === 1 && 3 === 2; // fase
1 === 1 || 3 === 2; // true
1 === 1 || 2 === 2; // true
1 === 2 || 3 === 2; // false
1 === 1 || (2 === 2 && 1 === 2); //true

/*=====================================
Operatori de condiție
=======================================*/
//if else
if (1 == 1) {
  //body
} else if (2 == 2) {
  //body
} else {
  //body
}

//switch
let strStatus = "ide";
switch (strStatus) {
  case "key":
    console.log("is");
    break; //breack se folosește pentru a opri executarea dacă rezulatul este true
  case "loading":
    console.log("isLoading");
    break;
  case "ide":
    console.log("isIde");
    break;

  default: //dacă nu a fost găsită varianta corectă
    console.log("isDefault");
    break;
}

/*=====================================
Expresii Ternare
condiția ? dacă este adevăr : dacă nu este adevăr
=======================================*/
const age = 12;

age >= 18 ? console.log(isAdult) : console.log(IsntAdult);

/*=====================================
Array 
=======================================*/

const array = [23, 34, 23, 32];
console.log(array[0]); //putem solicita elementul după index
array[2] = 2; //putem redefini un anumit element după index
array.push(36); //adaugă un element la sfîrșitul masivului
array.pop(); //șterge un element din sfîrșitul masivului

/*=====================================
Cicle 
=======================================*/
//For
for (let i = 0; i < array.length; i++) {
  const element = array[i] * 2;
  console.log(element);
}

/*=====================================
Operatorii 
Breack: oriunde ar fi oprește executarea ciclului
Continue: omite iterarea ciclului în baza codiției
=======================================*/

for (let i = 0; i < array.length; i++) {
  if (i % 2 === 0) continue;
  // dacă if este true omitem rezultatul
  console.log(i);
}

/*=====================================
Metoda Math
================================= ======*/

console.log(Math.PI); // returnează valoare PI
console.log(Math.random); // returnează o cifră aleatorie
console.log(Math.floor); // rotungește valoare spre mai mic
console.log(Math.ceil); // rotungește valoare spre mai mic
console.log(Math.round); // rotungește valoare după regulile matematice 1.2 -> 1; 1.7 -> 2

console.log(Math.round(Math.random() * 10));
