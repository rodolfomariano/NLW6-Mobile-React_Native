import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'
import theme from '../../styles/theme'

interface PhotoSize {
  size: 'small' | 'normal'
}

export const Container = styled(LinearGradient).attrs(() => ({
  colors: [theme.colors.PINK, theme.colors.ORANGE],
  start: { x: 0, y: 0.8 },
  end: { x: 0.9, y: 1 }
})
) <PhotoSize>`
  

  justify-content: center;
  align-items: center;

  border-radius: 30px;

  width: ${({ size }) => size === 'normal' ? 48 : 34}px;
  height: ${({ size }) => size === 'normal' ? 48 : 34}px;
`

export const UserImage = styled.Image<PhotoSize>`
  width: ${({ size }) => size === 'normal' ? 42 : 30}px;
  height: ${({ size }) => size === 'normal' ? 42 : 30}px;
  border-radius: 25px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.BLACK_SECONDARY};
`