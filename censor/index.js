function censor() {
  const argArray = [];
  return function (arg1, arg2 = "") {
    if (arg2) {
      argArray.push([arg1, arg2]);
    } else {
      for (const arg of argArray) {
        arg1 = arg1.replace(new RegExp(arg[0], "gi"), arg[1]);
      }
      return arg1;
    }
  };
}
const changeScene = censor();

changeScene("PHP", "JS");
changeScene("backend", "frontend");

console.log(
  changeScene(
    "PHP is the most popular programming language for backend web-developement"
  )
);
//i dont maked it
