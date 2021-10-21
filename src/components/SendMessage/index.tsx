import React, { useState } from 'react';
import { Alert, Keyboard } from 'react-native';
import { useTheme } from 'styled-components';
import { api } from '../../services/api';
import { ButtonLoginAndSendMessage } from '../ButtonLoginAndSendMessage';

import {
  Container,
  Title,
  Span,
  InputText,
} from './styles'


export function SendMessage() {
  const theme = useTheme()
  const [message, setMessage] = useState('')
  const [sendingMessage, setSendingMessage] = useState(false)

  async function handleMessageSubmit() {
    const messageFormatted = message.trim()


    if (messageFormatted.length > 0) {
      setSendingMessage(true)
      await api.post('/messages', {
        message: messageFormatted
      })

      setMessage('')
      Keyboard.dismiss()

      Alert.alert('Mensagem enviada!')
      setSendingMessage(false)

    } else {
      Alert.alert('Escreva a mensagem para enviar')
      setSendingMessage(false)
    }

  }

  return (
    <Container>
      <Title>Mensagen</Title>
      <Span>Maximo caracteres permitido: 140 | Digitados: {message.length}</Span>
      <InputText
        placeholder='Qual a sua expectativa para o evento?'
        placeholderTextColor={theme.colors.GRAY_PRIMARY}
        multiline
        maxLength={140}
        onChangeText={setMessage}
        value={message}
        editable={!sendingMessage}
      />

      <ButtonLoginAndSendMessage
        type={'sendMessage'}
        title='Enviar Mensagem'
        onPress={handleMessageSubmit}
        isLoading={sendingMessage}
      />

    </Container>
  )
}