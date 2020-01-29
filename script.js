//Display current date at top of the page
const currentDay = document.getElementById("currentDay");
const m = moment();


currentDay.innerText = m.format('LL');

// Create a new table row element
var tRow = $("<tr>");

displayResult.addEventListener("click", function(){
    $('.table > tbody:last-child').append('<tr>Hello World</tr><tr>Hello Universe</tr>');
});
