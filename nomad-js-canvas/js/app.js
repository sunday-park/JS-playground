const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); // ctx = paint brush
// css에서 canvas 크기 설정 후, script에도 크기를 알려주어야 한다.
canvas.width = 800;
canvas.height = 800;

ctx.moveTo(50, 50) // 시작 위치를 x,y로 이동
ctx.lineTo(150, 50) // 선을 그을거임 넓이 to 위치(높이)
ctx.lineTo(150, 150)
ctx.lineTo(50, 150)
ctx.lineTo(50, 50)
ctx.stroke() // 실제로 선을 그음
ctx.fill() // 실제로 색을 채움




