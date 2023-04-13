const seconds = document.querySelector('.seconds');
const minutes = document.querySelector('.minutes');
const hours = document.querySelector('.hours');

setInterval(() => {
    const date = new Date();

    const sc = date.getSeconds()/ 60;
    const mn = (sc + date.getMinutes())/ 60;
    const hr = (mn + date.getHours())/ 12;

    seconds.style.transform = `translateY(-50%) rotate(${sc *360}deg)`;
    minutes.style.transform = `translateY(-50%) rotate(${mn * 360}deg)`;
    hours.style.transform = `translateY(-50%) rotate(${hr * 360}deg)`;
}, 1000);