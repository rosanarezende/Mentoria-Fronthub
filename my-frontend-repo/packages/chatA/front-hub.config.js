/**
 * In this file you can customize your micro frontend.
 * To know all the options, access the documentation:
 * https://front-hub.rdstation.com.br/docs/config
 */
module.exports = {
  version: 'auto',
  context: {
    user: {},
  },
  metadata: {
    maintainers: [],
    applicationHosts: [],
  },
  log: {
    level: 'debug',
  },
  intl: {
    language: 'pt-BR',
    fallbackLng: 'pt-BR',
    debug: false,
  },
  features: [''],
  rbac: {
    role: () => '',
    permission: {},
    grants: {},
  },
  events: {
    listeners: [
      'chat:newMessage',
      'plg:chat/newMessage',
      'plg/chat:newMessage',
    ],
    emitters: ['chat:newMessage', 'plg:chat/newMessage', 'plg/chat:newMessage'],
  },
  services: [],
}
