export default fronthub => {
  fronthub.requireMicrofrontend(
    '@resultadosdigitais/my-frontend-repo-chatA',
    function (hub) {
      // O renderAt chama o ReactDom.render
      hub.renderAt(document.getElementById('root'))
    },
    function (err) {
      console.log('errorCallback')
      console.log(err)
    },
  )

  // O emit do comunication pode ser disparado antes da renderização do React finalizar
  // O fronthub ainda não lida com isso, então é necessário esperar um pouco
  setTimeout(() => {
    fronthub.communication('emit', 'chat:newMessage', {
      message: 'Hello',
      chatName: 'application host',
    })
  }, 200)

  // Quando eu emito a MFE já está carregada - então o listen funciona
  fronthub.communication(
    'listen',
    'chat:newMessage',
    ({ message, chatName }) => {
      console.log(`application host received a ${message} from ${chatName}`)
    },
  )
}
