import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const util = require('util');
 

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});

export default class Details extends Component {  
          static navigationOptions = {
    tabBarLabel: 'Notifications',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../Asset/icon/home.png')}
        style={[styles.icon, { tintColor }]}
      />
    ),
  };
    render() {
        console.log(` bien props ${util.inspect(this.props)}`);
         const { params } = this.props.navigation.state;
         
          return (
              <View
                 style={{
                   flex: 1,
                  backgroundColor: 'green',
                   justifyContent: 'center',
                    alignItems: 'center' 
                        }}
              >
              <Text>
                trang details { params.email }
              </Text>
              <TouchableOpacity onPress={() => { this.props.navigation.goBack(); }}>
               <Text style={{ fontSize: 20, color: '#fff', padding: 10 }} > go to home </Text>
              </TouchableOpacity>
              </View>
          );
      }
   }
