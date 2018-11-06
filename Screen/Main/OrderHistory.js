import React from 'react';
import { StyleSheet, Text, View , Image , TouchableOpacity } from 'react-native';
class OrderHistory extends React.Component {
  static navigationOptions = () => ({
    title: "Lịch sử",
  })


  render() {
    return (
      <View style={styles.container}>
        <Text> Order history </Text>
      </View>
    );
  }
}


export default OrderHistory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
