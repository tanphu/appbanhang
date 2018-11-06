import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Kid extends React.Component {
  static navigationOptions = {
    title: "Trẻ em",

  };
  render() {
    return (
      <View style={styles.container}>
        <Text> Kid product screen </Text>
      </View>
    );
  }
}

export default Kid;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
