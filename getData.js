let returnData = null;
export function getPlayerData(){ 
    const data = fetch('./GameStorage/Player.json')
        .then(response => response.json())
        .then(data => {
            returnData = data})
    return returnData;
}