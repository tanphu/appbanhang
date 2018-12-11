import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {withNavigation} from 'react-navigation'
class Purchase extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.props.navigation.getParam('Purchase')}>
          <Text>Purchase</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(Purchase);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
