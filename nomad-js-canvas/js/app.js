const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); // ctx = paint brush
// css에서 canvas 크기 설정 후, script에도 크기를 알려주어야 한다.
canvas.width = 800;
canvas.height = 800;

ctx.fillRect(220 - 50, 200, 15, 100)
ctx.fillRect(340 - 50, 200, 15, 100)
ctx.fillRect(260 - 50, 200, 60, 100)

// 호(arc) -> arc(x, y, radius, startAngle, endAngle, anticlockwise)
ctx.arc(290 - 50, 150, 35, 0, 2 * Math.PI)
ctx.fill()

ctx.beginPath();
ctx.fillStyle = "white"
ctx.arc(275 - 50, 145, 8, Math.PI, 2 * Math.PI)
ctx.arc(308 - 50, 145, 8, Math.PI, 2 * Math.PI)
ctx.fill()


