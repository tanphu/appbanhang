import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Woman extends React.Component {

  static navigationOptions = {
    title: "Nữ",

  };
  render() {
    return (
      <View style={styles.container}>
        <Text> Woman product screen </Text>
      </View>
    );
  }
}

export default Woman;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
