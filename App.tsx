/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import UserList from './src/pages/UserList';
import Deatils from './src/pages/Details';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <Stack.Navigator
          screenOptions={{
            contentStyle: {backgroundColor: '#ffffff'},
          }}>
          <Stack.Screen
            options={{headerShown: false}}
            name="User List"
            component={UserList}
          />
          <Stack.Screen name="Details" component={Deatils} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
