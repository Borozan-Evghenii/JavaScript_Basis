b; /*
DOM > Document Object Model 

        => DOM => document
window  => BOM (Browser Object Model) conține => navigator( conține date despre browser, sistemul de operare pe care rulează ), screen (conține date despre marimea, orientarea), location (url), history(istoria navigării), XMLHttpRequest (async Request)
        => JavaScript 

Window este un obiect global al browserului care conține subelementele 
DOM care prezintă obiectul document, conține toate obiectele HTML, BOM care conține informație despre utilizator și 
Javascript care conțien Metode incorporate pentur interacțiunea cu JS
*/
window.screen; // returnează parametrii ecranului
window.document; // returnează pagina toate elementele HTML

document.getElementById("form");
document.getElementsByClassName("className");
// returnează o colecție cu toate elementele găsite
document.getElementsByTagName("h1");
// returnează o colecție cu toate elementele găsite
document.querySelector(".className");
// returnează primul element identificat cu clasa .className
document.querySelector("#elementId");
//returnează elementul cu ID elementId
document.querySelector("form");
//returnează primul element cu tagul form
document.querySelectorAll(".className");
//returnează o colecție cu toate elementele cu clasa .className de pe pagină
document.querySelectorAll("form");
//returnează o colecție cu toate elementele cu tagul form de pe pagină

//Lucrul cu elementele DOM
p.innerText; //returnează conținutul paragrafului
p.innerHTML; //returnează conținutul paragrafului împreună cu Tagurile HTML care le conține

p.innerText = "Some Text"; // setăm conținutul paragrafului (poate include doar text)
p.innerHTML = "<b>Some Text</b>"; //setăm conținutul paragrafului (poate include text/ HTML)

//Lucru cu Atributele
a.getAttribute("href"); //va returna valoarea atributului href
a.href; //va returna valoarea atributului href
a.setAttribute("href", "./homepage/blog"); // setăm valoarea atributului
a.className; //va returna valoarea atributului class
a.className = "colorBlue"; //setăm valoarea atributului class
label.htmlFor; //va returna atributul for pentru label

//Lucru cu CSS ( CSSStyleDeclaration )
a.style.color = "blue";
a.style.display = "blue";

//Lucru cu data Atributele
a.getAttribute("data-id"); //va returna valoare date-id
a.setAttribute("data-id", "6"); //setăm valoare date-id
a.dataset.id; //va returna valoarea data-id
a.dataset.id = "6"; //setăm valoarea data-id

/*=========================================
Iterarea HTML colecțiilor de node elemente 
=========================================*/
const elements = querySelectorAll(".className");
//ne returnează colecție HTML
elements.forEach((el) => (el.style.color = "green"));
//colecția HTML are metoda forEach

const elements2 = getElementsByClassName("className");
//ne returnează colecție JS care nu are metoda forEach
for (let element of elements) {
  element.style.color = "blue";
}

/*=========================================
Lucrul cu clasele
=========================================*/
a.classList; //va returna o matrice care con'ine fiecare className aparte
a.classList.add("class"); //va adăuga clasa
a.classList.remove("class"); //va șterge clasa
a.classList.contains("class"); //conține matricea un astfel de element
a.classList.toggle("class"); //automat adaugă sau șterge class din matricea de classuri

/*=========================================
Navigarea relativă între elementele DOM
=========================================*/

const el = document.querySelector(".class");

el.parentElement; // va returna ca obiect părintele ce conține elementul el
el.children; // va returna o colecție de elemente pe care le conține elementul el
el.children[0]; // va returna ca obiect primul element care este copilu lui el
el.firstElementChild; // va returna ca obiect primul element care este copilu lui el
el.lastElementChild; // va returna ca obiect ultimul element care este copilu lui el
el.nextElementSibling; // va returna ca obiect următorul element
el.nextElementSibling.nextElementSibling; // va returna ca obiect următorul element trecând peste unul
el.previousElementSibling; // va returna ca obiect elementul precedent

/*=========================================
Lucrul cu evenimentele 
=========================================*/

//<a onclick='fn1'>Text</a>

el.onclick = fn1;
el.onmouseenter = fn1;
// la hover (se setează doar o funcție)
el.onmouseenter = null;
// șterem evenimentul

function fn1(e) {
  console.log("event!!!");
}
el.addEventListener("click", fn1);
//addEventListener poate primi mai multe funcții pentur acelaș eveniment
el.removeEventListener("click", fn1);
//pentru a șterge eventListener scriem evenimentul concret care dorim săl ștergem și funcția pentru acest eveniment
el.addEventListener("click", () => {
  console.log("event!!");
});
//Un eventListener declarat astfel nu poate fi șters

/*=========================================
Obiectul evenimentului și lucrul cu acesta 
fiecare funcție folosită la procesarea
 evenimentelor ca paramentr primește 
 obiectul event care conține informație despre eveniment
=========================================*/
const input = document.querySelector("input");

input.addEventListener("keypress", handleClick);

function handleClick(event) {
  if (event.key === "Enter") {
    //controlăm ce tastă a fost apăsată
    event.target.nextElementSibling.focus();
    //luăm elementul întors de eveniment și punem focus pe următorul element
  }
}

/*=========================================
Stoparea comportamentului default 
event.stopPropagation()
împiedică propagarea evenimnetului pe părinții elementului pentru care este setat evenimentul ( currentTarget : returnează elementul concret care a dat start evenimentului )
event.preventDefault()
împiedică comportamentul obișnuit form( pagina nu se reîncărca ), linkul a( linkul nu va funcționa )
=========================================*/

/*=========================================
Crearea și Ștergerea dinamică a elementelor
=========================================*/

const list = document.querySelector(".list");

function handleClickElement(event) {
  //this se referă la elementul pe care sa dat click
  const newToDo = this.previousElementSibling.value.trim();
  newToDo ? createNewElement(newToDo) : alert("write some text");
}

function createNewElement(text) {
  const li = document.createElement("li"); //Creăm un element li
  li.innerText = text; //setăm value
  li.classList = "todo-item"; // adăugăm class
  li.addEventListener("click", removeTodo); //adăugăm ascultător de evenimente pentru elementul nou creat
  list.append(li); //introducem elementul creat în elementul list
  list.prepend(li); //introducem elementul creat în elementul list
}

function removeTodo() {
  //this se referă la elementul pe care sa dat click
  this.removeEventListener("click", removeTodo);
  //Ștergem ascultătorul de evenimente
  this.remove();
  //ștergem elementul
}

/*=========================================
Proprietățile și metodele 
=========================================*/

const block1 = document.querySelector("#block");
//căutarea identificatorului se efectuează în tot documentul
const block2 = block1.querySelector("#too");
//căutarea identificatorului se efectuează doar în limitele block1

block2.getBoundingClientRect();
//returnează parametrii geometrici ale elementului ( width, height , poziționarea absolută top, bottom, letft, right )

block2.insertAdjacentHTML(
  "afterbegin",
  //primul parametru primește poziția unde urmează a fi inclus HTML
  //afterend: după sfîrșitul elementului
  //afterbegin: la începutul elementului
  `
  <h2 class="class">Heading</h2>
  <p>Proposition</p>
`
);
//permite crearea mai multor elemente deodată (createElement)

block2.closest("a");
//returnează cel mai apropiat părinte cu tagul a
block2.closest("#block");
//returnează cel mai apropiat părinte cu id-ul dat

/*=====================================
Lucru cu momeria Browserului
LocalStorage: timpul de stocare este nelimitat ( poate fi șters manual )
SessionStorage: timpul de stocare a datelor este limitat de sesiunea utilizatorului ( când se închide browserul sessionStorage se șterge )
Ambele metode primesc infromația de tip string
======================================*/
//Toate ănstrucșiunile de mai jos sunt valabile și pentru sessionStorage
localStorage.setItem("todos", "make react app");
//setItem adaugă informația în local storage primind parametrii (key, keyValue)

localStorage.getItem("todos");
//getItem returnează elementul după keyea acestuaia în caz că cheia nu există întoarce null

localStorage.clear();
//șterge toată înformația din localStorage

function saveToStorge(todo) {
  const todos = JSON.parse(localStorage.getItem("tasks") || []);
  //JSON.parse() transformă string în obiect pentru ca ulterior să putem interacționa
  localStorage.setItem(JSON.stringify([...todos, todo]));
  //JSON.stringify() transformă orice în str
}

document.addEventListener("DOMContentLoaded", () => {
  //acest ascultător de evenimente se va executa după ce toată informația de pe pagină va fi vizibilă
  const todos = JSON.parse(localStorage.getItem("tasks") || []);
  if (todos) {
    todos.forEach((e) => {
      e.createNewElement(todo);
    });
  }
});
