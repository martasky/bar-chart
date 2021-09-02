"use strict";
window.addEventListener("load", init);

let customers = [];

console.log(customers.length);

function init() {
  initCustomers();
  loop();
}

function initCustomers() {
  for (let i = 0; i < 40; i++) {
    customers.push(getNumberOfCustomers());
    console.log(customers.length);
  }
}

function loop() {
  customers.shift();
  customers.push(getNumberOfCustomers());
  displayData();
  modifyModel();
  console.log(customers);
  setTimeout(loop, 950);
}

function getNumberOfCustomers() {
  // gives a random number
  return Math.floor(Math.random() * 32);
}

function displayData() {
  //takes the model and modifies css

  let bars = document.querySelectorAll(".bar");
  console.log(bars);
  bars.forEach(function (bar, i) {
    bar.style.height = 3 * customers[i] + "%";
    console.log("Bar " + i + " should be " + customers[i] + " %");

    if (customers[i] <= 10) {
      bar.style.backgroundColor = "blue";
    } else if (customers[i] > 30) {
      bar.style.backgroundColor = "red";
    } else {
      bar.style.backgroundColor = "green";
    }
  });
}
function modifyModel() {
  customers.shift();
  customers.push(getNumberOfCustomers());
  //it scrolls numbers to the left
}
