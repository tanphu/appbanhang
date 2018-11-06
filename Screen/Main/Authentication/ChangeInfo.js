import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class ChangeInfo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Change info </Text>
      </View>
    );
  }
}

export default ChangeInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
