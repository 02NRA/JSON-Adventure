function HelloWorld () {
    fetch('./GameStorage/Player.json')
        .then(response => response.json())
        .then(data => {
            console.log(data)})
}