import React from 'react';
import { ActivityIndicator } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { RectButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';

import {
  Container,
  Title
} from './styles'

interface ButtonLoginAndSendMessageProps extends RectButtonProps {
  type: 'socialLogin' | 'sendMessage'
  title: string
  isLoading?: boolean
}


export function ButtonLoginAndSendMessage({ type = 'sendMessage', title, isLoading = false, ...rest }: ButtonLoginAndSendMessageProps) {
  const theme = useTheme()

  return (
    <Container
      type={type}
      enabled={!isLoading}
      isLoading={isLoading}
      {...rest}
    >
      {isLoading
        ? <ActivityIndicator color={theme.colors.BLACK_TERTIARY} />
        : <>
          {type === 'socialLogin' &&
            <AntDesign
              name='github'
              size={24}
              color={type === 'socialLogin' ? theme.colors.BLACK_TERTIARY : theme.colors.WHITE}
            />
          }
          <Title type={type}>{title}</Title>

        </>
      }
    </Container>
  )
}