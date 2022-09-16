//* =====================================
//*  GUESS MY NUMBER
//*  Game Logic
//*======================================

//?Pick a random number between 1-100

let randomNumber = Math.round(Math.random() * 100);
console.log(randomNumber);

//? Variables

let score = 10;
let topScore = 0;

//? Creating a variable with the name topScore from local storage
// let topScore = localStorage.getItem("topScore") || 0;
//? Update topScore value in DOM from local storage
// document.querySelector(".top-score").textContent = topScore;

//*Check when CheckBtn is pressed.
document.querySelector(".check-btn").addEventListener("click", () => {
  const guessInput = Number(document.querySelector(".guess-input").value);
  const msg = document.querySelector(".msg");
  const body = document.querySelector("body");
  const classBgColor = document.querySelector(".secret-number");

  //? Give a warning if not input.value
  if (!guessInput) {
    msg.innerText = "Please enter a number.";
    //! If random number == input.value
  } else if (randomNumber === guessInput) {
    msg.innerHTML = `Congratulations, You Win. <i class="fa-sharp fa-solid fa-face-grin-hearts fa-2x"></i>`;
    // body.style.backgroundColor = "green";
    body.className = "bg-success";
    classBgColor.className = " secret-number bg-success";
    document.querySelector(".check-btn").disabled = true;

    if (score > topScore) {
      topScore = score;
      // ? Update topScore varibale from local storage
      // localStorage.setItem("topScore", score);
      // ? Update topScore varibale from DOM(=score);
      document.querySelector(".top-score").textContent = topScore;
    }

    document.querySelector(".secret-number").textContent = randomNumber;

    //! If random number !== input.value
  } else {
    score--;
    if (score > 0) {
      guessInput > randomNumber
        ? (msg.innerHTML = `Decrease the number <i class="fa-solid fa-arrow-trend-down fa-2x"></i>`)
        : (msg.innerHTML = `Increase the number <i class="fa-solid fa-arrow-trend-up fa-2x"></i>`);
      classBgColor.className = " secret-number bg-warning";
      document.querySelector(".secret-number").textContent = "X";
    } else {
      msg.innerHTML = `Sorry, You lost. <i class="fa-solid fa-face-sad-tear fa-2x"></i>`;
      document.querySelector(".check-btn").disabled = true;
      body.className = "bg-danger";
      classBgColor.className = " secret-number bg-danger";
      document.querySelector(".secret-number").textContent = randomNumber;
    }
  }

  document.querySelector(".score").textContent = score;
});

//* with Enter key

document.querySelector(".guess-input").addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    document.querySelector(".check-btn").click();
  }
});

//* Reset game values ​​when pressing again.

document.querySelector(".again-btn").addEventListener("click", () => {
  const classBgColor = document.querySelector(".secret-number");
  score = 10;
  document.querySelector(".score").textContent = score;
  randomNumber = Math.round(Math.random() * 100);
  console.log(randomNumber);
  document.querySelector(".check-btn").disabled = false;
  document.querySelector(".secret-number").textContent = "?";
  document.querySelector("body").classList.remove("bg-success", "bg-danger");
  classBgColor.className = "secret-number";
  classBgColor.style.backgroundColor = "#82498d";
  document.querySelector(".guess-input").value = "";
  document.querySelector(".msg").innerText = "Starting..";
});

//* with R key.

document.querySelector("body").addEventListener("keydown", (event) => {
  if (event.key === "r") {
    document.querySelector(".again-btn").click();
  }
});

//* Informantion button for keys

document.querySelector(".info-btn").addEventListener("click", () => {
  document.querySelector(".footer").style.display = "none";
  document.querySelector(".info-div").style.border = "4px solid white";
  document.querySelectorAll(".info")[0].style.padding = "15px";

  document.querySelectorAll(".info").forEach((i) => {
    i.style.display = "block";
    i.style.height = "auto";
  });
});

document.querySelector(".shut-down").addEventListener("click", () => {
  document.querySelector(".footer").style.display = "block";
  document.querySelector(".info-div").style.border = "0";
  document.querySelectorAll(".info")[0].style.padding = "0";

  document.querySelectorAll(".info").forEach((i) => {
    i.style.display = "none";
    i.style.height = "0";
  });
});

//* PUSEDUO
//! If random number == input.value
//?Congratulations, You Win.
//? BgColor = green.
//? If topScore < current score.
//?? topScore = current score
//? Make secterNumber visible.

//! if not
//!! if score > 0
//!!!! score = score - 1
//? If random number < input.value
//??  Decrease
////?  If not
//??  Increase
//!! if not
//!!!! Sorry, You lost.
