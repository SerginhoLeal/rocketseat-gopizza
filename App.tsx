import * as React from 'react';
import * as Native from 'react-native';

export { StatusBar} from 'expo-status-bar';

// AppLoading segura o splash deixando ela visivel até tudo carregar
import AppLoading from 'expo-app-loading';

import { useFonts, DMSans_400Regular } from '@expo-google-fonts/dm-sans';
import { DMSerifDisplay_400Regular } from '@expo-google-fonts/dm-serif-display';

import { ThemeProvider } from "styled-components/native";
import theme from './src/theme';

import Signin from './src/screens/signin';

export default function App() {
  Native.LogBox.ignoreAllLogs(true);

  const [ loaded ] = useFonts({
    DMSans_400Regular,
    DMSerifDisplay_400Regular,
  });

  if(!loaded){
    return <AppLoading />
  };

  return (
    <ThemeProvider theme={theme}>
      <Native.StatusBar backgroundColor="transparent" translucent barStyle="light-content" />
      <Signin />
    </ThemeProvider>
  );
};
