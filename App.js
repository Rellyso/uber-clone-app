import React from 'react';
import { Provider } from 'react-redux'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from './src/screens/HomeScreen';
import { store } from './store';
import MapScreen from './src/screens/MapScreen';

export default function App() {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Navigator>
            <Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{
                headerShown: false,
              }}
            />
            <Screen
              name="MapScreen"
              component={MapScreen}
              options={{
                headerShown: false,
              }}
            />
          </Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}