import React, { Component } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

import icHome from '../../../Asset/icon/home.png';

const util = require('util');

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});
class Shop extends Component {
    static navigationOptions = {
        tabBarLable: 'Screee 1',
        darwerIcon: ({ tintColor }) => (
      <Image
        source={icHome}
        style={[styles.icon, { tintColor }]}
      />
    )
    };
  render() {
        console.log(`this.props.navigation = ${util.inspect(this.props.navigation, false, null)}`);
    return (
      <View
         style={{ flex: 1, 
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text style={{ fontSize: 30, color: 'green' }}>
             Day laShop fff
        </Text>
       <Button
         onPress={() => this.props.navigation.navigate('DrawerOpen')}
       title='open drawer '
       />
        </View>
    );
  }
}

export default Shop;
