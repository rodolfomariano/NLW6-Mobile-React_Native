import React from 'react';
import { Image } from 'react-native';
import { useTheme } from 'styled-components';

import AvatarImage from '../../assets/avatar.png'

import {
  Container,
  UserImage
} from './styles'

const avatarDefault = Image.resolveAssetSource(AvatarImage).uri

interface UserPhotoProps {
  imageUri: string | undefined
  size?: 'small' | 'normal'
}


export function UserPhoto({ imageUri, size = 'normal' }: UserPhotoProps) {
  const theme = useTheme()

  return (
    <Container size={size}>
      <UserImage size={size} source={{ uri: !imageUri ? avatarDefault : imageUri }} />
    </Container>
  )
}