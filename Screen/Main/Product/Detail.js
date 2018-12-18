import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import AddCart from '../../../Component/AddCart';
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
        <AddCart item={item}/>
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
