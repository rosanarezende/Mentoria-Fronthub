var config = require('../config');

// Middleware para injetar as variáveis do schema do convict
const fronthub = (req, res, next) => {
  // Apontar para as variáveis do schema do convict
  const { url, version, require_version} = config.fronthub

  req.app.locals = {
    ...req.app.locals,
    FRONTHUB_URL: url,
    FRONTHUB_VERSION: version,
    FRONTHUB_REQUIRE_VERSION: require_version,
  }

  next()
}

module.exports = fronthub
