let h1 = document.querySelector("h1");
const span = h1.innerHTML
  .split("")
  .map(
    (item, i) =>
      `<span style="filter: hue-rotate(${
        i * 49
      }deg) saturate(2) contrast(1.5); animation-delay: ${
        Math.random() * 5
      }s ;">${item}</span>`
  )
  .join("");
console.log(span);
h1.innerHTML = span;
