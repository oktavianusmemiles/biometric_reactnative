

import React from 'react';
import {
  useColorScheme
} from 'react-native';
import { RootStack } from './src/navigator/RootStack';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (<RootStack/>)
};


export default App;
