// Get the current date and time
var currentDate = new Date();
// Add 10 days to the current date
currentDate.setDate(currentDate.getDate() + 10);
// Set the countdown target date
var countDownDate = currentDate.getTime();

// Format the future date
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var futureDateFormatted = currentDate.toLocaleDateString('en-US', options);


// Display the future date in the element with the class "deadline"
document.querySelector(".deadline").innerHTML = "Giveaway ends on " + futureDateFormatted;


var x = setInterval(function() {
    // Get the current date and time
    var now = new Date().getTime();
    // Calculate the distance between the current date and the countdown target date
    var distance = countDownDate - now;
    // Calculate days, hours, minutes, and seconds remaining
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the remaining time in the HTML elements
    document.getElementById("days").innerHTML = days + "d ";
    document.getElementById("hours").innerHTML = hours + "h ";
    document.getElementById("minutes").innerHTML = minutes + "m ";
    document.getElementById("seconds").innerHTML = seconds + "s ";

    // If the countdown has expired
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);
