import * as React from 'react';
import {
  Text,
  View,
  YellowBox,
  Dimensions,
  ScrollView,
  TextInput,
} from 'react-native';
import {Button} from 'react-native-elements';

const window = Dimensions.get('window');

function LoginScreen({navigation}) {
  const [value, onChangeText] = React.useState('Useless Placeholder');

  const handlePress = () => {
    console.log('handlePress');
  };

  const handleCreateAccount = () => {
    console.log('handleCreateAccount');
    navigation.navigate('CreateAccount');
  };

  const handleForgotPassword = () => {
    console.log('handleForgotPassword');
    navigation.navigate('ForgotPassword');
  };

  const handleGoBack = () => {
    console.log('handleForgotPassword');
    navigation.navigate('Home');
  };

  return (
    <View>
      <View
        style={{
          height: window.height,
          width: window.width,
          //alignContent: 'center',
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
            textContentType="emailAddress"
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
            title="Login"
          />
        </View>

        <View style={{alignItems: 'center'}}>
          <Text
            onPress={() => handleForgotPassword()}
            style={{
              width: window.width - 50,
              color: 'blue',
              fontSize: 15,
              margin: 5,
              textAlign: 'center',
            }}>
            Forgot Password
          </Text>
          <Text
            onPress={() => handleCreateAccount()}
            style={{
              width: window.width - 50,
              color: 'blue',
              fontSize: 15,
              margin: 5,
              textAlign: 'center',
            }}>
            Create Account
          </Text>
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
        </View>
      </View>
    </View>
  );
}
export default LoginScreen;
