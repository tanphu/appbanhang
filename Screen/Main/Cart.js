import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, Image, TouchableOpacity } from 'react-native';
import { Button } from 'native-base';
import { connect } from 'react-redux';
import { Entypo, EvilIcons } from '@expo/vector-icons';
import firebase from 'firebase';
const ITEM_WIDTH = Dimensions.get('screen').width

class Cart extends React.Component {
  static navigationOptions = {
    title: "Giỏ hàng",

  };

  constructor(props) {
    super(props)
    this.state = {
      sum: 0,
    }
  }

  componentDidMount() {
    this.total(this.props.cartItems)
  }
  Remove = (item, product) => {
    firebase.database().ref('/Order/' + item.idcart).remove()
    this.props.removeItem(item)
    this.total(product)
  }

  total = (products) => {
    var s = 0
    products.map((item) => {
      s = s + (item.price - (item.price * item.sale))
    })
    this.setState({ sum: s })
  }

  renderProducts = (products) => {

    return products.map((item, index) => {
      return (
        <View key={index} style={{ flex: 1, width: ITEM_WIDTH - 10, height: 200, margin: 5, borderWidth: 1.5, borderColor: 'black' }}>
          <TouchableOpacity onPress={() => { this.props.navigation.navigate('Detail', { item: item, trademark: item.trademark }) }}>
            <View style={{ height: '70%', flexDirection: 'row' }}>
              <View style={{ width: '40%', height: '100%', alignItems: 'center', justifyContent: 'center', marginTop: 5 }}>
                <Image style={{ width: 100, height: 150, resizeMode: 'center' }} source={{ uri: item.ima }} />
              </View>
              <View style={{ width: '60%', height: '100%' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ justifyContent: 'center', fontSize: 15, fontWeight: 'bold' }}>{item.trademark}</Text>
                  <TouchableOpacity style={{ justifyContent: 'center' }} onPress={() => this.Remove(item, this.props.cartItems)}>
                    <EvilIcons name='trash' size={30} color='#004F92' />
                  </TouchableOpacity>
                </View>
                <Text>{item.name}</Text>
                <Text style={{ color: '#cc0000', fontSize: 20 }}>{item.price - (item.price * item.sale)} VND</Text>
                <Text style={{ color: '#808080', fontSize: 15, textDecorationLine: 'line-through', textDecorationStyle: 'solid' }}>{item.price} VND</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text>Kích cỡ: </Text>
                  <Text style={{ paddingRight: 10 }}>{item.selectsize}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text>Số lượng: </Text>
                  <Text style={{ paddingRight: 10 }}>1</Text>
                </View>
              </View>
            </View>
            <View style={{ height: '30%', flexDirection: 'row', justifyContent: "center" }}>
              <View style={{ width: '40%', height: '100%', justifyContent: 'space-between', flexDirection: "row", paddingHorizontal: 30 }}>
                <TouchableOpacity style={{ justifyContent: 'center' }} >
                  <Entypo name='share' size={20} color='#004F92' />
                </TouchableOpacity>
                <TouchableOpacity style={{ justifyContent: 'center' }}>
                  <Entypo name='heart-outlined' size={20} color='#004F92' />
                </TouchableOpacity>
              </View>
              <View style={{ width: '60%', height: '100%', justifyContent: "center", alignItems: 'center' }}>
                <Text style={{ color: '#01b200' }}>Giao hàng trong 1-3 ngày làm việc</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View >
      )
    })
  }

  render() {
    return (

      this.props.cartItems.length > 0
        ?
        <View style={styles.container}>
          <ScrollView>

            <View style={{ flex: 1 }}>
              {this.renderProducts(this.props.cartItems)}
              <View style={{ width: '100%', height: 100, justifyContent: 'center', backgroundColor: '#ccffcc' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10 }}>
                  <Text style={{ paddingLeft: 20, fontSize: 15 }}>Tổng cộng ({this.props.cartItems.length})</Text>
                  <Text style={{ paddingRight: 20, fontSize: 15, color: 'red' }}>{this.state.sum} VND</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10 }}>
                  <Text style={{ paddingLeft: 20, fontSize: 15 }}>Phí vận chuyển:</Text>
                  <Text style={{ paddingRight: 20, fontSize: 15 }}>FREE</Text>
                </View>
              </View>
              <Button block success>
                <Text>Primary</Text>
              </Button>
            </View>
          </ScrollView>

        </View>
        :
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Image style={{ width: 80, height: 80, resizeMode: 'center' }} source={require('../../Image/shopping.jpg')} />
          <Text style={{ fontSize: 30, color: '#004F92' }}>Giỏ hàng đang trống</Text>
        </View>

    );
  }
}


const mapStateToProps = (state) => {
  return {
    cartItems: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (product) => dispatch({
      type: 'REMOVE_FROM_CART',
      payload: product
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
