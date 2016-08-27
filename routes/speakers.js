var express = require('express');
var router = express.Router();

router.get('/speakers', function(req, res){

	dataFile = req.app.get('appData');

	res.render('speakers', {
		pageTitle: 'Speakers',
		pageId: 'speakers',
		dataF: dataFile
	});

});


router.get('/xspeakers', function(req, res){
	var info = '';

    dataFile = req.app.get('appData');

	dataFile.speakers.forEach(function(item){
		info += `
		<li>
			<h2>${item.name}</h2>
			<p>${item.summary}</p>
		</li>
		`;
	});

	//OK?

	res.send(`
		<h1>Head out!</h1>
		${info}
	`);
});

router.get('/speakers/:speakerid', function(req, res){
    
    dataFile = req.app.get('appData');
	var speaker = dataFile.speakers[req.params.speakerid];
	res.send(`
		<h1>${speaker.title}</h1>
		${speaker.summary}
	`);
});

module.exports = router;