console.log('test')
//import Database from "./database/nodejs-sqlite/index.mjs";
//const db = new Database('EpisodeDatabase.db');

document.querySelector("#btn").addEventListener("click", () =>{
    //document.querySelector("#test-output").textContent = db.prepare('SELECT * FROM time;').all();
    fetch('/clicked', {method: 'POST'})
    .then(function(response) {
        if(response.ok) return response.json();
        throw new Error('Request failed.');
    })
    .then(function(data) {
        console.log(JSON.stringify(data))
        document.getElementById('test-output').innerHTML = JSON.stringify(data);
    })
    .catch(function(error) {
        console.log(error);
    });
})
