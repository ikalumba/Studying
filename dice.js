// Selecting elements

const diceEl = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");
const btnStart = document.querySelector(".btn-start-game");
// Rolling dice functionality

btnRoll.addEventListener("click", function () {
  // 1.Generating a random dice eoll

  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  diceEl.classList.remove("hidden");
  diceEl.src = `/images/dice-${dice}.png`;
});
// 2. Display dice
btnStart.addEventListener("click", function () {
  diceEl.classList.remove("hidden");
});

// const btns = document.querySelectorAll(".btn");
// console.log(btns);

// document.querySelector(".btn-change").addEventListener("click", function () {
//   btns.map((btn) => btn.classList.add("blue-btn"));
// });
