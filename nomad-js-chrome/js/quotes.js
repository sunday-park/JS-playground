// https://api.adviceslip.com/advice
const quote = document.querySelector("#quote span:first-child")

$.ajax({
    type: "GET",
    url: "https://api.adviceslip.com/advice",
    async: true,
    dataType: 'json',
    success: (res)=> {
        // console.log(res.slip);
        let advice = res.slip.advice;
        quote.innerText = advice;
    },
    error: (err) => {
        console.log(err);
    }
});
// https://picsum.photos/2560/1440
// https://picsum.photos/v2/list?page=2&limit=100
$.ajax({
    type: "GET",
    url: "https://picsum.photos/v2/list?page=2&limit=100",
    async: true,
    success: (res)=> {
        // console.log(res);
        const chosenImage = Math.floor(Math.random() * res.length);
        const bgUrl = res[chosenImage].download_url;
        // document.body.style.backgroundImage = `url(${bgUrl})`;
        document.body.style.backgroundImage = `url(${bgUrl})`;
    },
    error: (err) => {
        console.log(err);
    }
})