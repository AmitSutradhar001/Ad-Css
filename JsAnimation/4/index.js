const three = document.querySelector(".three");
const two = document.querySelector(".two");
const one = document.querySelector(".one");
two.addEventListener("click", () => {
  three.classList.toggle("rotated");
  one.classList.toggle("big");
});
