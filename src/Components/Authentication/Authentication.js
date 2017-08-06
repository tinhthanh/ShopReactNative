import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MateraIcons from 'react-native-vector-icons/MaterialIcons';

export default class Authentication extends Component {
        static navigationOptions = {
                title: 'Trang thông tin',
                tabBarLable: 'Screen 1',
                 darwerIcon: ({ tintColor }) => (
                <MateraIcons 
                 name='account-balance'
                 size={24} 
                 style={{ color: tintColor }}
                />
             ),
        headerTintColor: 'red',
        
   
    };
    render() {
        return (
           <View>
             <Text>AUTHENCATION</Text>
           </View>
        );
    }
}
