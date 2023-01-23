const riddle = {
  question: "Висит груща нельзя скущать",
  correctAnswer: "лампочка",
  hints: ["is eating", "is a fruct"],
  try: 3,
  checkAnswer(e) {
    this.try--;
    if (e === this.correctAnswer) {
      alert("You Win");
      tryCount = 3;
      console.log("You Win");
    } else if (this.try <= 0) {
      return alert("dont have a many try");
    }
    const hint = this.hints[this.try === 2 ? 0 : 1];
    alert(hint);
  },
};
let tryCount = 0;
window.onload = function () {
  document.querySelector("h3").innerText = riddle.question;
  document.querySelector("p").innerText = `Have ${riddle.try} try`;
};

document.querySelector("button").addEventListener("click", (e) => {
  const input = document.querySelector("input");
  if (input.value) {
    riddle.checkAnswer(input.value);
    input.value = "";
  }
});
