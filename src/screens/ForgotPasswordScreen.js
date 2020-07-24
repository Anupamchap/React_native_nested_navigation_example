import * as React from 'react';
import {Text, View, Dimensions, TextInput} from 'react-native';
import {Button} from 'react-native-elements';

const window = Dimensions.get('window');

function ForgotPasswordScreen({navigation}) {
  const handlePress = () => {
    console.log('handlePress');
  };

  const handleGoBack = () => {
    console.log('handleForgotPassword');
    navigation.navigate('Home');
  };

  const handleGoToLoginScreen = () => {
    console.log('handleLoginScreen');
    navigation.navigate('LoginScreen');
  };

  return (
    <View>
      <View
        style={{
          height: window.height,
          width: window.width,
          justifyContent: 'center',
        }}>
        <View style={{display: 'flex', alignItems: 'center'}}>
          <Text />
          <TextInput
            style={{
              borderColor: 'rgba(0,0,0,0.2)',
              width: window.width - 50,
              borderBottomWidth: 1,
              fontSize: 20,
            }}
            placeholder="Enter Email id"
          />
          <Text />
          <TextInput
            style={{
              borderColor: 'rgba(0,0,0,0.2)',
              width: window.width - 50,
              borderBottomWidth: 1,
              fontSize: 20,
            }}
            secureTextEntry={true}
            placeholder="Enter Password"
          />
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={{color: 'darkgray', fontSize: 20}} />

          <Button
            onPress={() => handlePress()}
            buttonStyle={{width: window.width - 50, color: 'black'}}
            title="Submit"
          />
        </View>

        <View style={{alignItems: 'center'}}>
          <Text
            onPress={() => handleGoBack()}
            style={{
              width: window.width - 50,
              color: 'blue',
              fontSize: 15,
              margin: 5,
              textAlign: 'center',
            }}>
            Go Back
          </Text>
          <Text
            onPress={() => handleGoToLoginScreen()}
            style={{
              width: window.width - 50,
              color: 'blue',
              fontSize: 15,
              margin: 5,
              textAlign: 'center',
            }}>
            Go To Login Screen
          </Text>
        </View>
      </View>
    </View>
  );
}

export default ForgotPasswordScreen;
