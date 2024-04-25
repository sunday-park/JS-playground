const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); // ctx = paint brush
// css에서 canvas 크기 설정 후, script에도 크기를 알려주어야 한다.
canvas.width = 800;
canvas.height = 800;

ctx.fillRect(200, 200, 50, 200)
ctx.fillRect(400, 200, 50, 200)
ctx.lineWidth = 2;
ctx.fillRect(300, 300, 50, 100)
ctx.fillRect(200, 200, 200, 10)

ctx.moveTo(200, 200)
ctx.lineTo(325, 100)
ctx.lineTo(450, 200)
ctx.fill();


