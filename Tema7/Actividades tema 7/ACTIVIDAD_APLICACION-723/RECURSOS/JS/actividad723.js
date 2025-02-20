document.addEventListener("DOMContentLoaded", () => {
  const box = document.querySelector(".box");

  function moveBox() {
    const maxX = window.innerWidth - 100;
    const maxY = window.innerHeight - 100;
    box.style.left = Math.floor(Math.random() * maxX) + "px";
    box.style.top = Math.floor(Math.random() * maxY) + "px";
  }

  moveBox();

  box.addEventListener("mouseenter", moveBox);
});
