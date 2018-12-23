import React from "react";
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';
import CartIcon from './CartIcon';
class ButtonRight extends React.Component {

    render() {

        return (
            <View style={styles.headerR}>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('Favorite') }}>
                    <Feather name='heart' size={30} style={{ marginRight: 10, color: '#fff' }} />
                </TouchableOpacity>
                <CartIcon />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerR: {
        flex: 1,
        flexDirection: 'row',
        paddingRight:13,
    },
});
export default withNavigation(ButtonRight);