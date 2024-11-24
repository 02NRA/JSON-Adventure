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