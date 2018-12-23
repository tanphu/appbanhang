import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import firebase from 'firebase';
import { connect } from 'react-redux';
import Loading from '../../Component/Loading';
class HomeScreen extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: "Trang chủ",
    headerLeft: (
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Feather name='menu' size={30} style={{ color: '#EEEEEE', marginLeft: 20 }} />
      </TouchableOpacity>
    ),
  })


  constructor(props) {
    super(props)
    this.state = {
      loading: true,
    }
  }

  readData = () => {
    firebase.database().ref('/Order/').once('value').then(snapshot => {
      snapshot.forEach(cartSnapshot => {
        this.props.addItemToCart(cartSnapshot.val())
      })
    })

  }

  _Woman = () => {
    this.props.navigation.navigate('Woman');
  }
  _Man = () => {
    this.props.navigation.navigate('Man');
  }
  _Kid = () => {
    this.props.navigation.navigate('Kid');
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false })
    }, 1000)
    this.readData();

  }

  render() {
    return (
      <View style={styles.container}>
        {
          this.state.loading ?
            <Loading />
            :
            <View style={styles.container}>
              <Text> Home screen </Text>
              <Button title="Go to woman product" onPress={this._Woman} />
              <Button title="Go to man product" onPress={this._Man} />
              <Button title="Go to kid product" onPress={this._Kid} />
            </View>
        }
      </View>
    );
  }
}
const mapDispatchToProps = (Dispatch) => {
  return {
    addItemToCart: (propduct) => Dispatch({ type: 'ADD_TO_CART', payload: propduct })
  }
}

export default connect(null, mapDispatchToProps)(HomeScreen);;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
