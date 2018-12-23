import React from 'react';
import { View, StyleSheet, Image, SafeAreaView, ScrollView } from 'react-native'
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { createStackNavigator, createDrawerNavigator, DrawerItems } from 'react-navigation';
import HomeScreen from './Screen/Main/HomeScreen';
import OrderHistory from './Screen/Main/OrderHistory';
import LoginScreen from './Screen/Main/LoginScreen';
import WomanProduct from './Screen/Main/Product/Women';
import ManProduct from './Screen/Main/Product/Man';
import KidProduct from './Screen/Main/Product/Kid';
import DetailProduct from './Screen/Main/Product/DetailProduct';
import List from './Screen/Main/Product/List';
import Detail from './Screen/Main/Product/Detail';
import Favorite from './Screen/Main/Product/Favorite';
import Cart from './Screen/Main/Cart';
import Search from './Screen/Main/Search';
import ButtonRight from './Component/ButtonRight'
class MainScreen extends React.Component {

    render() {

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
                DetailProduct: DetailProduct,
            },
            {
                initialRouteName: 'Home',
                navigationOptions: () => ({
                    headerRight: (
                        <ButtonRight />
                    ),
                    headerStyle: {
                        backgroundColor: '#FF198F',
                    },
                    headerTintColor: '#fff',
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
                navigationOptions: () => ({
                    headerRight: (
                        <ButtonRight />
                    ),
                    headerStyle: {
                        backgroundColor: '#ff198f',
                    },
                    headerTintColor: '#fff',
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
                navigationOptions: () => ({
                    headerRight: (
                        <ButtonRight />
                    ),
                    headerStyle: {
                        backgroundColor: '#ff198f',
                    },
                    headerTintColor: '#fff',
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
                    <Image style={{ width: '100%', height: '100%' }} source={require('./Image/drawerImage.jpg')} />
                </View>
                <ScrollView>
                    <DrawerItems {...props} />
                </ScrollView>
            </SafeAreaView>
        )
        const AppDrawerNavigator = createDrawerNavigator(
            {
                'Trang chủ': {
                    screen: HomeNavigator,
                    navigationOptions: () => ({
                        drawerIcon: ({ tintColor }) => (
                            <FontAwesome name='home' size={20} style={{ color: tintColor }} />
                        ),
                    }),
                },
                'Lịch sử': {
                    screen: OrderNavigator,
                    navigationOptions: () => ({
                        drawerIcon: ({ tintColor }) => (
                            <MaterialIcons name='history' size={20} style={{ color: tintColor }} />
                        ),
                    }),
                },
                'Tài khoản': {
                    screen: LoginNavigator,
                    navigationOptions: () => ({
                        drawerIcon: ({ tintColor }) => (
                            <FontAwesome name='user' size={20} style={{ color: tintColor }} />
                        ),
                    }),
                },
            },
            {
                drawerWidth: 250,
                initialRouteName: 'Trang chủ',
                contentComponent: CustomDrawerComponent,
                contentOptions: {
                    activeTintColor: '#ff0082'
                },
            }
        )
        return (
            <AppDrawerNavigator />

        );
    }
}

export default MainScreen;



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