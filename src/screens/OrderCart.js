import React, { Component } from 'react';
import { View, Text, Alert, Image, StyleSheet, TouchableOpacity } from 'react-native';

import { SearchBar, Avatar, Header, Card, ListItem, Button } from 'react-native-elements';

const util = require('util');

    const users = [
 {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
 },
 { name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
 },
{
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
 },
{
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
 }
];
export default class OrderCart extends Component {
              static navigationOptions = {
    tabBarLabel: 'Notifications',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../Asset/icon/contact.png')}
        style={[styles.icon, { tintColor }]}
      />
    ),
  }; 


     render() {
         return (
             <View>
               
                   <Header  
                          backgroundColor='rgb(61, 109, 203)'
  leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={<MyCustomCenterComponent eventNavigation={this.props.navigation} />} 
  rightComponent={{ icon: 'home', color: '#fff' }}
                   />
 <Card containerStyle={{ padding: 0, marginTop: 150 }} >
  {
    users.map((u, i) => {
      return (
        <ListItem
          key={i}
          roundAvatar
          title={u.name}
          avatar={{ uri: u.avatar }}
        />
      );
    })
  }
</Card>
                </View>   

            //  <View>

//             <Avatar
//   small
//   rounded
//   source={{uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'}}
//   onPress={() => console.log('Works!')}
//   activeOpacity={0.7}
// />
// <SearchBar
//   lightTheme
//       onChangeText={() => { Alert.alert('hihi'); }}
//       placeholder='Type Here...'
// />
            //  </View>d
         );
     }
    }
    
const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});

     class MyCustomCenterComponent extends Component {
      render() {
        const { eventNavigation } = this.props;
           console.log(util.inspect(this.props));
         return (
            <TouchableOpacity onPress={() => { eventNavigation.navigate('DrawerOpen'); }} >
              <Text style={{ padding: 10, fontSize: 20, color: '#fff' }}> OpenMenu </Text>
             </TouchableOpacity> 
         );
      }
 }