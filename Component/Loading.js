import React from 'react';
import { View, ActivityIndicator } from 'react-native';
class Loading extends React.Component {

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator size='large' color='#B28F69' />
            </View>
        );
    }
}

export default Loading;

