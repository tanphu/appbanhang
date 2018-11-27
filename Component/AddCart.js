import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {withNavigation} from 'react-navigation'
class AddCart extends React.Component {


  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.props.navigation.getParam('increaseCount')}>
          <Text>Add to cart</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(AddCart);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
