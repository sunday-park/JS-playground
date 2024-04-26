const canvas = document.querySelector("canvas");
const lineWidth = document.querySelector("#line-width");
const modeBtn = document.getElementById("mode-btn");
const resetBtn = document.getElementById("reset-btn");
const eraserBtn = document.getElementById("eraser-btn");

const color = document.getElementById("color");
const colorOptions = Array.from(document.getElementsByClassName("color-option"));
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

ctx.lineWidth = lineWidth.value;
let isPainting = false;
let isFilling = false;

const onMove = (event) => {
    if (isPainting){
        ctx.lineTo(event.offsetX, event.offsetY);
        onCanvasModeClick();
        return;
    }
    ctx.moveTo(event.offsetX, event.offsetY);
}
const startPainting = () => {
    isPainting = true;
}
const cancelPainting = () => {
    isPainting = false;
    ctx.beginPath();
}
const onlineWidthChange = (event) => {
    ctx.lineWidth = event.target.value;
}
const onColorChange = (event) => {
    ctx.strokeStyle = event.target.value;
    ctx.fillStyle = event.target.value;
}
const onColorClick = (event) => {
    const colorValue = event.target.dataset.color;
    ctx.strokeStyle = colorValue;
    ctx.fillStyle = colorValue;
    color.value = colorValue;
}
const onCanvasModeClick = () => {
    if (isFilling){
        ctx.fillRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
    } else {
        ctx.stroke();
    }
}

modeBtn.addEventListener("click", () => {
    if (isFilling !== true){
        isFilling = true;
        modeBtn.innerText = "Fill";
    } else {
        isFilling = false
        modeBtn.innerText = "Draw";
    }
});
resetBtn.addEventListener("click", () => {
    ctx.fillStyle = "white";
    ctx.fillRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
});
eraserBtn.addEventListener("click", () => {
    ctx.strokeStyle = "white";
    isFilling = false;
    modeBtn.innerText = "Fill";
});

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);
canvas.addEventListener("click", onCanvasModeClick); //

lineWidth.addEventListener("change", onlineWidthChange);
color.addEventListener("change", onColorChange);
colorOptions.forEach(color => color.addEventListener("click", onColorClick));