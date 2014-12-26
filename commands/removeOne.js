/**
* 1個削除: $mlkcca-cli removeone [key] [value]
**/

var MilkCocoa = require('../lib/milkcocoa');

module.exports = function (info){
	var milkcocoa = new MilkCocoa('https://'+ info.appId +'.mlkcca.com');
	var ds = milkcocoa.dataStore(info.dataStore);
	
	if(!process.argv[3] || !process.argv[4]){
		console.log('empty argv');
		return;
	}

	var key = process.argv[3];
	var value = process.argv[4];
	var obj = {};
	obj[key] = value;
	
	var query = ds.query(obj);
	
	//done();
	query.done(function(data) {
		data.forEach(function(item){
			ds.remove(item.id);
			console.log(item, '削除');
		});
	});
}