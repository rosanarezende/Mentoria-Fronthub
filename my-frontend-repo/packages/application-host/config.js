var convict = require('convict');

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
      format: String,
      default: 'https://front-hub-service-staging.rdops.systems',
      env: 'FRONTHUB_URL',
    }
  }
});

// para sobrescrevera variável de ambiente no script de start do package.json
// PORT=5000 yarn start 

// Load environment dependent configuration
// var env = config.get('env');
// config.loadFile('./config/' + env + '.json');

// Perform validation
config.validate({allowed: 'strict'});

module.exports = config;
