import * as React from 'react';
import {View} from 'react-native';

import {Button} from 'react-native-elements';
import {Header} from 'react-native-elements';

function HomeScreen({navigation}) {
  return (
    <View>
      <Header
        leftComponent={{
          icon: 'menu',
          color: '#fff',
          onPress: () => navigation.openDrawer(),
        }}
        centerComponent={{text: 'Home', style: {color: '#fff'}}}
      />
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Button
          onPress={() => navigation.navigate('Notifications')}
          title="Go to notifications"
        />
      </View>
    </View>
  );
}

export default HomeScreen;
