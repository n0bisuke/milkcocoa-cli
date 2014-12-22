var MilkCocoa = require('../lib/milkcocoa');

module.exports = function (info){
	var milkcocoa = new MilkCocoa('https://'+ info.appId +'.mlkcca.com');
	var ds = milkcocoa.dataStore(info.dataStore);

	var query = ds.query();
	var count = 1;

	//limit();
	var limit = 1000;
	console.log(process.argv);
	if(process.argv[3])limit = parseInt(process.argv[3]);
	query.limit(limit);

	//sort();
	if(!process.argv[4] || process.argv[4] === 'asc'){
		query.sort('asc');
	}else if(process.argv[4] === 'desc'){
		query.sort('desc');
	}

	//done();
	query.done(function(data) {
		data.forEach(function(item){
			ds.remove(item.id);
			console.log(count,item);
			count++;
		});
	});
}