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
    if (localStorage.getItem('gameState') == 'running') {
        const data = getData('Player', 'actions');

        const playerAction = document.getElementById("playerInput").value.toLowerCase();
        if (!playerAction) console.warn("You haven't decided on a course of action yet!");
        else if (data.includes(playerAction)) logEvent(`You ${playerAction}!`, 'player');
        else console.warn(`You can't ${playerAction} right now.`);
    }
}
window.help = function() {
    if (localStorage.getItem('gameState') == 'running') {
        logEvent("You can take any of the following actions: ", 'system');
        logEvent(getData('Player', 'actions'));
    }
}
window.resetGame = function() {
    logEvent("The game has been reset!", 'system');
    localStorage.clear();
    localStorage.setItem('gameState', 'stopped');
}
window.startGame = function() {
    loadGameData();
    localStorage.setItem('gameState', 'running');
    logEvent("The game has begun!", 'system');
    makeEnvironment();
}

window.toggleColors = function() {
    if (getData('Settings', 'colors') == 'on') setData('off', 'Settings', 'colors');
    else setData('on', 'Settings', 'colors');
}
window.toggleTheme = function() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}
/**
 * Console logs a message with a color based on the type of message, unless the user toggles that off.
 * @param {string} message 
 * @param {string} type 
 * @returns 
 */
function logEvent(message, type) {
    const colorToggle = localStorage.getItem('gameState') == 'running' ? getData('Settings', 'colors') : 'on';
    if (colorToggle == "off" || !type) {
        console.log(message)
        return;
    };
    // FUTURE: Could break this out into a ColorConfig.json and make it adaptable
    const colors = {
        system: 'green',
        player: 'blue',
        item: 'yellow',
        enemy: 'red',
        npc: 'purple',
    };
    const color = colors[`${type}`] ?? 'white';
    if (colorToggle == "on") console.log(`%c ${message}`, `color: ${color}`);
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