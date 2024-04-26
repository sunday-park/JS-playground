const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); // ctx = paint brush
// css에서 canvas 크기 설정 후, script에도 크기를 알려주어야 한다.
canvas.width = 800;
canvas.height = 800;

ctx.lineWidth = 2;

const colors = [
    "#f03e3e",
    "#e64980",
    "#be4bdb",
    "#7950f2",
    "#4c6ef5",
    "#228be6",
    "#15aabf",
    "#12b886",
    "#40c057",
    "#82c91e",
    "#fab005",
    "#fd7e14"
]

function onclick(event) {
    // console.log(`X: ${event.offsetX}, Y: ${event.offsetY}`);
    ctx.beginPath(); // 1개의 선마다 path를 끊어줌
    ctx.moveTo(0, 0);
    const color = colors[Math.floor(Math.random() * colors.length)]
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.strokeStyle = color;
    ctx.stroke();
}
canvas.addEventListener("mousemove", onclick);