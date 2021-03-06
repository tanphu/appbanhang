import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { connect } from 'react-redux';
import firebase from 'firebase';
class AddCart extends React.Component {

  Addcart = (item, size, image) => {
    // var newPostKey = firebase.database().ref().child('Order').push().key;
    var newPostKey = item.name
    firebase.database().ref('/Order/' + newPostKey).set({
      color: item.color,
      description: item.description,
      idcart: newPostKey,
      ima: image,
      id: item.id,
      selectsize: size,
      image: item.image,
      material: item.material,
      name: item.name,
      origin: item.origin,
      price: item.price,
      sale: item.sale,
      rate: item.rate,
      size: item.size,
      trademark: item.trademark,
      type: item.type,
      who: item.who,
    })
    var newitem = {
      'color': item.color,
      'description': item.color,
      'idcart': newPostKey,
      'ima': image,
      'id': item.id,
      'selectsize': size,
      'image': item.image.fff,
      'material': item.material,
      'name': item.name,
      'origin': item.origin,
      'price': item.price,
      'sale': item.sale,
      'rate': item.rate,
      'size': item.size,
      'trademark': item.trademark,
      'type': item.type,
      'who': item.who,
    }
    this.props.removeItem(newitem)
    this.props.addItemToCart(newitem)
  }
  render() {
    return (
      this.props.set ?
        <TouchableOpacity style={{ width: '70%', height: '100%', backgroundColor: '#01b200', justifyContent: 'center', alignItems: 'center', shadowOpacity: 0.5, shadowRadius: 15 }} onPress={() => this.Addcart(this.props.item, this.props.size, this.props.image)}>
          <Text style={{ fontSize: 30, color: '#fff' }}>Mua ngay</Text>
        </TouchableOpacity>
        :
        <TouchableOpacity onPress={() => this.Addcart(this.props.item, this.props.size, this.props.image)}>
          <Entypo name='export' size={30} style={{ color: '#01b200' }} />
        </TouchableOpacity>
    );
  }
}

const mapDispatchToProps = (Dispatch) => {
  return {
    addItemToCart: (propduct) => Dispatch({ type: 'ADD_TO_CART', payload: propduct }),
    removeItem: (product) => Dispatch({ type: 'REMOVE_FROM_CART', payload: product })
  }
}

export default connect(null, mapDispatchToProps)(AddCart);

