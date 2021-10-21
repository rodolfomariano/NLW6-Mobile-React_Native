import React, { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { Message } from '../Message';
import io from 'socket.io-client'

import {
  Container
} from './styles'

interface MessageProps {
  id: string
  text: string
  user: {
    avatar_url: string
    name: string
  }
}

let messagesQueue: MessageProps[] = []

const socket = io(String(api.defaults.baseURL))
socket.on('new_message', (newMessage) => {
  messagesQueue.push(newMessage)
  
})

export function MessagesList() {
  const [currentMessages, setCurrentMessages] = useState<MessageProps[]>([])

  useEffect(() => {
    async function fetchMessages() {
      const messagesResponse = await api.get<MessageProps[]>('/messages/last3')
      setCurrentMessages(messagesResponse.data)
    }

    fetchMessages()
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      if (messagesQueue.length > 0) {
        setCurrentMessages(prevState => [messagesQueue[0], prevState[0], prevState[1]].filter(Boolean))
        messagesQueue.shift()
      }
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  return (
    <Container>
      {currentMessages.map(message => (
        <Message
          key={message.id}
          id={message.id}
          text={message.text}
          imageUri={message.user.avatar_url}
          userName={message.user.name}
        />

      ))}

    </Container>
  )
}