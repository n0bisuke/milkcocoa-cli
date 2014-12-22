var cli = module.exports;
var fs = require('fs');

cli.run = function(){

	//アカウント情報読み込み
	var info = JSON.parse(fs.readFileSync('./commands/mlkconf.json', 'utf8'));
	if(!info.appId || info.appId === ''){//初期状態ならば
		info = require('../commands/init');
	}

	console.log(info);

	if(process.argv[2]){
		require('../commands/'+process.argv[2])(info);
	}else{
		console.log('empty arg');
	}

};