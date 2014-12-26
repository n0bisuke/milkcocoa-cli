var MilkCocoa = require('../lib/milkcocoa');

module.exports = function (info){
	var milkcocoa = new MilkCocoa('https://'+ info.appId +'.mlkcca.com');
	var ds = milkcocoa.dataStore(info.dataStore);

	 var sendData = {
	 	tw_id: '548018689639862272',
	 	userIcon: 'http://pbs.twimg.com/profile_images/519731018580762625/JQSITA7a_normal.png',
	 	text: 'サンタさんありがとう～！よいクリスマスを(´▽｀*)\n体調には気をつけてがんばってください！　#ありがとサンタ http://t.co/fHnELnq0G3',
	 	screen_name: 'SAKURUG_intern',
	 	image_url: 'https://pbs.twimg.com/media/B5r0GANCMAA36Dk.jpg',
	 	created_at: 'Thu Dec 25 07:33:31 +0000 2014',
	};

	ds.push(sendData, function(res,err){
        console.log(res, err);
      });
};