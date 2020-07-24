import * as React from 'react';
import {View, YellowBox, Dimensions} from 'react-native';

import {Icon, Card, Button} from 'react-native-elements';
import {Header} from 'react-native-elements';

const window = Dimensions.get('window');

function NotificationsScreen({navigation}) {
  return (
    <View>
      <Header
        leftComponent={{
          icon: 'menu',
          color: '#fff',
          onPress: () => navigation.openDrawer(),
        }}
        centerComponent={{text: 'Notifications', style: {color: '#fff'}}}
      />
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    </View>
  );
}

export default NotificationsScreen;
