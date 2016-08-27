var express = require('express');
var app = express();
var dataFile = require('./data/data.json');

app.set('port', process.env.PORT || 3000);
app.set('appData', dataFile);
app.set('view engine', 'ejs');
app.set('views', './views');

app.locals.siteTitle = 'SiteTitle Awesomeo Website!';

app.use(express.static('./public'));
app.use(require('./routes/index'));
app.use(require('./routes/speakers'));

var server = app.listen(app.get('port'), function(){
	console.log('listening on ' + app.get('port'));
});