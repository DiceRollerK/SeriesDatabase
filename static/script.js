console.log('test')
//import Database from "./database/nodejs-sqlite/index.mjs";
//const db = new Database('EpisodeDatabase.db');

document.querySelector("#btn").addEventListener("click", () =>{
    //document.querySelector("#test-output").textContent = db.prepare('SELECT * FROM time;').all();
    fetch('/clicked', {method: 'POST'})
    .then(function(response) {
        console.log('1')
        if(response.ok) {
            console.log('2')
            return response.json();
        } 
        throw new Error('Request failed.');
    })
    .then(function(data) {
        console.log('3');
        console.log(data[0].name);
        console.log('4');

        document.getElementById('output').innerHTML = "";

        for (let i = 0; i < data.length; i++) {

        var div = document.createElement("div");
        document.getElementById("output").appendChild(div);
        div.classList.add('output-inside')

        var img = document.createElement("img");
        img.classList.add('logo');

        var text = document.createElement('p');
        text.id = 'text-output'
        
        div.appendChild(img);
        div.appendChild(text);

        img.setAttribute("src", data[i].logo);

        text.innerHTML = 
        `
        Nosaukums: ${data[i].ename}<br>
        Sezona-epizode: ${data[i].season}-${data[i].episode}<br>
        Raidīšanas datums: ${data[i].date}
        `;
        };
        /*
        document.getElementById('text-output').innerHTML = 
        `
        Nosaukums: ${data.name}<br>
        Sezona-epizode: ${data.season}-${data.episode}<br>
        Raidīšanas datums: ${data.date}
        `;
        */
    })
    .catch(function(error) {
        console.log('5')
        console.log(error);
    });
})
