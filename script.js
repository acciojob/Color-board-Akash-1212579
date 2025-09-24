//your JS code here. If required.
 const board = document.getElementById("board");

    for (let i = 0; i < 800; i++) {
      const box = document.createElement("div");
      box.classList.add("box");
      board.appendChild(box);
    }