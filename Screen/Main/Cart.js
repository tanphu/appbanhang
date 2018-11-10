import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Cart extends React.Component {
  static navigationOptions = {
    title: "Giỏ hàng",

  };
  render() {
    return (
      <View style={styles.container}>
        <Text> Cart screen </Text>
      </View>
    );
  }
}

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
