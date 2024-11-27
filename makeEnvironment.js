import { getData } from './handleData.js';
export function makeEnvironment () {
    let data = getData('PlacePossibilities');
    data = getData('PlacePossibilities');
    if (!data) makeEnvironment(); //This is because this first pass fails every time for some reason
    let aura = data.aura[parseInt(Math.floor(Math.random() * 3))];
    let material = data.materials[parseInt(Math.floor(Math.random() * 5))];
    let temperature = data.temperature[parseInt(Math.floor(Math.random() * 5))];

    console.log(`You find yourself in a ${aura} room made of ${material}, filled with ${temperature} air.`)
}