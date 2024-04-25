const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); // ctx = paint brush
// css에서 canvas 크기 설정 후, script에도 크기를 알려주어야 한다.
canvas.width = 800;
canvas.height = 800;

// short-cut function : 사각형 채우기 / 비우기(only border)
// fillRect / strokeRect (x,y,w,h)
ctx.rect(50, 50, 100, 100);
ctx.rect(150, 150, 100, 100);
ctx.rect(250, 250, 100, 100);
ctx.fill();

// 새로운 경로(path) 생성, 이전 경로와 연결 끊어짐
ctx.beginPath();
ctx.rect(350, 350, 100, 100);
ctx.fillStyle = "red";
ctx.fill();


