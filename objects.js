/*=====================================
Obiecte
=======================================*/
const obj = {
  name: "Ilia",
  //Chenie : Valoare,
  age: 30,
  skills: ["JS", "TS", "CSS"],
  isMaried: false,
  isAdult: true,
  [haveChild]: true,
  addAge() {
    console.log(this.age); //this context
  },
};

obj.name; // prin punct ne putem referi la oricare proprietate a obiectului
obj.name = "Vasile"; //putem redefini valoarea proprietății
delete obj.isMaried; //putem șterge proprietatea

obj in age; // conține  obiectul obj proprietatea age (true | false)

/*=====================================
For in: only for objects
=======================================*/

for (const prop in obj) {
  console.log(prop); //afișează cheile proprietăților
  console.log(obj[prop]); //afișează valorile proprietăților
}

/*=====================================
For of : only for arrays
=======================================*/
const numbers = [];
for (const number of numbers) {
  console.log(number);
}

/*=====================================
Context: this
addAge() {
    console.log(this.age); 
},
întrucît in JavaScript accesul la variabile se 
execută rin intermediul linkului ( this ) conține 
linkul obiectului în contextul căreia este solicitat
=======================================*/

/*=====================================
Metode integrate pentru string
=======================================*/
const str = "dvfdv";
str.toLowerCase();
str.toUpperCase();
str.slice(0, 5); //returnează doar primele 5 simboluri
str.include("dv"); // returnează true/false dacă str. conține această combinație
str.indexOf("js"); // returnează indexul combinației dacă aceasta este inclusă în str
str.split().join(" |");
/*split returnează array din str ['d', 'v', 'f'] 
iar join(' |') unește toate elementele array 
delimitîndule cu simbolul necesar (' |')*/
str.trim(); //returnează str eliminînd toate 'space' locurile libere

//Chaining str.toUpperCase().include('dffv').indexOf('d')

/*=====================================
Array metods
pop: șterge elementul la finele array
push: adaugă elementul la finele array
shift: adaugă elementul la începutul array
unshift: șterge elementul la începutul array
=======================================*/
const num = [1, 2, 3, 4, 5, 6];

num.includes();
num.indexOf();
num.slice(0, 3);
const num2 = num.concat([7, 8, 9, 10]); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/*=====================================
Errors
=======================================*/

try {
  // block try to execute code
  function sun(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("error mesage");
      /* dacă acest cod se execută
       mesajul carel conține 
    va fi trimis în blockul catche */
    }
  }
} catch (error) {
  console.error(error)
  // se prezintă mesajul trimis din throw
}
