/*
*dataStoreの中身を抽出
*/

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
		console.log(data);
	});
}