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
