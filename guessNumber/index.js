const secretNum = Math.round(Math.random() * 10);
let trys = 0;
const button = document.querySelectorAll("button");
console.log(secretNum);
button.forEach((element) => {
  element.addEventListener("click", (e) => {
    const value = e.target.innerText;

    if (+value === secretNum) {
      return alert("You Win");
    } else if (trys === 5) {
      return alert("Trys out");
    } else {
      alert(`Don't Guess`);
      trys++;
    }

    console.log("Trys ", trys);
  });
});
