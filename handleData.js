/**
 * Function that loads data from JSON in GameStorage to localStorage.
 */
export function loadGameData() {
    fetch('./GameStorage/Items.json')
    .then(response => response.json())
    .then(data => {
        localStorage.setItem('Items', JSON.stringify(data))})
    fetch('./GameStorage/NPCs.json')
    .then(response => response.json())
    .then(data => {
        localStorage.setItem('NPCs', JSON.stringify(data))})
    fetch('./GameStorage/PlacePossibilities.json')
    .then(response => response.json())
    .then(data => {
        localStorage.setItem('PlacePossibilities', JSON.stringify(data))})
    fetch('./GameStorage/Player.json')
    .then(response => response.json())
    .then(data => {
        localStorage.setItem('Player', JSON.stringify(data))})
    fetch('./GameStorage/Settings.json')
    .then(response => response.json())
    .then(data => {
        localStorage.setItem('Settings', JSON.stringify(data))})
}

/**
 * Helper function that retrieves data from objects in localStorage.
 * @param {string} dataSetTarget
 * @param {string} attribute
 */
export function getData(dataSetTarget, attribute) {
    let data = localStorage.getItem(`${dataSetTarget}`);
    data = JSON.parse(data);
    if (attribute) data = data[`${attribute}`];
    return data;
}

/**
 * Helper function that writes data to objects in localStorage.
 * @param {*} newValue 
 * @param {string} dataSetTarget
 * @param {string} attribute
 */
export function setData(newValue, dataSetTarget, attribute) {
    let dataSet = typeof newValue == "object" ? newValue : localStorage.getItem(`${dataSetTarget}`);
    if (attribute) {
        dataSet = JSON.parse(dataSet);
        dataSet[`${attribute}`] = newValue;
    }
    dataSet = JSON.stringify(dataSet);
    localStorage.setItem(`${dataSetTarget}`, `${dataSet}`);
}