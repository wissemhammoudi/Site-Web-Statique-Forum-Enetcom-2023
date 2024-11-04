window.onload = (event) => {
    AOS.init();
    var options = {
        strings: ["ENET'COM ANNUAL FORUM"],
        typeSpeed: 50,
        backSpeed: 25,
        startDelay: 500,
        backDelay: 2000,
        loop: true,
    };

    var typed = new Typed('#autotype-text', options);
    const typed_cursor = document.getElementsByClassName('typed-cursor')[0];
    typed_cursor.style.display = "none";
    countDown();
};

function countDown() {
    var countDownDate = new Date("Nov 18, 2023 00:00:00").getTime();
    var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Add leading zeros if the number is less than 10
        days = days < 10 ? "0" + days : days;
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "EXPIRED";
        }
    }, 1000);
}

function toggleNavbar() {
    const nav = document.getElementsByTagName('nav')[0];
    nav.children[0].classList.toggle("open-navbar");
    nav.classList.toggle("navbar-display");
}