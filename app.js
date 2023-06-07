let count = document.getElementById("count");
let minus = document.getElementById("minus");
let reset = document.getElementById("reset");
let plus = document.getElementById("plus");

let indicator = 0;

plus.addEventListener("click", () => {
  indicator++;
  count.textContent = indicator;
  if (indicator > 0) {
    count.style.color = "green";
  }
});

minus.addEventListener("click", () => {
  indicator--;
  count.textContent = indicator;
  if (indicator < 0) {
    count.style.color = "red";
  }
});

reset.addEventListener("click", () => {
  indicator = 0;
  count.textContent = indicator;
});
