import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Search extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Search screen </Text>
      </View>
    );
  }
}

export default Search;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
