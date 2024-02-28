
var countDownDate = new Date("March 1, 2024 00:00:00").getTime();

var x = setInterval(function() {

    var now = new Date().getTime();


    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);


    document.getElementById("days").innerHTML = days + "d ";
    document.getElementById("hours").innerHTML = hours + "h ";
    document.getElementById("minutes").innerHTML = minutes + "m ";
    document.getElementById("seconds").innerHTML = seconds + "s ";

    
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);