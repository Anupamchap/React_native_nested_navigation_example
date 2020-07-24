import * as React from 'react';
import {Text, View, Dimensions} from 'react-native';

import {Header} from 'react-native-elements';

const window = Dimensions.get('window');

function AboutCompany({navigation}) {
  return (
    <View>
      <Header
        leftComponent={{
          icon: 'menu',
          color: '#fff',
          onPress: () => navigation.openDrawer(),
        }}
        centerComponent={{text: 'About Company', style: {color: '#fff'}}}
      />
      <Text>About Company</Text>
    </View>
  );
}

export default AboutCompany;
