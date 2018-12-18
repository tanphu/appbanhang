import React from "react";
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';
import IconBadge from 'react-native-icon-badge';
import { connect } from 'react-redux';


const CartIcon = (props) => (
    <TouchableOpacity onPress={() => props.navigation.navigate('Cart')}>
        <IconBadge
            MainElement={
                <Feather name='shopping-cart' size={30} style={{ marginRight: 20, color: '#EEEEEE' }} />
            }
            BadgeElement={
                <Text style={{ color: '#FFFFFF' }}>{props.cartItems.length}</Text>
            }
            IconBadgeStyle={styles.IconBadge}
            Hidden={props.cartItems.length <= 0}
        />
    </TouchableOpacity>
)

const mapStateToProps = (state) => {
    return {
        cartItems: state
    }
}

const styles = StyleSheet.create({
    headerR: {
        flex: 1,
        flexDirection: 'row',
    },
    IconBadge: {
        position: 'absolute',
        top: 1,
        right: 0,
        minWidth: 25,
        height: 25,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF0000'
    }
});
export default connect(mapStateToProps)(withNavigation(CartIcon));