import React from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';

class Man extends React.Component {
  static navigationOptions = {
    title: "Nam",

  };

  render() {
    return (
      <View style={styles.container}>
        <Text> Man product screen </Text>
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
