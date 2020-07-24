import * as React from 'react';
import {View, Dimensions} from 'react-native';
import {Icon, Card, Button} from 'react-native-elements';

import {Header} from 'react-native-elements';

const window = Dimensions.get('window');

function FinalScreen({navigation}) {
  return (
    <View>
      <Header
        leftComponent={{
          icon: 'menu',
          color: '#fff',
          onPress: () => navigation.openDrawer(),
        }}
        centerComponent={{text: 'Final', style: {color: '#fff'}}}
      />
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    </View>
  );
}

export default FinalScreen;
