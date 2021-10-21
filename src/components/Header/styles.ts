import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const ActionContainer = styled.View`
  flex-direction: row;
  align-items: center;
`
export const ExitButton = styled.TouchableOpacity`
  margin-right: 16px;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.WHITE};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.REGULAR};
`