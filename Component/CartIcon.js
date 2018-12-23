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
                <Feather name='shopping-cart' size={30} style={{ marginRight: 10, color: '#EEEEEE' }} />
            }
            BadgeElement={
                <Text style={{ color: '#fff' }}>{props.cartItems.length}</Text>
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
        left: 20,
        top: -0.5,
        width: 20,
        height: 20,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#80ff80',
    }
});
export default connect(mapStateToProps)(withNavigation(CartIcon));