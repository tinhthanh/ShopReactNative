import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

const util = require('util');


export default class ChangeInfo extends Component {
    render() { 
      const { params } = this.props.navigation.state;
       console.log(`this.props.navigation = ${
              util.inspect(this.params, false, null)}`);   
    
        return (
           <View>
             <Text>chane Info</Text>
               <Text>Name { params.name }</Text>
                 <Text>Email { params.email }</Text>
               <Button onPress={() => { this.props.navigation.goBack(); }} title="Ve trang Main" />
           </View>
        );
    }
}

