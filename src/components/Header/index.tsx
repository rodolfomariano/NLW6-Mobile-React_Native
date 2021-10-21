import React from 'react';

import LogoSvg from '../../assets/logo.svg'
import { useAuth } from '../../hooks/auth';
import { UserPhoto } from '../UserPhoto';

import {
  Container,
  ActionContainer,
  ExitButton,
  Title
} from './styles'

export function Header() {
  const { user, signOut } = useAuth()

  return (
    <Container>
      <LogoSvg />

      <ActionContainer>
        {user?.id &&
          <ExitButton onPress={signOut}>
            <Title>Sair</Title>
          </ExitButton>
        }

        <UserPhoto
          imageUri={user?.avatar_url}
        />
      </ActionContainer>

    </Container>
  )
}