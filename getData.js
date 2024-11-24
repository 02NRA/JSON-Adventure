//TODO: make get functions only draw from JSON if there is no local storage version of the data
let returnData = null;
export function getPlayerData(){ 
    fetch('./GameStorage/Player.json')
        .then(response => response.json())
        .then(data => {
            returnData = data})
    return returnData;
}
export function getHelp(){ 
    fetch('./GameStorage/Player.json')
        .then(response => response.json())
        .then(data => {
            returnData = data})
    return returnData.actions;
}
export function getWorldData() {
    returnData = {};
    fetch('./GameStorage/NPCs.json')
    .then(response => response.json())
    .then(data => {
        returnData.NPCs = data})
    fetch('./GameStorage/WorldPossibilities.json')
    .then(response => response.json())
    .then(data => {
        returnData.worldPossibilities = data})
    fetch('./GameStorage/Items.json')
    .then(response => response.json())
    .then(data => {
        returnData.items = data})
return returnData;
}

/**
 * Allows handling of objects in localStorage.
 * @param {*} newValue 
 * @param {string} dataSetTarget
 * @param {string} attribute
 */
export function saveData(newValue, dataSetTarget, attribute) {
    let dataSet = typeof newValue == "object" ? newValue : localStorage.getItem(`${dataSetTarget}`);
    if (attribute) {
        dataSet = JSON.parse(dataSet);
        dataSet[`${attribute}`] = newValue;
    }
    dataSet = JSON.stringify(dataSet);
    localStorage.setItem(`${dataSetTarget}`, `${dataSet}`);
}