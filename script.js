//your JS code here. If required.
 const board = document.getElementById("board");

    for (let i = 1; i <= 800; i++) {
      const square = document.createElement("div");
      square.classList.add("square");
      board.appendChild(square);
		square.addEventListener("mouseover", () => {
  square.style.backgroundColor = "tomato";
});
square.addEventListener("mouseout", () => {
  square.style.backgroundColor = "rgb(29, 29, 29)";
});
    }
