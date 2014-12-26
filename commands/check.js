var MilkCocoa = require('../lib/milkcocoa');

module.exports = function (info){
	var milkcocoa = new MilkCocoa('https://'+ info.appId +'.mlkcca.com');
	var ds = milkcocoa.dataStore(info.dataStore);

	var query = ds.query({screen_name: 'dddaisukewee'});

	query.done(function(data){
		console.log(data);
		if(data.length >= 1){
			console.log("aru");
		}else{
			console.log("nai");
		}
	});

	// if(!process.argv[3] || !process.argv[4] || !process.argv[5]){
	// 	console.log('empty argv');
	// 	return;
	// }

	// var id = process.argv[3];
	// var key = process.argv[4];
	// var value = process.argv[5];

	// var obj = {};
	// obj[key] = value;
	// ds.set(id, obj);
	// console.log("set! done");
};