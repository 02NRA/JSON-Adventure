import { getPlayerData, getHelp, saveData, loadGameData} from './getData.js';
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

    const playerAction = document.getElementById("playerInput").value.toLowerCase();
    // console.log(playerAction);
    if (!playerAction) console.log("You haven't decided on a course of action yet!");
    else if (data.actions.includes(playerAction)) console.log(`You ${playerAction}!`);
    else console.log(`You can't ${playerAction} right now.`);
}
window.help = function() {
    const data = getHelp();
    console.log("You can take any of the following actions: ");
    console.log(data);
}
window.resetGame = function() {
    localStorage.clear();
    console.log(localStorage);
    console.log("The game has been reset!");
}

window.startGame = function() {
    //TODO: Figure out why the first data read of a session always fails; for now, I'm just faking a data read every start
    try {
        const data = getHelp();
    } catch {

    }
    console.log("The game has begun!");
    //TODO: call makeEnvironment()
}
window.test = function() {
    //test saveData()
    // let data = getPlayerData();
    // saveData(data, 'Player');
    // console.log('---------------');
    // saveData('Nason', 'Player', 'name');
    //Success!

    loadGameData();
    //Success!
}