var express = require('express');
var router = express.Router();
var config = require('../config');

/* GET home page. */
router.get('/', function (req, res, next) {
  req.app.locals.FRONTHUB_URL = config.get('fronthub.url')
  res.render('index', { title: 'Express' });
});

module.exports = router;
