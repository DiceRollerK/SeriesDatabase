console.log('test')
//import Database from "./database/nodejs-sqlite/index.mjs";
//const db = new Database('EpisodeDatabase.db');

/*
document.getElementById("btn").addEventListener("click", () =>{
    var textValue = document.getElementById('text-input').value;
    if (textValue == '') textValue = 'Pier Pressure';
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
        console.log(textValue);

        document.getElementById('output').innerHTML = "";

        document.getElementById('output').style.display = 'flex';

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
    })
    .catch(function(error) {
        console.log('5')
        console.log(error);
    });
})
*/

document.getElementById("btn").addEventListener("click", () => {
    var textValue = document.getElementById('text-input').value;
    if (textValue == '') textValue = 'Pier Pressure';

   fetch(`/search?term=${textValue}`, {method: 'POST'})
    .then(function(response) {
        console.log('6')
        if(response.ok) {
            console.log('7')
            return response.json();
        } 
        throw new Error('Request failed.');
    })
    .then(function(data) {
        document.getElementById('output').innerHTML = "";

        document.getElementById('output').style.display = 'flex';

        if (data[0] === undefined) {
            console.log('8')
            var div = document.createElement("div");
            document.getElementById("output").appendChild(div);
            div.classList.add('output-inside')
            var text = document.createElement('p');
            div.appendChild(text);
            text.id = 'text-output'
            text.innerHTML = `Nevarēju atrast epizodi!`
        } else {
            console.log('9')
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
        }
    })
    .catch(function(error) {
        console.log('10')
        console.log(error);
    });
});