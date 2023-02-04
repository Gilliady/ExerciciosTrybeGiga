const body = document.querySelector("body");

const backgroundColorButtons = document.querySelectorAll(".bgButton");

for (const bgButton of backgroundColorButtons) {
  bgButton.addEventListener("click", () => {
    localStorage.setItem("bgColor", bgButton.innerText);
    body.style.backgroundColor = localStorage.getItem("bgColor");
  });
}

const fontColorButtons = document.querySelectorAll(".fontColor");

for (const fcButton of fontColorButtons) {
  fcButton.addEventListener("click", () => {
    localStorage.setItem("fontColor", fcButton.innerText);
    body.style.color = localStorage.getItem("fontColor");
  });
}

const fontSizeButtons = document.querySelectorAll(".fontSizeButton");

for (const fsButton of fontSizeButtons) {
  fsButton.addEventListener("click", () => {
    localStorage.setItem("fontSize", fsButton.innerText);
    body.style.fontSize = localStorage.getItem("fontSize");
  });
}

const lineHeightButtons = document.querySelectorAll(".lineHeightButton");

for (const lhButton of lineHeightButtons) {
  lhButton.addEventListener("click", () => {
    localStorage.setItem("lineheight", lhButton.innerText);
    body.style.lineHeight = localStorage.getItem("lineheight");
  });
}

const fontFamily = document.querySelectorAll(".fontType");

for (const familyType of fontFamily) {
  familyType.addEventListener("click", () => {
    localStorage.setItem('fontFamily', familyType.innerText);
    body.style.fontFamily = localStorage.getItem('fontFamily');
  });
}
function userPresets() {
  body.style.backgroundColor = localStorage.getItem("bgColor");
  body.style.color = localStorage.getItem("fontColor");
  body.style.fontSize = localStorage.getItem("fontSize");
  body.style.lineHeight = localStorage.getItem("lineheight");
  body.style.fontFamily = localStorage.getItem('fontFamily');
}

userPresets();
