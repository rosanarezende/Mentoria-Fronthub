var config = require('../config');

// Middleware para injetar as variáveis do schema do convict
const fronthub = (req, res, next) => {
  const { app: { locals } } = req
  const { fronthub } = config

  // Apontar para as variáveis do schema do convict

  // === Pode ser feito um por um ===
  // locals = {
  //   ...locals,
  //   FRONTHUB_URL: fronthub.url,
  //   FRONTHUB_VERSION: fronthub.version,
  //   FRONTHUB_REQUIRE_VERSION: fronthub.require_version,
  // }

  // === Ou pode ser feito com um forEach, para cada chave que for inserida ===
  Object.keys(fronthub).forEach(key => {
    locals[`FRONTHUB_${key.toUpperCase()}`] = fronthub[key]
  })

  next()
}

module.exports = fronthub
