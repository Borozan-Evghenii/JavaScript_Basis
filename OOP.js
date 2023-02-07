/*=====================================
Clasele sun șablon pentru crearea obiectelor
Se conduce de principiul DRY ( dONT Repeat Yourself )
Cu ajutorul acestora putem creea mai multe obiecte ( class instance )
cu aceleași câmpuri și metode fără a dubla codul
#Exemplu
La crearea unei matrice în JS
expresia arr = [] este egală cu arr = new Array ceea ce 
ne confirmă că Array este un class și prin această instrucțiune noi
creeăm un instance al classei Array care la rîndul său
va conține toate metodele predeficinite în el pe care 
matricea nou creeată o va moșteni
======================================*/
const player1 = {
  login: "monter",
  score: 100,
  increaseScore(num = 10) {
    this.score += num;
  },
  decreaseScore(num = 10) {
    this.score -= num;
  },
};
const player2 = {
  login: "user",
  score: 100,
  increaseScore(num = 10) {
    this.score += num;
  },
  decreaseScore(num = 10) {
    this.score -= num;
  },
};

/*===========================================
Clasele sun fabrici pentru crearea Obiectelor
============================================*/
class Player {
  constructor(login, score = 100) {
    // constructorul creează un nou obiect după șalonul descris
    this.login = login;
    this.score = score;
  }
  increaseScore(num = 10) {
    this.score += num;
  }
  decreaseScore(num = 10) {
    this.score -= num;
  }
}
//Metoda Veche pentru crearea clasei cu ajutorul funcției
function fnPlayer(login, score = 100) {
  this.login = login;
  this.score = score;
  /*
Această funcție se numește funcșie constructor sau (constructor în clasele es6)
Folosind operatorul new în funcția dată contextul this
se va referi la un obiect gol. Astfel pentru instrucțiunea
this.login = login în obiectul gol va fi creat cîmpul
login cu valoarea loginului precum și pentru this.score
astfel funcția va returna un obiect care va conține 2 câmpuri

*/
}

//Adăugarea metodelor

fnPlayer.prototype.increaseScore = function (num = 100) {
  this.score += num;
};
//Astfel înscriem în prototip metoda (funcția) necesară

const player4 = new fnPlayer("thor", 1200);
player4.increaseScore(200);

//Un nou instance al clasei se creează prin operatorul (new)
const player3 = new Player("Evgheny");
player3.score;
player3.login;
player3.increaseScore(20);
player3.decreaseScore(20);

/*
player 3 (insance of class Player ) va conține un 
nou obiect creat în baza clasei care descrie crearea 
acestuia. player3 va conține cîmpurile descrise în constructor
precum și metodele descrise în class. Metodele însă 
vor fi ascunse în [[Prototype]] aceasta fiind principalul mecanism 
de moștenire
[[Prototype]] va conține toate nivelele de moștenire a clasei
dacă [[Prototype]] nu conține un alt [[Prototype]] atunci altimul
este obiectul de bază cu metodele comune pentru toate obiectele
*/

//Moștenirea claselor ( Extinderea )
//Crearea unei clase în baza altei clase deja existente
class Player {
  constructor(login, score = 100) {
    this.login = login;
    this.score = score;
  }
  increaseScore(num = 10) {
    this.score += num;
  }
  decreaseScore(num = 10) {
    this.score -= num;
  }
}

class PaidPlayer extends Player {
  constructor(login, score = 100, accBalance = 1000) {
    super(login, score);
    /*
    super cheamă constructorul din clasa pe care o 
    moștenim ( obigatoriu se transmit argumentele necesar epentru 
      constructorul din clasa moștenită )
    */
    this.Balance = accBalance;
  }

  increaseBalance(amount) {
    this.accBalance += amount;
  }
}

const vipPlayer = new PaidPlayer("Jora", 130, 10000000);
vipPlayer.increaseScore();
vipPlayer.decreaseScore();
vipPlayer.increaseBalance();
vipPlayer.login;
vipPlayer.score;
vipPlayer.accBalance;
/*
vipPlayer  = obiect cu toate câmpurile și metodele Player la care sau
adăugat câmpurile și metodele din PaidPalyer
*/

/*======================================================
Câmpuri și metode statice
Câmpurile și metodele statice există doar 
în cadrul clasei, obiectul creat în baza clasei nu cunoaște despre 
câmpurile și metodele statice 
========================================================*/

class Player {
  static totalPlayers;

  constructor(login, score = 100) {
    this.login = login;
    this.score = score;
    Player.totalPlayers++;
  }
  increaseScore(num = 10) {
    this.score += num;
  }
  decreaseScore(num = 10) {
    this.score -= num;
  }
  static create(login) {
    return new Player(login, 350);
  }
}
//accesarea câmpurilor sau metodelor statice se efectuează direct din clasă
Player.create;
const play = Player.create("Alex");

/*=========================================
Câmpuri ți metode private / Getter and Setter
câmpurile private se notează cu #
=========================================*/
class Player {
  #score; // decarăm cîmpul privat
  constructor(login, score = 100) {
    this.login = login;
    this.firstName = firstName;
    this.lastName = lastName;
    this.#score = score; //Setăm câmpul privat
  }
  //accesul la valoarea câmpului privat #score prin intermediul getterului
  get score() {
    //get poate doar returna valori
    return this.#score;
  }
  get fullName() {
    //get poate efectua careva operații pentur a returna rezultatul acestora
    return this.firstName + " " + this.lastName;
  }
  set fullName(name) {
    const [f, l] = name.split(" ");
    this.firstName = f;
    this.lastName = l;
  }

  #getScore() {
    //Palyer.#getScore Metoda privată poate fi folosită în cadrul clasei dar utilizatorul nu are acces la ea
    return this.#score;
  }

  increaseScore(num = 10) {
    this.#score = this.#getScore + num;
  }
  decreaseScore(num = 10) {
    this.#score -= num;
  }
}


