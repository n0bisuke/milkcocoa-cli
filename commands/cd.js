/*データストア変更*/

var fs = require('fs');
var prompt = require('prompt');

//入力した値をjsonへ保存
module.exports = function (info){
	prompt.start();
	prompt.get(['dataStore'], function (err, result) {

		var data = {
			appId: info.appId,
			dataStore: result.dataStore
		};

		fs.writeFile('./commands/mlkconf.json', JSON.stringify(data) , function (err) {
			if(err)console.log(err);

			console.log('Now is:',data);
			return data;
		});
    });
}

