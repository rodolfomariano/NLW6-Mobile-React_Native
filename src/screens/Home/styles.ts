import styled from 'styled-components/native'
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.BLACK_SECONDARY};
  padding: ${getStatusBarHeight() + 17}px 24px 0;

`

export const Footer = styled.View`
  padding-bottom: ${getBottomSpace() + 24}px;
`