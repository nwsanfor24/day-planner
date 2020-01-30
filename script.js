//Display current date at top of the page
const currentDay = document.getElementById("currentDay");
const m = moment();


currentDay.innerText = m.format('LL');

// When save button is clicked, it saves the text in the input field to the local storage

const button = document.getElementById("button");


button.addEventListener("click", function(event) {
    alert(event.target);
});