function initGrid(n, rainbow = false) {
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
                if (!rainbow)
                    div.style.backgroundColor = "blue";
                else {
                    console.log("rainbow on");
                }
            });
            div.style.height = `calc(700px / ${n})`;
            div.style.width = `calc(700px / ${n})`;
        }
    }
    container.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${n}, 1fr)`;
    return pixels;
}

function rainbowMode(pixels, rainbowState) {
    if (rainbowState) {
        for (let i = 0; i < pixels.length; i++) {
            for (let j = 0; j < pixels[i].length; j++) {
                let div = pixels[i][j];
                div.addEventListener(("mouseenter"), (e) => {
                        div.style.backgroundColor = `rgb(${Math.random() * 253}, ${Math.random() * 253}, ${Math.random() * 253})`;
                });
            }
        }
    } else {
        for (let i = 0; i < pixels.length; i++) {
            for (let j = 0; j < pixels[i].length; j++) {
                let div = pixels[i][j];
                div.addEventListener(("mouseenter"), (e) => {
                        div.style.backgroundColor = "blue";
                });
            }
        }
    }
}