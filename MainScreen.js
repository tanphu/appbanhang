import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { createStackNavigator, createDrawerNavigator, DrawerItems } from 'react-navigation';
import HomeScreen from './Screen/Main/HomeScreen';
import OrderHistory from './Screen/Main/OrderHistory';
import LoginScreen from './Screen/Main/LoginScreen';
import WomanProduct from './Screen/Main/Product/Women';
import ManProduct from './Screen/Main/Product/Man';
import KidProduct from './Screen/Main/Product/Kid';
import List from './Screen/Main/Product/List';
import Detail from './Screen/Main/Product/Detail';
import Favorite from './Screen/Main/Product/Favorite';
import Cart from './Screen/Main/Cart';
import Search from './Screen/Main/Search';

class MainScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = { colorHeader: 'red' };
    }
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
        navigationOptions: ({ navigation }) => ({
            headerRight: (
                <View style={styles.headerR}>
                    <TouchableOpacity onPress={() => navigation.navigate('Favorite')}>
                        <Feather name='heart' size={30} style={{ marginRight: 20, color: 'red' }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                        <Feather name='shopping-cart' size={30} style={{ marginRight: 20, color: 'red' }} />
                    </TouchableOpacity>
                </View>
            ),
            headerStyle: {
                backgroundColor: '#89da59',
            },
            headerTintColor: '#ff420e',
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
            },
        }),
    }
);

const LoginNavigator = createStackNavigator(
    {
        LoginScreen: LoginScreen,
        Favorite: Favorite,
        Cart: Cart,
    },
    {
        initialRouteName: 'LoginScreen',
        navigationOptions: ({ navigation }) => ({
            headerRight: (
                <View style={styles.headerR}>
                    <TouchableOpacity onPress={() => navigation.navigate('Favorite')}>
                        <Feather name='heart' size={30} style={{ marginRight: 20, color: 'red' }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                        <Feather name='shopping-cart' size={30} style={{ marginRight: 20, color: 'red' }} />
                    </TouchableOpacity>
                </View>
            ),
            headerStyle: {
                backgroundColor: '#89da59',
            },
            headerTintColor: '#ff420e',
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
            },
        }),
    }
);

const OrderNavigator = createStackNavigator(
    {
        Order: OrderHistory,
        Favorite: Favorite,
        Cart: Cart,
    },
    {
        initialRouteName: 'Order',
        navigationOptions: ({ navigation }) => ({
            headerRight: (
                <View style={styles.headerR}>
                    <TouchableOpacity onPress={() => navigation.navigate('Favorite')}>
                        <Feather name='heart' size={30} style={{ marginRight: 20, color: 'red' }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                        <Feather name='shopping-cart' size={30} style={{ marginRight: 20, color: 'red' }} />
                    </TouchableOpacity>
                </View>
            ),
            headerStyle: {
                backgroundColor: '#89da59',
            },
            headerTintColor: '#ff420e',
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
            },
        }),
    }
);

const CustomDrawerComponent = (props) => (
    <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.drawerH}>
        <Image source={require('./Image/drawerImage.jpg')}/>
        </View>
        <ScrollView>
            <DrawerItems {...props}/>
        </ScrollView>
    </SafeAreaView>
)
const AppDrawerNavigator = createDrawerNavigator(
    {
        Home: HomeNavigator,
        Oder: OrderNavigator,
        Login: LoginNavigator,

    },
    {
        initialRouteName: 'Home',
        contentComponent: CustomDrawerComponent
    }
)

const styles = StyleSheet.create({
    headerR: {
        flex: 1,
        flexDirection: 'row',
    },
    drawerH: {
        height: 150,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageH: {
        height: 120,
        width: 120,
    }
});