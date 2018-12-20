import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux'
class Cart extends React.Component {
  static navigationOptions = {
    title: "Giỏ hàng",

  };

  renderProducts = (products) => {

    return products.map((item, index) => {
      return (
        <View key={index} style={{ padding: 20 }}>
          <Text>{item.name}</Text>
        </View>
      )
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Cart screen </Text>
        {this.renderProducts(this.props.cartItems)}
      </View>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    cartItems: state
  }
}

export default connect(mapStateToProps)(Cart);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
