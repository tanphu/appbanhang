import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import AddCart from '../../../Component/AddCart';
class Man extends React.Component {
  static navigationOptions = {
    title: "Nam",

  };

  render() {
    return (
      <View style={styles.container}>
        <AddCart/>
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
