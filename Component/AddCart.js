import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { connect } from 'react-redux';
class AddCart extends React.Component {

  render() {
    return (
      this.props.set ?
        <TouchableOpacity style={{ width: '70%', height: '100%', backgroundColor: 'green',justifyContent:'center' ,  alignItems: 'center', shadowOpacity: 0.5, shadowRadius: 15 }} onPress={() => this.props.addItemToCart(this.props.item)}>
          <Text style={{ fontSize: 30, color: '#fff' }}>Mua ngay</Text>
        </TouchableOpacity>
        :
        <TouchableOpacity onPress={() => this.props.addItemToCart(this.props.item)}>
          <Entypo name='export' size={30} style={{ color: '#004F92' }} />
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

