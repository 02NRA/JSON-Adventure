import { getPlayerData, getHelp } from './getData.js';
let localPlayerData = await getPlayerData();

window.playerAct = function() {
  const data = getPlayerData();
  console.log(data);
  localStorage.setItem('Name', data.name);
  console.log(localStorage.getItem('Name'));

  const playerAction = document.getElementById("playerInput").value.toLowerCase();
  console.log(playerAction);
  if (playerAction == "") console.log("You haven't decided on a course of action yet!")
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
  console.log(localStorage.getItem('Name'))
}