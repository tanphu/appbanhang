import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class CommentTab extends React.Component {
    static navigationOptions = () => ({
        title: "Bình luận",
    })
    render() {
        return (
            <View style={styles.container}>
                <Text> Comment screen </Text>
            </View>
        );
    }
}

export default CommentTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
