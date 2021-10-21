import styled from 'styled-components/native'
import { MotiView } from 'moti'

export const Container = styled(MotiView).attrs(() => ({
  from: {
    opacity: 0, translateX: -50
  },
  animate: {
    opacity: 1, translateX: 0
  },
  transition: {
    type: 'timing', duration: 700
  },

}))`
  width: 100%;
  border-left-width: 2px;
  border-left-color: ${({ theme }) => theme.colors.ORANGE};
  padding-left: 16px;
  margin-bottom: 32px;
`

export const MessageContent = styled.Text`
  color: ${({ theme }) => theme.colors.WHITE};
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  line-height: 20px;
  font-size: 14px;
  margin-bottom: 12px;
`

export const UserContainer = styled.View`
  flex-direction: row;
  align-items: center;

`

export const UserName = styled.Text`
  color: ${({ theme }) => theme.colors.GRAY_SECONDARY};
  margin-left: 16px;
`