import * as React from 'react';
import {Dimensions} from 'react-native';
import {Icon} from 'react-native-elements';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import BaseLoginScreen from './src/screens/BaseLoginScreen';
import AboutCompany from './src/screens/AboutCompany';
import BaseScreen from './src/screens/BaseScreen';
import NotificationsScreen from './src/screens/NotificationsScreen';

const window = Dimensions.get('window');
const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          drawerIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'ios-home' : 'ios-home-outline';
            } else if (route.name === 'Start Activity') {
              iconName = focused ? 'ios-trash' : 'ios-trash-outline';
            } else if (route.name === 'Upload Data') {
              iconName = focused
                ? 'ios-cloud-upload'
                : 'ios-cloud-upload-outline';
            } else if (route.name === 'About Company') {
              iconName = focused ? 'ios-leaf' : 'ios-leaf-outline';
            } else if (route.name === 'Login') {
              iconName = focused ? 'ios-log-in' : 'ios-log-in-outline';
            }

            // You can return any component that you like here!
            return (
              <Icon name={iconName} type="ionicon" size={size} color={color} />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: 'red',
          inactiveTintColor: 'gray',
        }}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Start Activity" component={BaseScreen} />
        <Drawer.Screen
          name="Upload Data"
          component={NotificationsScreen}
        />
        <Drawer.Screen name="About Company" component={AboutCompany} />
        <Drawer.Screen name="Login" component={BaseLoginScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default App;
