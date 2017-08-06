import React, { Component } from 'react';
import { DrawerNavigator } from 'react-navigation';
import { ScrollView, View, Text, Button } from 'react-native';

import Shop from './Shop/Shop';
import Menu from './Menu/Menu';
import Authentication from '../Authentication/Authentication';

const util = require('util');

const DrawerExample = DrawerNavigator(
     {
      Shop: {
          path: '/shop',
          screen: Shop 
      },
        Authenticaton: {
            path: '/authentication',
            screen: Authentication 
        },   
     },
     {
            initialRouteName: 'Shop',
            drawerPosition: 'left',
            drawerWidth: 250,
            contentOptions: {
                activeTintColor: 'red'
            }
        }
    );

export default class Main extends Component {
     
    render() {
        console.log(`this.props.navigation = ${util.inspect(this.props.navigation, false, null)}`);
      //  const { navigate } = this.props.navigation;
        return ( 
            <DrawerExample />
        //     <View>
        //     <Text> Main </Text>
        //    <Button
        //      onPress={() => navigate('CHANGE_INFO',
        //        { name: 'Hoang', email: 'k40cntt@gmail.com' })} title=" Go go ChaneInfo"
        //    />
        //     </View>

        );
    }
}
