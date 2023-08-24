function initGrid(n) {
    if (n <= 2 || n > 100) {
        alert("Too many squares, only 2-100");
        return;
    }
    const container = document.querySelector(".pixel-container");
    const pixels =  new Array(n);
    for (let i = 0;  i < n; i++) {
        pixels[i] = new Array(n);
        for (let j = 0; j < n; j++) {
            const div = document.createElement("div");
            div.classList.add("square");
            pixels[i][j] = div;
            container.appendChild(div);
            div.addEventListener(("mouseenter"), (e) => {
                div.style.backgroundColor = "blue";
            });
            div.style.height = `calc(500px / ${n})`;
            div.style.width = `calc(500px / ${n})`;
        }
    }
    container.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${n}, 1fr)`;
    return pixels;
}