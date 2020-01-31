//Display current date at top of the page
const currentDay = document.getElementById("currentDay");
const m = moment();


currentDay.innerText = m.format('LL');

// When save button is clicked, it saves the text in the input field to the local storage

const button = document.getElementById("button");

let userInput = [];

const addUserInput = (event)=>{
    event.preventDefault(); // stops the form submitting
    let userInput = {
        id: Date.now(),
        userInput: document.getElementById('userInput').value,
    }
    userInput.push(userInput);
    document.forms[0].reset(); // to clear the form for the next entry

    //for display purposes only
    console.warn('added', {userInput} );

    //saving to Local Storage
    localStorage.setItem('UserInput', JSON.stringify(userInput) );
    
}
addUserInput();



document.addEventListener('DOMContentLoaded', ()=> {
    document.getElementById("btn").addEventListener('click', addUserInput);
});