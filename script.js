let clicks = 0;

const button = document.getElementById("myButton");
const counter = document.getElementById("counter");

button.addEventListener("click", function () {
    clicks++;

    counter.textContent = "Button clicks: " + clicks;
});
