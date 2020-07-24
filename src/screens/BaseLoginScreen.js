import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import LoginScreen from './LoginScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen';
import CreateAccountScreen from './CreateAccountScreen';

const Stack = createStackNavigator();

function BaseLoginScreen({navigation}) {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
    </Stack.Navigator>
  );
}

export default BaseLoginScreen;
