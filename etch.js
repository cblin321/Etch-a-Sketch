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
                    div.style.backgroundColor = "rgb(0, 0, 255)";
                else {
                    console.log("rainbow on");
                }
                let color = getComputedStyle(div).backgroundColor
                console.log(color.slice(4, color.length - 1).split(","));
            });
            div.style.height = `calc(${container.offsetHeight}px / ${n})`;
            div.style.width = `calc(${container.offsetWidth}px / ${n})`;
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

function resize(pixels) {
    if (window.innerHeight < 350 || window.innerWidth < 350) {
        for (let i = 0; i < pixels.length; i++) {
            for (let j = 0; j < pixels[i].length; j++) {
                div = pixels[i][j];
                div.style.height = `calc(${container.offsetHeight}px / ${n})`;
                div.style.width = `calc(${container.offsetWidth}px / ${n})`;
            }
        }
    }
}

function darken(pixel) {
    const RGBToHSL = (r, g, b) => {
        r /= 255;
        g /= 255;
        b /= 255;
        const l = Math.max(r, g, b);
        const s = l - Math.min(r, g, b);
        const h = s
          ? l === r
            ? (g - b) / s
            : l === g
            ? 2 + (b - r) / s
            : 4 + (r - g) / s
          : 0;
        return [
          60 * h < 0 ? 60 * h + 360 : 60 * h,
          100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0),
          (100 * (2 * l - s)) / 2,
        ];
      };
      let color = getComputedStyle(pixel).backgroundColor;
      if (color.slice(0, 3) == "rgb") {
        color = color.slice(4, color.length - 1).split(",");
        for (let i = 0; i < color.length; i++) {
          color[i] = color[i].trim();
        }
        let hsl = RGBToHSL(color[0], color[1], color[2]);
        pixel.style.backgroundColor = `hsl(${hsl[0], hsl[1], hsl[2] - (hsl)})`; //TODO check return value
      }


}