let newPage = document.getElementById("newPage");
let closePage = document.getElementById("closePage");
let delayThing = document.getElementById("delayThing");
let closeDelay = document.getElementById("closeDelay");

//Bakåt-knapp
let backPage = document.createElement("button");
backPage.innerText = "Bakåt";
document.body.appendChild(backPage);

//framåt-knapp
let forwardPage = document.createElement("button");
forwardPage.innerText = "Framåt";
document.body.appendChild(forwardPage);

window.onload = function () {
  console.log(window.navigator);
  function open() {
    window.open("http://localhost:52126/");
  }
  function close() {
    window.close();
  }
  newPage.addEventListener("click", open);
  closePage.addEventListener("click", close);
};
function back() {
  history.back();
}
backPage.addEventListener("click", back);

function forward() {
  history.forward();
}
forwardPage.addEventListener("click", forward);

function delay() {
  let interval = setInterval(() => {
    console.log("HEj");
  }, 1000);
  function stop() {
    clearInterval(interval);
  }
  closeDelay.addEventListener("click", stop);
}
delayThing.addEventListener("click", delay);
