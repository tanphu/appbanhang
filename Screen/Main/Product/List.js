import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class List extends React.Component {
  static navigationOptions = {
    title: "Danh mục",

  };
  render() {
    return (
      <View style={styles.container}>
        <Text> List product screen </Text>
      </View>
    );
  }
}

export default List;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
