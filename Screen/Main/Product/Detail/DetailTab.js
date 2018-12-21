import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class DetailTab extends React.Component {
    static navigationOptions = () => ({
        title: "Chi tiết",
    })
    render() {
        return (
            <View style={styles.container}>
                <Text> Detail screen </Text>
            </View>
        );
    }
}

export default DetailTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
