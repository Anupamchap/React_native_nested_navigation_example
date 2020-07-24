import * as React from 'react';
import {Dimensions} from 'react-native';
import {Icon, Card, Button} from 'react-native-elements';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LocationScreen from './LocationScreen';
import FinalScreen from './FinalScreen';
import CollectionScreen from './CollectionScreen';
import ActivityScreen from './ActivityScreen';

const window = Dimensions.get('window');
const Tab = createBottomTabNavigator();

function BaseScreen({navigation}) {
  return (
    <Tab.Navigator
      initialRouteName="Location"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Location') {
            iconName = focused ? 'ios-globe' : 'ios-globe-outline';
          } else if (route.name === 'Collection') {
            iconName = focused ? 'ios-people' : 'ios-people-outline';
          } else if (route.name === 'Activity') {
            iconName = focused ? 'ios-trash' : 'ios-trash-outline';
          } else if (route.name === 'Final') {
            iconName = focused ? 'ios-medal' : 'ios-medal-outline';
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
      <Tab.Screen name="Location" component={LocationScreen} />
      <Tab.Screen name="Collection" component={CollectionScreen} />
      <Tab.Screen name="Activity" component={ActivityScreen} />
      <Tab.Screen name="Final" component={FinalScreen} />
    </Tab.Navigator>
  );
}

export default BaseScreen;
