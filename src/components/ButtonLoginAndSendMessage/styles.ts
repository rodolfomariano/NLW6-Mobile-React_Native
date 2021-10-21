import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

interface ButtonType {
  type: 'socialLogin' | 'sendMessage'
  isLoading?: boolean
}

export const Container = styled(RectButton) <ButtonType>`
  width: 100%;
  padding: 16px 0;
  border-radius: 8px;

  opacity: ${({ isLoading }) => isLoading === true ? 0.5 : 1};

  background-color: ${({ theme, type }) => type === 'socialLogin'
    ? theme.colors.YELLOW
    : theme.colors.PINK
  };

  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text<ButtonType>`
  margin-left: ${({ type }) => type === 'socialLogin' ? 16 : 0}px;
  color: ${({ theme, type }) => type === 'socialLogin'
    ? theme.colors.BLACK_TERTIARY
    : theme.colors.WHITE
  };
`