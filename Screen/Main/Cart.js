import React from 'react';
import { StyleSheet, Text, View, Button, AsyncStorage } from 'react-native';
import { connect } from 'react-redux'
class Cart extends React.Component {
  static navigationOptions = {
    title: "Giỏ hàng",

  };

  constructor(props) {
    super(props);
    this.state = {
      userinfo: null
    };
  }

  componentDidMount() {
    AsyncStorage.getItem("User").then(value => {
      if (value) {
        this.setState({ userinfo: JSON.parse(value) });
      }
    })
  };

  renderProducts = (products) => {

    return products.map((item, index) => {
      return (
        <View key={index} style={{ padding: 20 }}>
          <Button title={item.name + " - "} />
        </View>
      )
    })
  }

  rendersss = () => {
    return (
      <Text>{this.state.userinfo.name}</Text>
    )
  }

  render() {

    return (

      <View style={styles.container}>
        {this.state.userinfo ? (this.rendersss())  : null}
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
