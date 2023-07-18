import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button, Text, View} from 'react-native';
import 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function Feed({navigation}) {
  return (
    <View>
      <Text>Here is Feed</Text>
      <Button
        title="Go to profile in root"
        onPress={() => {
          navigation.navigate('Root', {screen: 'Profile'});
        }}></Button>
      <Button
        title="Go to Settings"
        onPress={() => {
          navigation.navigate('Settings');
        }}></Button>
    </View>
  );
}

import {useFocusEffect} from '@react-navigation/native';
import React = require('react');

function Profile() {
  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      console.log('profile focus');

      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
        console.log('profile blur');
      };
    }, []),
  );

  return (
    <View>
      <Text>Here is Profile</Text>
    </View>
  );
}

function Settings({navigation}) {
  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      console.log('settings focus');

      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
        console.log('settings blur');
      };
    }, []),
  );

  return (
    <View>
      <Text>Here is Settings</Text>
      <Button
        title="Go to Feed"
        onPress={() => {
          navigation.navigate('Feed');
        }}></Button>
    </View>
  );
}

function Home() {
  return (
    <View>
      <Text>Here is Home</Text>
    </View>
  );
}

function Root() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Root"
          component={Root}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Feed" component={Feed} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
