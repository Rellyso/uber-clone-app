import React from 'react';
import { Provider } from 'react-redux'
import { SafeAreaProvider, } from 'react-native-safe-area-context'
import 'react-native-gesture-handler'
import { KeyboardAvoidingView, Platform, } from 'react-native'
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
          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === 'ios' ? -64 : 0}
          >
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
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}