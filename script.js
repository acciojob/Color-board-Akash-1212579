//your JS code here. If required.
 const board = document.getElementById("board");

    for (let i = 0; i < 800; i++) {
      const box = document.createElement("div");
      box.classList.add("square");
      board.appendChild(box);
		box.addEventListener("mouseover", () => {
  box.style.backgroundColor = "tomato";
});
box.addEventListener("mouseout", () => {
  box.style.backgroundColor = "rgb(29, 29, 29)";
});
    }
