/*初期化用*/

var fs = require('fs');
var prompt = require('prompt');

//入力した値をjsonへ保存
module.exports = function (info){
	prompt.start();
	prompt.get(['appId', 'dataStore'], function (err, result) {

		var data = {
			appId: result.appId,
			dataStore: result.dataStore
		};

		fs.writeFile('./commands/mlkconf.json', JSON.stringify(data) , function (err) {
			if(err)console.log(err);

			return data;
		});
    });
}

