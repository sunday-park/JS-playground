const clock = document.querySelector("#clock");

const getClock = () => {
    const date = new Date();
    let hours = String(date.getHours()).padStart(2, "0");
    let min = String(date.getMinutes()).padStart(2, "0");
    let sec = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${min}:${sec}`;
};
// interval은 1초후에 실행되기떄문에 페이지 로드시 바로 실행되게 하기 위해서 우선 호출함
getClock();
setInterval(getClock, 1000);