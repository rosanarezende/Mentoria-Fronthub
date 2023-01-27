var express = require('express');
var router = express.Router();
var config = require('../config');

/* GET home page. */
router.get('/', function (req, res, next) {

  // Apontar para as variáveis do schema do convict
  req.app.locals.FRONTHUB_URL = config.fronthub.url
  req.app.locals.FRONTHUB_VERSION = config.fronthub.version
  req.app.locals.FRONTHUB_REQUIRE_VERSION = config.fronthub.require_version

  res.render('index', { title: 'Express' });
});

module.exports = router;
