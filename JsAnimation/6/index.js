let sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    let value = window.scrollY;
    let secTop = section.offsetTop;
    let secHeight = section.offsetHeight;

    if (
      value >= secTop - window.innerHeight / 1.5 &&
      value < secTop + secHeight
    ) {
      let content = section.querySelector("div"); // Get the div inside the section
      content.classList.add("show-animation");
    }
  });
});
