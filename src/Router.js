import { Image, View } from 'react-native';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

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
                 drawerLabel: 'Trang chu'
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
          }
       },
         {
           drawerWidth: 300,
           drawerPosition: 'left',
          
         }
       );
        export default SideMenu;
