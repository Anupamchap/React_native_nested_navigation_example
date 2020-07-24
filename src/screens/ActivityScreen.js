import * as React from 'react';
import {View, Dimensions} from 'react-native';

import {Button} from 'react-native-elements';

import {Header} from 'react-native-elements';

const window = Dimensions.get('window');

function ActivityScreen({navigation}) {
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

export default ActivityScreen;
