localStorage.setItem("firstName", "Leah");
localStorage.lastName = "Hall";

let firstName = localStorage.getItem('firstName');
let lastName = localStorage.lastname;

if (localStorage.clickcount) {
    localStorage.clickcount = Number(localStorage.clickcount) + 1;
  } else {
    localStorage.clickcount = 1;
  }
  document.getElementById("result").innerHTML = "You have clicked the button " +
  localStorage.clickcount + " time(s).";

