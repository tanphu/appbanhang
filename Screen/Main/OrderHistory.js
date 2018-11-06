import React from 'react';
import { StyleSheet, Text, View , Image , TouchableOpacity } from 'react-native';
class OrderHistory extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Lịch sử",
    headerLeft: (
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Image
          style={{ marginLeft: 20, width: 40, height: 40 }}
          source={require('/appbanhang/Image/Hamber.png')}

        />
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
