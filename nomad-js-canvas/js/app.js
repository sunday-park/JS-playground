const canvas = document.querySelector("canvas");
const lineWidth = document.querySelector("#line-width");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = lineWidth.value;
let isPainting = false;
// 목표: 마우스 드래그로 선을 그리기

// 마우스가 움직이기 시작 할때마다 moveTo(선이 시작히는 위치)를 호출해야 함
    // click: 마우스를 짧게 눌렀다 '떼는 것'
    // mousedown: 마우스를 클릭한채 누르고 있는 것
    // mouseup: (마우스를 누르고 있다가) 떼었을 때
    // mousemove: 마우스의 움직임
// 마우스의 클릭이 떼어질 때 lineTo(선이 끝나는 위치)가 호출되어야 함

function onMove(event) {
    if (isPainting){
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke()
        return;
    }
    ctx.moveTo(event.offsetX, event.offsetY);
}
function startPainting() {
    isPainting = true;
}
function cancelPainting() {
    isPainting = false;
    ctx.beginPath(); // 선을 끝내는 지점에 path를 끊어준다.
}

function onlineWidthChange(event) {
    ctx.lineWidth = event.target.value;
}

canvas.addEventListener("mousemove", onMove)
canvas.addEventListener("mousedown", startPainting)
canvas.addEventListener("mouseup", cancelPainting)
canvas.addEventListener("mouseleave", cancelPainting)

lineWidth.addEventListener("change", onlineWidthChange)