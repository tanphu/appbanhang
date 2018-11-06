import React from 'react';
import { TouchableOpacity, Image } from 'react-native'
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import HomeScreen from './Main/HomeScreen';
import OrderHistory from './Main/OrderHistory';
import LoginScreen from './Main/LoginScreen';
import WomanProduct from './Main/Product/Women';
import ManProduct from './Main/Product/Man';
import KidProduct from './Main/Product/Kid';
import List from './Main/Product/List';
import Detail from './Main/Product/Detail';
import Favorite from './Main/Product/Favorite';
import Cart from './Main/Cart';
import Search from './Main/Search';

class MainScreen extends React.Component {
    render() {
        return (
            <AppDrawerNavigator />

        );
    }
}


export default MainScreen;



const HomeNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        Woman: WomanProduct,
        Man: ManProduct,
        Kid: KidProduct,
        Detail: Detail,
        List: List,
        Favorite: Favorite,
        Search: Search,
        Cart: Cart,
    },
    {
        initialRouteName: 'Home',
        navigationOptions: ({ navigation}) => ({
            headerRight: (
                <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                    
                </TouchableOpacity>
            ),
        }),
    }
);

const LoginNavigator = createStackNavigator(
    {
        LoginScreen: LoginScreen,
    },
    {
        initialRouteName: 'LoginScreen',
    }
);

const OrderNavigator = createStackNavigator(
    {
        Order: OrderHistory,
    },
    {
        initialRouteName: 'Order',
    }
);

const AppDrawerNavigator = createDrawerNavigator({
    Home: HomeNavigator,
    Order: OrderNavigator,
    Login: LoginNavigator,

})