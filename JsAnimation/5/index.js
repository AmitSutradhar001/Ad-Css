let c1 = document.querySelector(".c1");
let c2 = document.querySelector(".c2");
window.addEventListener("scroll", () => {
  let value = window.scrollY;
  c1.style.clipPath = `circle(${150 + value * 0.75}px at 0 0)`;
  c2.style.clipPath = `circle(${150 + value * 0.75}px at 100% 100%)`;
});
