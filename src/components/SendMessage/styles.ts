import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  margin: 16px 0;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.YELLOW};
  margin-bottom: 8px;
  font-size: 18px;
`

export const Span = styled.Text`
  color: ${({ theme }) => theme.colors.GRAY_TERTIARY};
  margin-bottom: 8px;
  font-size: 12px;
`

export const InputText = styled.TextInput`
  width: 100%;
  height: 88px;
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.colors.BLACK_TERTIARY};
  color: ${({ theme }) => theme.colors.GRAY_SECONDARY};

`