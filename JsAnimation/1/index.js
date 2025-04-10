let text = document.querySelector("h1");
let span = text.innerHTML
  .split("")
  .map(
    (item, index) =>
      `<span style="transition-delay: ${index * 30}ms;filter: hue-rotate(${
        index * 30
      }deg);
">${item}</span>`
  )
  .join("");
text.innerHTML = span;
console.log(span);
