import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, AsyncStorage } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';
import IconBadge from 'react-native-icon-badge';
class ButtonRight extends React.Component {
    componentWillMount() {
        this.props.navigation.setParams({ increaseCount: this._increaseCount });
        this.props.navigation.setParams({ Purchase: this._purchase });
        AsyncStorage.getItem('number').then((value) => {
            if (value == null) {
                this.setState({ 'count': '0' });
            } else {
                this.setState({ 'count': value });
            }

        }).done();
    }

    state = {
        count: '1',
    };

    _increaseCount = (value) => {

        var num = parseInt(this.state.count)
        var num = num + 1;
        var num = num.toString();
        this.setState({ 'count': num });
        AsyncStorage.setItem('number', num);

    };

    _purchase = () => {
        AsyncStorage.removeItem('number');
        this.setState({ 'count': '0' });
    }

    render() {

        return (
            <View style={styles.headerR}>
                <TouchableOpacity onPress={() => {this.props.navigation.navigate('Favorite')}}>
                    <Feather name='heart' size={30} style={{ marginRight: 20, color: '#EEEEEE' }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Cart')}>
                    <IconBadge
                        MainElement={
                            <Feather name='shopping-cart' size={30} style={{ marginRight: 20, color: '#EEEEEE' }} />
                        }
                        BadgeElement={
                            <Text style={{ color: '#FFFFFF' }}>{this.state.count}</Text>
                        }
                        IconBadgeStyle={styles.IconBadge}
                        Hidden={this.state.count == '0'}
                    />
                </TouchableOpacity>
            </View>
        );
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
        right: 1,
        minWidth: 25,
        height: 25,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF0000'
    }
});
export default withNavigation(ButtonRight);