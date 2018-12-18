import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

class OrderHistory extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Lịch sử",
    headerLeft: (
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Feather name='menu' size={30} style={{ color: '#EEEEEE', marginLeft: 20 }} />
      </TouchableOpacity>
    ),
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
