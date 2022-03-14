// SVG 

const circlePath = document.getElementById("circle-top");
const linePath = document.getElementById("vector-top");

console.log(circlePath.getTotalLength());
console.log(linePath.getTotalLength());


// Animated line

const text = document.getElementById("animated");
const letterArray = text.textContent.split("");
text.textContent = "";
console.log(letterArray);

for (let i = 0; i < letterArray.length; i++) {
  text.innerHTML += "<span>" + letterArray[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 100);

function onTick() {
  const span = text.querySelectorAll("span")[char];
  span.classList.add("fade");
  char++;
  if (char === letterArray.length) {
    complete();
    return;
  }
}

function complete() {
  clearInterval(timer);
  timer = null;
}
