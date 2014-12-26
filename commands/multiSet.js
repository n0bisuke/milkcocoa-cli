var MilkCocoa = require('../lib/milkcocoa');

module.exports = function (info){
	var milkcocoa = new MilkCocoa('https://'+ info.appId +'.mlkcca.com');
	var ds = milkcocoa.dataStore(info.dataStore);

	if(!process.argv[3] || !process.argv[4]){
		console.log('empty argv');
		return;
	}

	var key1 = process.argv[3];
	var value1 = process.argv[4];
	var key2 = process.argv[5];
	var value2 = process.argv[6];

	var obj1 = {};
	obj1[key1] = value1;
	var query = ds.query(obj1);
	query.done(function(item){
		var obj = {};
		obj[key2] = value2;
		ds.set(item.id, obj);
		console.log(item);
		console.log("multi_set! done");
	});

};