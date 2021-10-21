import React from 'react'
import { KeyboardAvoidingView, Platform } from 'react-native'

import { ButtonLoginAndSendMessage } from '../../components/ButtonLoginAndSendMessage'
import { Header } from '../../components/Header'
import { MessagesList } from '../../components/MessagesList'
import { SendMessage } from '../../components/SendMessage'

import { useAuth } from '../../hooks/auth'

import {
  Container,
  Footer
} from './styles'

export function Home() {
  const { signIn, user, isSigningIn } = useAuth()



  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Container>
        <Header />

        <MessagesList />

        <Footer>
          {user
            ? <SendMessage />
            : <ButtonLoginAndSendMessage
              type={!user ? 'socialLogin' : 'sendMessage'}
              title='Logar com GitHub'
              onPress={signIn}
              isLoading={isSigningIn}
            />
          }


        </Footer>
      </Container>
    </KeyboardAvoidingView>
  )
}
