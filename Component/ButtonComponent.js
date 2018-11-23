import React from "react";
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons';


const ButtonComponent = ({ navigation }) => (
    <View style={styles.headerR}>
        <TouchableOpacity onPress={() => navigation.navigate('Favorite')}>
            <Feather name='heart' size={30} style={{ marginRight: 20, color: '#EEEEEE' }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <Feather name='shopping-cart' size={30} style={{ marginRight: 20, color: '#EEEEEE' }} />
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    headerR: {
        flex: 1,
        flexDirection: 'row',
    },
});
export default ButtonComponent;