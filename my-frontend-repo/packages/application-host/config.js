var convict = require('convict');

// Para usar validações que não são nativas do convict podemos:

// 1 - usar a lib convict-format-with-validator (email, url e ipAdress)
convict.addFormat(require('convict-format-with-validator').url);

// 2 - Adicionar validações customizadas
// convict.addFormat({
//   name: 'url',
//   validate: function (val) {
//     if (!val.match(/^https?:\/\/.+/)) {
//       throw new Error('Must be a valid URL');
//     }
//   }
// });


// Define a schema
var config = convict({
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV'
  },
  port: {
    doc: 'The port to bind.',
    format: 'port',
    default: 8080,
    env: 'PORT',
    arg: 'port'
  },
  fronthub: {
    url: {
      doc: 'The URL of the fronthub service.',
      format: 'url',
      default: 'https://front-hub-service-staging.rdops.systems',
      env: 'FRONTHUB_URL',
    },
    version: {
      doc: 'The version of the fronthub service.',
      format: String,
      default: '6.2.3', // TODO: mudar, não está funcionando
      env: 'FRONTHUB_VERSION',
    },
    require_version: {
      doc: 'The version of the require fronthub service.',
      format: String,
      default: '6.2.3', // TODO: mudar, não está funcionando
      env: 'FRONTHUB_REQUIRE_VERSION',
    },
  }
});



// para sobrescrevera variável de ambiente no script de start do package.json
// PORT=5000 yarn start 

// Load environment dependent configuration
// var env = config.get('env');
// config.loadFile('./config/' + env + '.json');

// Perform validation
config.validate({allowed: 'strict'});

module.exports = {...config.getProperties()};
