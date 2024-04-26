const canvas = document.querySelector("canvas");
const lineWidth = document.querySelector("#line-width");
const modeBtn = document.getElementById("mode-btn");
const resetBtn = document.getElementById("reset-btn");
const eraserBtn = document.getElementById("eraser-btn");
const fileInput = document.getElementById("file");
const textInput = document.getElementById("text");
const saveBtn = document.getElementById("save");

const color = document.getElementById("color");
const colorOptions = Array.from(document.getElementsByClassName("color-option"));
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

ctx.lineWidth = lineWidth.value;
ctx.lineCap = "round";
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
const onFileChange = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    console.log(url);
    const image = new Image(); // script로 <img src=""/>를 생성하는 Image객체 
    image.src = url;
    image.onload = () => {
        ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        fileInput.value = null;
    }
}
const onDoubleClick = (event) => {
    const text = textInput.value;
    if (text !== ""){
        ctx.save(); // 해당 코드 실행전의 상태와 선택을 저장함
        ctx.lineWidth = 1;
        ctx.font = "bold 80px sans";
        ctx.fillText(text, event.offsetX, event.offsetY);
        ctx.restore(); // save로 저장한 내용을 다시 복구함
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
saveBtn.addEventListener("click", () => {
    const url = canvas.toDataURL() // canvas안의 image를 인코딩된 URL로 보여준다
    const a = document.createElement("a");
    a.href = url;
    a.download = `myDrawing_${Date.now()}.png`;
    a.click();
})

canvas.addEventListener("dblclick", onDoubleClick)
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);
canvas.addEventListener("click", onCanvasModeClick); //

lineWidth.addEventListener("change", onlineWidthChange);
color.addEventListener("change", onColorChange);
colorOptions.forEach(color => color.addEventListener("click", onColorClick));

fileInput.addEventListener("change", onFileChange);