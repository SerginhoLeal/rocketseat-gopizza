import * as React from 'react';
import * as Native from 'react-native';

// AppLoading segura o splash deixando ela visivel até tudo carregar
import AppLoading from 'expo-app-loading';

import { useFonts } from '@expo-google-fonts/comfortaa';

import { ThemeProvider } from "styled-components/native";
import theme from './src/theme';

import { PizzaProvider } from './src/context';

import Signin from './src/screens/signin';

export default function App() {
  Native.LogBox.ignoreAllLogs(true);

  const [loaded] = useFonts({
    dmsans_400regular: require('./assets/DMSans-Regular.ttf'), 
    dmserifdisplay_400regular: require('./assets/DMSerifDisplay-Regular.ttf'),
  });

  if(!loaded){
    return <AppLoading />;
  };

  return (
    <ThemeProvider theme={theme}>
      <Native.StatusBar backgroundColor="transparent" translucent barStyle="light-content" />
      <PizzaProvider>
        <Signin />
      </PizzaProvider>
    </ThemeProvider>
  );
};
