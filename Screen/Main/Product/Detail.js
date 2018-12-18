import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
class Detail extends React.Component {
  static navigationOptions = {
    title: "Chi tiết",

  };


  render() {
    const item = this.props.navigation.getParam('item', 'no item');
    return (
      <View style={styles.container}>
        <Text> {item.name} </Text>
        <Text> {item.description} </Text>
        <Text> Product detail screen </Text>
        <TouchableOpacity style={{ backgroundColor: '#1aff1a', alignItems: 'center' }} onPress={() => this.props.addItemToCart(item)}>
          < Text style={{ fontSize: 20, color: '#fff' }}>Mua ngay</Text>
        </TouchableOpacity >
      </View>
    );
  }
}

const mapDispatchToProps = (Dispatch) => {
  return {
    addItemToCart: (propduct) => Dispatch({ type: 'ADD_TO_CART', payload: propduct })
  }
}
export default connect(null, mapDispatchToProps)(Detail);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
