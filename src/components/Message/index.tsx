import React from 'react';
import { UserPhoto } from '../UserPhoto';

import {
  Container,
  MessageContent,
  UserContainer,
  UserName,
} from './styles'

interface MessageProps {
  id: string
  text: string
  imageUri: string
  userName: string
}


export function Message({ id, text, imageUri, userName }: MessageProps) {
  return (
    <Container key={id}>
      <MessageContent>
        {text}
      </MessageContent>

      <UserContainer>
        <UserPhoto
          imageUri={imageUri}
          size='small'
        />

        <UserName>
          {userName}
        </UserName>
      </UserContainer>

    </Container>
  )
}