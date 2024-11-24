import { getPlayerData, getHelp } from './getData.js';
import { makeEnvironment } from './makeEnvironment.js';

// Get the input field
var input = document.getElementById("playerInput");
// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("playerAct").click();
  }
});

window.playerAct = function() {
    const data = getPlayerData();
    console.log(data);
    localStorage.setItem('Name', data.name);
    console.log(localStorage.getItem('Name'));

    const playerAction = document.getElementById("playerInput").value.toLowerCase();
    console.log(playerAction);
    if (playerAction == "") console.log("You haven't decided on a course of action yet!");
    else if (data.actions.includes(playerAction)) console.log(`You ${playerAction}!`);
    else console.log(`You can't ${playerAction} right now.`);
}
window.Help = function() {
    const data = getHelp();
    console.log("You can take any of the following actions: ");
    console.log(data);
}
window.ResetGame = function() {
    localStorage.clear();
    console.log(localStorage.getItem('Name'));
}

window.startGame = function() {
    console.log(localStorage.getItem('Name'))
}