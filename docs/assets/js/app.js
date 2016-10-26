var filesYo = require('fs')
var http = require('http');
filesYo.writeFile(__dirname + '/index.html', '<h1>HTML rocks</h1>');

var playerUrl = "http://www.fhsuathletics.com/common/controls/image_handler.aspx?thumb_prefix=rp_primary&image_path=/images/2016/10/7/Schnell_Taryn_Duffy_UNK_1.jpg";
var playerFile = filesYo.createWriteStream(__dirname + "/node-player.jpg")
 var request = http.get(playerUrl, function(response) {
	 response.pipe(playerFile)
 })
