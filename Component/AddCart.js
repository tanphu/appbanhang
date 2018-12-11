import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
class AddCart extends React.Component {


  render() {
    return (
      <TouchableOpacity style={{ backgroundColor: '#1aff1a', alignItems: 'center' }} onPress={this.props.addItemToCart}>
        <Text style={{ fontSize: 20, color: '#fff' }}>Mua ngay</Text>
      </TouchableOpacity>
    );
  }
}

const mapDispatchToProps = (Dispatch) => {
  return {
    addItemToCart: (propduct) => Dispatch({ type: 'ADD_TO_CART', payload: propduct })
  }
}

export default connect(null, mapDispatchToProps)(AddCart);

