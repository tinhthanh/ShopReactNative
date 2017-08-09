import React from 'react';
import { Image, View, ScrollView, Text, Platform, StyleSheet } from 'react-native';
import { StackNavigator, TabNavigator, DrawerNavigator, DrawerItems } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Drawer from 'react-native-drawer';

import Details from './screens/Details';
import Home from './screens/Home';
import OrderCart from './screens/OrderCart';
import GiaoDien from './screens/GiaoDien';
import Menu from './screens/DrawerMenu';

 const HomeStack = StackNavigator({
          MangHinh_Home: {
              screen: Home,
              navigationOptions: {
                title: 'Trang xx chủ',
                 drawerLabel: 'Trang chu',
            
                
              }
           },
            MangHinh_Details: {
                 screen: Details,
                navigationOptions: {
                   title: 'Thông tin chi tiết'
                 }
            },
            MangHinh_OrderCart: {
              screen: OrderCart 
            }
   }); 
    
    const Tabbar = TabNavigator({
           Home: {
              screen: HomeStack,
              navigationOptions: {
                tabBarLabel: 'Home'
              }
           },
           OrderCart: {
             screen: OrderCart,
             navigationOption: {
               tabBarLable: 'Order'
             }
           },
             GiaoDien: {
               screen: GiaoDien,
               navigationOptions: {
                 tabBarLable: 'Giao Dien'
               }
            }    
        },
        {
          tabBarPosition: 'bottom',
          swipeEnabled: true,
          animationEnabled: true,
          lazy: true,
          tabBarOptions: {
             activeTintColor: 'white',
           activeBackgroundColor: 'blue',
           inactiveTintColor: '#ff0000',
           inactiveBackgroundColor: 'blue',
    showLabel: false,
  style: { backgroundColor: '#4169e1' },
    labelStyle: {
       fontSize: 16,
       padding: 0
     },
    showIcon: true 
          }
        });
    const SideMenu = DrawerNavigator({
          Tabbar: {
            screen: Tabbar 
          },
       },
         { 
           initialRouteName: 'Tabbar',
           drawerWidth: 300,
           drawerPosition: 'left',
           backBehavior: 'initialRoute',
           contentComponent: props => <CustomDrawerContentComponent {...props} />
           }
       );
          
//      class  MyMain extends React.Component {

//       render() {
//         return (   
//           <View />
//         );
//       }
//      }

//     class Application extends React.Component {
//         closeControlPanel = () => {
//     this.drawer.close();
//   };
//   openControlPanel = () => {
//     this.drawer.open();
//   };

//   render() {
//     return (
//      <Drawer
//         ref={(ref) => { this.drawer = ref; }}
//         content={<Menu />}
//      >
//         <Tabbar />
//       </Drawer>
//     );
//   }
// }
const uri = 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png';
const CustomDrawerContentComponent = (props) => (
  <ScrollView>
   <View style={stylesv.avatarContainer}>
        <Image
          style={stylesv.avatar}
          source={{ uri }}
        />
        <Text style={stylesv.name}>Your name</Text>
      </View>    
    <DrawerItems style={{ backgroundColor: 'gray' }} {...props} />
  </ScrollView>
);

const stylesv = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  },  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: 'gray',
    padding: 20,
  },
  avatarContainer: {
    marginBottom: 20,
    marginTop: 20,
    marginLeft: 20
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    flex: 1,
  },
  name: {
    position: 'absolute',
    left: 70,
    top: 20,
  },
  item: {
    fontSize: 14,
    fontWeight: '300',
    paddingTop: 5,
  }
});

        export default SideMenu;
