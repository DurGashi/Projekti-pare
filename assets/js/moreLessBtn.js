const button = document.querySelector(".morelessBtn");
const hiddenItems = document.querySelectorAll(".hidden-item");
let isHidden = true;
button.addEventListener("click", () => {
  button.textContent = isHidden ? "Hide Products" : "Show More Products";

  isHidden = !isHidden;
  hiddenItems.forEach((item) => item.classList.toggle("hidden"));
});
focusScrollMethod = function getFocus() {
  document.getElementById("add1").focus();
};