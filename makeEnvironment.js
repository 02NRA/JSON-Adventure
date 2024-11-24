import { getPlayerData } from './getData.js';
let localPlayerData = await getPlayerData();

window.HelloWorld = function() {
    console.log(getPlayerData());
  }