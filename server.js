const path = require('path');
const express = require('express');
const app = express();
const MY_APP_NAME = 'TeamSportStatistics';
const dist_folder = __dirname + '/dist/' + MY_APP_NAME;

// Serve static files
app.use(express.static(dist_folder));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(dist_folder + '/index.html'));
});

// default Heroku port
app.listen(process.env.PORT || 5000);
