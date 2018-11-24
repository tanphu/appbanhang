import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';
class ButtonRight extends React.Component {
    componentWillMount() {
        this.props.navigation.setParams({ increaseCount: this._increaseCount });
    }

    state = {
        count: 0,
    };

    _increaseCount = () => {
        this.setState({ count: this.state.count + 1 });
    };
    render() {

        return (
            <View style={styles.headerR}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Favorite')}>
                    <Feather name='heart' size={30} style={{ marginRight: 20, color: '#EEEEEE' }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Cart')}>
                    <Feather name='shopping-cart' size={30} style={{ marginRight: 20, color: '#EEEEEE' }} />
                </TouchableOpacity>
                {/* <Text>count:{this.state.count}</Text> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerR: {
        flex: 1,
        flexDirection: 'row',
    },
});
export default withNavigation(ButtonRight);