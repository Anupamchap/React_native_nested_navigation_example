import * as React from 'react';
import {View, Dimensions} from 'react-native';

import {Header} from 'react-native-elements';

const window = Dimensions.get('window');

function LocationScreen({navigation}) {
  return (
    <View>
      <Header
        leftComponent={{
          icon: 'menu',
          color: '#fff',
          onPress: () => navigation.openDrawer(),
        }}
        centerComponent={{text: 'Location', style: {color: '#fff'}}}
      />
    </View>
  );
}
export default LocationScreen;
