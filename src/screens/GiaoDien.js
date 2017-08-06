import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

 const cartIcon = require('../Asset/icon/cart.png');

 class Giaodien extends Component {
   static navigationOptions = {
         tabBarLable: 'Giao dien',
         tabBarIcon: ({ tintColor }) => (
             <Image source={cartIcon} style={[{ width: 26, height: 26 }, { tintColor }]} />
         )
   } 
     render() {
         return (
          <View style={{ flex: 1, backgroundColor: '#16013f' }} >
             <TouchableOpacity onPress={() => { this.props.navigation.navigate('DrawerOpen'); }} >
              <Text style={{ padding: 10, fontSize: 20, color: '#fff' }}> OpenMenu </Text>
             </TouchableOpacity> 
          </View>        
         );
     }
 }
 
 export default Giaodien;
