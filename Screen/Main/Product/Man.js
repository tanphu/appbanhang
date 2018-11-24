import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
class Man extends React.Component {
  static navigationOptions = {
    title: "Nam",

  };

  render() {
    return (
      <View style={styles.container}>
        {/* <Text> Man product screen </Text> */}
        <TouchableOpacity onPress={this.props.navigation.getParam('increaseCount')}>
          <Text>Add to cart</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Man;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
