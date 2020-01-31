//Display current date at top of the page
const currentDay = document.getElementById("currentDay");
const m = moment();


currentDay.innerText = m.format('LL');

// When save button is clicked, it saves the text in the input field to the local storage

const button = document.getElementById("button");

let input = [];

const addUserInput = (ev)=>{
    ev.preventDefault(); // stops the form submitting
    let input = {
        id: Date.now(),
        input: document.getElementById('userInput').value,
    }
    input.push(input);
    document.forms[0].reset(); // to clear the form for the next entry

    //for display purposes only
    console.warn('added', {input} );

    //saving to Local Storage
    localStorage.setItem('UserInput', JSON.stringify(input) );
    
}



document.addEventListener('DOMContentLoaded', ()=> {
    document.getElementById("btn").addEventListener('click', addUserInput);
});