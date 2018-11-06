import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Favorite extends React.Component {
  static navigationOptions = {
    title: "Ưa thích",

  };
  render() {
    return (
      <View style={styles.container}>
        <Text> Favorite product screen </Text>
      </View>
    );
  }
}

export default Favorite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
