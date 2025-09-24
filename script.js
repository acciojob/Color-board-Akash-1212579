//your JS code here. If required.
 const container = document.getElementById("container");

    for (let i = 0; i <= 800; i++) {
      const square = document.createElement("div");
      square.classList.add("square");
      container.appendChild(square);
		square.addEventListener("mouseover", () => {
  square.style.backgroundColor = "#fff";
});
square.addEventListener("mouseout", () => {
  square.style.backgroundColor = "rgb(29, 29, 29)";
});
    }
