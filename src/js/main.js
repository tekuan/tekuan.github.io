"use strict";

function counter() {
  let seconds = 0;
  setInterval(() => {
    seconds += 1;
    document.getElementById("app").innerHTML = `<p> ${seconds} s</p>`;
  }, 1000);
}

counter();
