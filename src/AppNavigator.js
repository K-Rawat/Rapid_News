import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Main from './Screens/Main';
import NewsDetails from './Screens/NewsDetails';
import CategoryNews from './Screens/CategoryNews';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={Main}
          name="Main"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={NewsDetails}
          name="NewsDetails"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={CategoryNews}
          name="CategoryNews"
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
