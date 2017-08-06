import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});


 export default class Home extends Component {
        static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../Asset/icon/home.png')}
        style={[styles.icon, {tintColor}]}
      />
    )
    ,
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../Asset/icon/home.png')}
        style={[styles.icon, { tintColor }]}
      />
    ),
  };

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'green', alignItems: 'center' }}>
            <Text >
            DAY LA TRANG MAINMENU </Text>
            <TouchableOpacity style={{ backgroundColor: 'green' }} onPress={() => { this.props.navigation.navigate('MangHinh_Details', { email: 'k40cntt@gmail.com' }); }}>
              <Text style={{ color: '#fff', fontSize: 20, padding: 10 }} >Go to details</Text>  
            </TouchableOpacity> 
            </View>
        );
    }
 }
