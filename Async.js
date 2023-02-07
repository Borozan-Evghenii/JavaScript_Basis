/*==============================================
Funcții sincone și asincrone 
==============================================*/

console.log("Hi there, me first");

setTimeout(() => console.log("Hi there, me second"), 0);

console.log("Hi there, me thirt");

/* 
setInterval este o funcție asincronă
Executarea funcțiilor asincrone în JS se efectuează:

### Descrierea Event Loop ####
Începe executarea instrucțunilor se cheamă 
( Callback Stack ) Ordinea de executare care 
după ordine execută instrucțiunile JS, când 
întîlnește o instrucțiune asincronă instrucțiunea  
trece în webAPI(pentru executarea instrucțiunii 
care folosește metode din webAPI) după trec în task queue 
Ordinea de executare a instrucțiunilor asincrone
care așteaptă executarea instrucțiunilor sincrone, după 
executarea instrucțiunilor sincrone, urmează 
plasarea în ( callBack stack ) a instrucțiunilor 
asincrone din taskqueu și ulterior executarea acestora.

//Astfel codul de mai sus se va executa în ordinea următoare:
1. console.log("Hi there, me first");
2. setTimeout(() => console.log("Hi there, me second"), 0);
# întrucât este instrucțiune asincronă din callback Stack trece în webAPI după care în TaskQueue
# unde așteaptă executarea înstrucțiunilor sincrone
3.console.log("Hi there, me thirt");

###Rezultatul executării în consolă
1."Hi there, me first"
2."Hi there, me thirt"
3."Hi there, me second"
*/

/*===========================================
Promises este o interfată de interacțiune cu 
funcțiile asincrone 
#Permite procesarea sincronă a rezultatelor funcțiilor asincrone 

#Promis învelește funcțiile asincrone

Promis are 3 statuturi
#pending: în așteptarea executării funcțiilor asyncrone
#fulfilled: operațiunea sa executat cu succes
#rejected: operațiunea sa executat cu eroare

Promis are 3 metode
#then : procesarea răspunsului pozitiv
#catch: procesarea erorilor
#finnaly: funcția sa executat idiferent de răspunsul acesteia ( resolve sau reject )

Promis object {
  Value: 
  # valoarea pe care promis o returnează (eroare sau valoarea resolve)
  apariția acestei valori este trigger pentru transmiterea valorii
  în onFulfilled care conține funcțile then ( valoarea se transmite ca parametru pentur aceste funcții )

  onFulfillment: [fn1, fn2, fn3] 
  # Conține toate funcțiile declarate prin then ( cîte then atîtea funcții )  

  onRejection: [fn1]
  #Conține funcțiile din catch trigger pentru care este chemarea funcției reject
}



## Pentru stocarea funcțiilor asincrone cuprinse de promis 
există analog al tasks queue , microtasks queue unde se 
plasează funcțiile din promis care după executarea instrucțiunilor sincrone
se vor executa si ele fiind prioritare față de tasks queue
care se va executa în ultimul rînd
============================================*/

const promis1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
    // resolve întoarce rezultatul executării funcției asincrone
  }, 300);
});

promis1
  .then((value) => {
    //then cînd primim un resolve se execută funcția din then
    return (value += 3); //value = 10 + 3 =13
    /*then retunrează un alt promis cu cîmpul Value egal
    cu rezultatul retunat care la rîndul său este un trigger 
    pentru următorul then care primește ca parametru 
    Value returnat de primul then
    
    */
  })
  .then((value) => {
    return (value += 7); //value = 13 + 7 = 20
  })
  .catch((error) => console.log("error", erroe))
  .finally(() => console.log("preloader"));
//#Finnaly se execută în orice caz după executarea promisului

console.log(promis1);

/*=================================================
Simularea răspunsului de pe server cu ajutorul Promise
și funcțiilor resolve(), reject()

# Folosim când backendul nu este gata și nu poate returna 
careva date 
=====================================================*/

async function getPictures() {
  /*
  const response = await fetch("https://domain/pictures");
  const data = await response.json();
  return data

  Întrucât serverul nu funcționează trebuie să simulăm răspunsul
  */
  return Promise.resolve([
    { id: 1, src: "./picture 1" },
    { id: 2, src: "./picture 2" },
  ]); //ca rezultat vom primi ca răspuns datele transmise în funcția resolve (structura datelor se coordonează cu echipa de backend)

  return Promise.reject("Invalid user");
  //Vom returna erori simulate
}

/*=================================
Promise metodele all & race
===================================*/
//Promise.all: permite cumularea mai multor funcții asincrone și returnarea rezulattelor acestora întrun Promis comun
Promise.all([getPosts(), getComments(), getUsers()])
  //Promis.all va returna eroare dacă una dintre funcții va returna eroare( poate fi folosit dacă avem nevoie de toate datele solicitate și în caz că nu le avem pe toate nu putem prezenta informația caatare)
  .then((values) => {
    const [posts, comments, users] = values; //values = [[posts], [commnets], [users]] destructurizăm matricea
    console.log(posts, comments, users);
  })
  .catch(console.log);

//Promise.allSettled: permite cumularea mai multor funcții asincrone și returnarea rezulattelor acestora întrun Promis comun
Promise.allSettled([getPosts(), getComments(), getUsers()]);
//Promis.allSettled va returna promis cu matrice ce vor conține doar datele care au returnat resolve

Promise.race([getFromBerlinHost(), getFromNewYorkHost()]);
/*
Fiecare funcție transmisă solicită aceleași date doar că din 
datacentre localizate diferit
# Metoda race așteaptă care dintre funcțiile transmise prima 
va returna un răspuns astfel interacționând cu cea mai 
apropiată locație față de 
utilizator ceea ce permite solicitarea dateor din diferite locații în 
dependetă de amplasarea utilizatorului astfel micșorînd timpul 
de răspuns

# Promise.race va returna promis cu informația din cel mai apropiat dataCenter
*/

/*=============================================
Interacțiunea cu serverulcu ajutorul 
HTTP: accesul la datele de pe server este executat prin intermediul solicitărilo după ce primim răspuns la solicitare accesul este restricționat (necesită altă solicitare )
WebSocket: accesul la datele de pe server este totdeauna descis ceea ce dă posibilitatea de a face schimb rapid de date
=============================================*/

//<script src="./ref"></script>
//# (fără parametru ) se stopează HTMLparsing pentru încărcarea scriptului și executarea acestui, ceea ce oprește vizualizarea paginii pentru utilizator
//<script async src="./ref"></script>
//# (async) încărcarea scriptului se execută paralel cu executarea HTMLparse ceea ce nu stopează vizualizarea paginii dar cînd acesta sa încărcat se oprește HTMLparse și se execută scriptul
//<script defer src="./ref"></script>
//# (defer) încărcarea scriptului se execută paralel cu execuatrea HTMLparse ceea ce nu stopează vizualizarea paginii, executarea scriptului se va efectua după ce pagina va fi vizualizată

/*
HTMLparse =============
script download -----------
Script execution #############
Locul liber este pauza HTMLparse
script
==========                ================
          --------########

script async
=====================       ==============
          -----------#######

script defer
==================================
            -------------         ########

*/

/*=========================================
Solicitarea datelor de pe server
=========================================*/
//Fetch metoda globală a Window care returnează promis
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    //response ne returnează date tehnice care conține și datele necesare
    if (response.ok) {
      return response.json();
      //în funcția json() se conține datele de pe server el automat face JSON.parse și întoarce obiect
    }
    throw new Error("Failed to fetch"); //Prindem erroare și o transmitem în catch
  })
  .catch((error) => console.error);

/*=========================================
CRUD Create Read Update Delete
Methods
Create: POST
Read: GET
Update: PUT ( modifică selectiv datele necesare ) | PATCH ( obligă să rescriem tot obiectul pentru rescrierea unui cîmp anumit )
Delete: DELETE
=========================================*/
//AJAX (Asyncron JavaScript And XML) requires
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "GET",
});

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT", //metoda de schimbare
  body: JSON.stringify({
    //În body concretizăm ce modificăm
    title: "My Title",
  }),
});

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "POST", //metoda de schimbare
  body: JSON.stringify({
    //În body concretizăm ce modificăm
    title: "My Title",
  }),
  header: {
    //HTTP header
    "Content-type": "aplication/json",
    //Spunem concret ce răspuns așteptăm
  },
});

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "CREATE", //metoda de creare
  body: JSON.stringify({
    id: 201,
    title: "My Title",
    body: "Text for Body",
  }),
});

/*=================================
Axios: bibiotecă pentru interacțiunea cu serverul
XMLHttpRequest: Metoda veche pentru interaciunea cu serverul
==================================*/
//XMLHttpRequest
const request = new XMLHttpRequest();
const url = "https://jsonplaceholder.typicode.com/posts";
request.open("GET", url); //deschidem conxiunea
request.responseType = "json"; //xml, text solicităm tipul necesar de date
request.send(); //tirmitem solicitarea formată
request.onload = function () {
  //onload - la primirea răspunsului
  const data = request.response;
  console.log(data);
};

/*========================================
Funcții Asincrone: analog al notației then
=========================================*/
//async: funcție asincronă care returnează promis
const getUsers2 = async () => {};
async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  //await așteaptă retunrarea promisului
  const data = await response.json();
  //așteaptă returnarea datelor din metoda json
  return data;
}

/*
În funcțiile asyncrone nu există metoda catch pentru a prinde 
errorile în schimb folosim construcția try{}catch(error){}
*/

getUsers().then(console.log);
