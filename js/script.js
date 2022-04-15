let secretNumber = getRandomNumber(1, 10);
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let attemps = 3;
document.querySelector(".check").onclick = function () {
  let userNumber = document.querySelector(".number").value;
  if (secretNumber > userNumber) {
    document.querySelector(".hint").innerHTML = "Число больше"
  }
  if (secretNumber < userNumber) {
    document.querySelector(".hint").innerHTML = "Число меньше"
  }
  if (secretNumber == userNumber) {
    document.querySelector(".hint").innerHTML = "Вы угадали!"
    document.querySelector(".check").disabled = true;
    document.querySelector(".number").disabled = true;
  }
  attemps = attemps - 1;
  document.querySelector(".attemps").innerHTML = attemps;
  if (attemps < 1) {
    document.querySelector(".hint").innerHTML = "Вы проиграли:( Загаданное число было " + secretNumber
    document.querySelector(".check").disabled = true;
    document.querySelector(".number").disabled = true;
  }
};
document.querySelector(".new").onclick = function () {
  attemps = 3;
  document.querySelector(".attemps").innerHTML = attemps;
  document.querySelector(".check").disabled = false;
  document.querySelector(".number").disabled = false;
  secretNumber = getRandomNumber(1, 10)
};
