import React from 'react';
import AppLoading from 'expo-app-loading'
import { ThemeProvider } from 'styled-components'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto'

import { Home } from './src/screens/Home';
import theme from './src/styles/theme'
import { StatusBar } from 'react-native';
import { AuthProvider } from './src/hooks/auth';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <Home />
      </AuthProvider>
    </ThemeProvider>
  );
}
