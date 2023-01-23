/*=========================================
 Stack: FILO ( intră primul iese ultimul )
 Queue: FIFO ( intră primul iese primul )
 ==========================================*/

/*========================================
 Principiul Imutable (Imutabilitate)
 Acesta presupune că folosind anumite date 
 noi nu le schimbăm datele originale, adică
 trebuie să folosim metode care folosind datele originale
 returnează alte date modificate dar cele originale nu se modifică
 Nu folosim metodele pop, push, shift, unshift, sort, reverse: întrucît acestea modifică matricea originală
 Folosim map, filter, reduce
 ==========================================*/

//Method Filter: retunează o nouă structură de date

const number = [1, 2, 3, 4, 5, 6];
const users = [
  {
    id: 1,
    name: "Brad Pete",
    movies: ["Stnach, Inglorious Bastarder"],
    isMaried: true,
  },
  {
    id: 2,
    name: "Diana Moore",
    movies: ["Stnach"],
    isMaried: true,
  },
  {
    id: 3,
    name: "Olivie Giroud",
    movies: ["Stnach, Inglorious Bastarder"],
    isMaried: false,
  },
];

const oddNumber = number.filter((num) => num % 2 !== 0);
const isMaried = users.filter((user) => user.isMaried);
const movie = users.filter((user) =>
  user.movies.includes("Inglorious Bastarder")
);

//Method Reduce: retunează o nouă structură de date

const staff = [
  {
    id: 1,
    name: "Josh",
    salary: 1200,
  },
  {
    id: 4,
    name: "Josh",
    salary: 5200,
  },
  {
    id: 1,
    name: "Josh",
    salary: 1700,
  },
  {
    id: 1,
    name: "Josh",
    salary: 1800,
  },
];

const budget = staff.reduce((accumulator, user) => {
  if (user.salary < 1000) {
    return (accumulator += user.salary);
  }
  return accumulator;
}, 0);
/* 
 zero este valoare inițială pentru accumulator aceasta poate fi
 de tip umber, object, array sau altul în dependeță de ce tip de
 date doriți să returneze reduce
 */

// Method Find in colection: returnează obiectul unei colecții care corespunde conțiției
const developer = [
  {
    id: 1,
    fullName: "John Dee",
    skills: ["HTML", "CSS", "JavaScript"],
    area: "frontend",
  },
  {
    id: 2,
    fullName: "Adam Smith",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    area: "frontend",
  },
  {
    id: 3,
    fullName: "Will Dowson",
    skills: ["HTML", "PHP", "Laravel"],
    area: "backend",
  },
  {
    id: 4,
    fullName: "Sam Wilson",
    skills: ["HTML", "CSS", "JavaScript", "PHP"],
    area: "fullstack",
  },
];

developer.find((element) => element.area === "frontend");
//va returna obiectul din colecție care area ca valoare în aria === frontend

developer.find((element) => element.skills.includes("React"));
//va returna true și obiectul care conține 'React'

developer.findIndex((element) => element.skills.includes("React"));
//va returna indexul obiectului care corespunde condiției

//Method Sort & Reverse : sortează matricea modificînd matricea originală
const numbers = [1, 2, 3, 4, 10, 12, 23];
const cities = ["Madrid", "Amsterdam", "Paris", "Berlin", "Kiev"];
//Pentru numere
numbers.sort((a, b) => a - b); //[1, 2, 3, 4, 10, 12, 23]
numbers.sort((a, b) => b - a); //[23, 12, 10, 4, 3, 2, 1]
numbers.revers((a, b) => b - a); //[1, 2, 3, 4, 10, 12, 23] inversează matricea
//Pentru string
function sorting(a, b) {
  if (a > b) {
    return 1;
  }
  if (b > a) {
    return -1;
  }
  return 0;
}
cities.sort(sorting);
//for colection
developer.sort((a, b) => sorting(a.area, b.area));
//sortarea obiectelor din colecție după câmpul area a fiecărui element din colecție
items.sort((a, b) => a.localeCompare(b, "fr", { ignorePunctuation: true }));
//Folosim metoda localeCompare pentru sortarea string 'fr' limba, opțiuni precum ignore sensitive

//Operatorul Spred extrage elementele
//Operatorul Rest extrage elementele

const numbers3 = [1, 2, 3, 4, 10, 12, 23];
const cities2 = ["Madrid", "Amsterdam", "Paris", "Berlin", "Kiev"];

const arrg = ["Riga", ...cities2, "Moscow", ...numbers3];
// Folosim operatorul Spred a extras toae elementele din matricile cities2 și numbers3 după care noi le includem în altă matrice

const anotherDeveloper = {
  ...developers, // copiem tot obiectul developers în obiectul anotherDevelopers
  constantly: true,
  moreWorks: true,
};

//putem copia un oarecare obiect fără a avea legături între obiectul copiat și cel original

function sum(a, b, ...args) {
  //a = primul element al matricei transmise = 1
  //b = al doilea element al matricei transmise = 2
  //...args = al treilea element este o matrice [ 3, 4, 10, 12, 23 ]
  // în acest exemplu ... lucrează ca operatorul rest adică cumulează toate elementele care au rămas întro matrice
}

sum(...numbers3);

//Destructurizarea matricelor

/*
La destrecturizarea matricelor este importantă consecutivitatea
întrucât matricea este indexată  
*/

const [madrid, amst, paris] = cities2;
// la momentul destructurizării putem redenumi elementul necesar
//madrid = conține primul element al matricei Madrid
//amst = conține primul element al matricei Amsterdam

const [Madrid, , Paris] = cities2; // trecem peste Amsterdam
const [Madrid2, , , Berlin] = cities2; // trecem peste Amsterdam și paris
//dacă dorim să trecem peste un element al matricei punem doar virgula ,

const [
  Madrid3 = "", // valoarea defaut dacă altă valoare nu există
  Amsterdam,
  ...otherCities //în otherCities se conține martriecea din orașele rămase ( operatorul rest pentru matrice întotdeauna se folosește ultima )
] = cities2 || [];
//construcția '|| []' setează valoarea default pentur matricea cities (dacă matricea cities2 nu există atunci se returnează matrice goală )

const num = [1, 2, [3, 4], 5, 6];
const [
  a = 1,
  b = 2,
  [c = 3, d = 4] = [], // dacă avem o matrice inclusă astfel putem să declarăm valoarea default
] = num || [];

/*=================================
Gobal methods
=================================*/
const obj = {
  a: 1,
  b: 2,
  c: 3,
};

Object.keys(obj);
// returnează matrice cu cheile obiectului [a, b, c]
Object.values(obj);
//returnează o matrice de valori [1, 2, 3]
Object.entries(obj);
/*
returnează matrice care include matrice cu fiecare cheie cu valoarea sa
[[a, 1], [b, 2], [c, 3]]
*/

arrg.isArray(obj); //returnează true| false dacă este matrice
Array.from("hello");
// returnează matrice din argumentul transmis ['h', 'e','l', 'l', 'o']
Array.of("ygv"); // returnează[ 'ygv']
Array.of(1, 2, 3); // returnează[ 1,2,3]
Array.of(1, true, "asd"); // returnează[ 1, true,'asd']

/*=============================================
JSON ( JavaScript Object Notation )
se folosește pentru transmiterea datelor sau configurare
//Am creeat fișierul JSON.json
=============================================*/
const JSONObject = `{
  "firstName": "Michael",
  "age": 36,
  "skills": ["CSS"],
  "language": {
    "key": "value"
  }
}`;

const objec = { a: 1 };
const myObj = JSON.parse(JSONObject); //trasnformă JSON în obiect js
JSON.stringify(objec); //returnează string din orice obiect
