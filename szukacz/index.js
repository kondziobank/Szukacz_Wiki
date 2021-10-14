// kod uruchamiamy koniecznie z parametrem -q: node index.js -d "hasło wyszukiwania"

var request = require('request');
var argv = require('yargs').argv;
var query = argv.q || "Blazewicz";

var url = `https://en.wikipedia.org/w/api.php?action=opensearch&search=%22+"+ ${query} +"&format=json`

request(url, function(error, response, body) {
    if (error) {
        console.log("Connection failed!!!");
    } else {
        var wiki = JSON.parse(body);
        for (var i = 0; i < wiki[1].length; i++) {
            var message = `Wyszukiwanie frazy --- ${wiki[1][i]} --- Link do strony ---> ${wiki[3][i]}` + "\n";
            console.log(message);
        }

    }

});
