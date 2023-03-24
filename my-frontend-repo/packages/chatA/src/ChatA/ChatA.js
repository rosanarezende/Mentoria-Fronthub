import { useState } from 'react'
import styled from 'styled-components'
import { useCommunication } from '@resultadosdigitais/front-hub/react'

// import { Trans, useTranslation } from 'react-i18next'
import {
  Form,
  Input,
  List,
  Text,
  Button,
} from '@resultadosdigitais/tangram-components'

const Root = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--neutral-text-inverse);
`

function ChatA() {
  const { emit, useListener } = useCommunication('chat')
  const [mensagem, setMensagem] = useState('')
  const [listaDeMensagens, setListaDeMensagens] = useState([])

  useListener(
    'newMessage',
    ({ message, chatName }) => {
      setListaDeMensagens([...listaDeMensagens, `${chatName}: ${message}`])
    },
    [listaDeMensagens],
  )

  const handleSendMessge = e => {
    e.preventDefault()
    emit('newMessage', { message: mensagem, chatName: 'chatA' })
    setMensagem('')
  }

  return (
    <Root>
      <Form>
        <Form.Control>
          <Form.Label htmlFor="inputField">Chat A</Form.Label>
          <Input
            type="text"
            id="inputField"
            value={mensagem}
            onChange={e => setMensagem(e.target.value)}
          />
        </Form.Control>
        <Button onClick={handleSendMessge}>Enviar</Button>
        <List>
          {listaDeMensagens.map((mensagem, index) => (
            <List.Item key={index}>
              <Text as="span" token={Text.tokens.TEXT_MD_BOLD}>
                {mensagem}
              </Text>
            </List.Item>
          ))}
        </List>
      </Form>
    </Root>
  )
}

export default ChatA
