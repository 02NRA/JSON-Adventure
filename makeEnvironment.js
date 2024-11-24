import { getPlayerData } from './getData.js';
let localPlayerData = await getPlayerData();

window.HelloWorld = function() {
  const data = getPlayerData();
  localStorage.setItem('Name', data.name)
}
window.Wassup = function() {
  console.log(localStorage.getItem('Name'));
}
window.ResetGame = function() {
  localStorage.setItem('Name', '');
}