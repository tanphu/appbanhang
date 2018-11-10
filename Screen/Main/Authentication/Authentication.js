import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';
import SignIn from './SignIn';
import SignUp from './SignUp';

class Authentication extends React.Component {
    render() {
        return (
            <TabSign />
        );
    }
}

const TabSign = createMaterialTopTabNavigator(
    {
        SignIn: SignIn,
        SignUp: SignUp,
    },
    {
        swipeEnabled: true,
    }
);

export default Authentication;



