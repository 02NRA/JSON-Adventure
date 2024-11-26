import { loadGameData, setData, getData} from './handleData.js';
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
    const data = getData('Player', 'actions');

    const playerAction = document.getElementById("playerInput").value.toLowerCase();
    // console.log(playerAction);
    if (!playerAction) console.log("You haven't decided on a course of action yet!");
    else if (data.actions.includes(playerAction)) console.log(`You ${playerAction}!`);
    else console.log(`You can't ${playerAction} right now.`);
}
window.help = function() {
    console.log("You can take any of the following actions: ");
    console.log(getData('Player', 'actions'));
}
window.resetGame = function() {
    localStorage.clear();
    localStorage.setItem('gameState', 'stopped');
    console.log(localStorage);
    console.log("The game has been reset!");
}

window.startGame = function() {
    //TODO: Figure out why the first data read of a session always fails; for now, I'm just faking a data read every start
    loadGameData();
    localStorage.setItem('gameState', 'running');
    console.log(localStorage);
    console.log("The game has begun!");
    //TODO: call makeEnvironment()
}
window.testHelpers = function() {
    if (localStorage.getItem('gameState') == 'running') {
        loadGameData();
        console.log(localStorage);
        //Success!
    
        setData('Nason', 'Player', 'name');
        //Success!
    
        console.log(getData('Player', 'name'));
        //Success!
    } else {
        console.log("The game is not yet running.");
    }
}