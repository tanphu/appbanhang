import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, ImageBackground } from 'react-native';
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
            <View style={{ width: '100%', height: '100%', justifyContent: 'space-between' }} >
              <TouchableOpacity style={{ width: '100%', height: '33%', backgroundColor: 'blue', borderRadius: 10, borderWidth: 1 }} onPress={this._Woman}>
                <ImageBackground
                  style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                  source={{ uri: 'https://static.robins.vn/cms/image/20180910-HP-Women-DESK.jpg' }}
                >
                  <View style={{ justifyContent: 'center', alignItems: 'center', borderColor: '#fff', borderWidth: 2, width: 200, height: 50 }}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#ff198f' }}>Hàng nữ</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>

              <TouchableOpacity style={{ width: '100%', height: '33%', backgroundColor: 'green', borderRadius: 10, borderWidth: 1 }} onPress={this._Man}>
                <ImageBackground
                  style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                  source={{ uri: 'https://static.robins.vn/cms/image/20180910-HP-Men-DESK.jpg' }}
                >
                  <View style={{ justifyContent: 'center', alignItems: 'center', borderColor: '#fff', borderWidth: 2, width: 150, height: 50 }}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#ff198f' }}>Hàng nam</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>

              <TouchableOpacity style={{ width: '100%', height: '33%', backgroundColor: 'blue', borderRadius: 10, borderWidth: 1 }} onPress={this._Kid}>
                <ImageBackground
                  style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                  source={{ uri: 'https://static.robins.vn/cms/image/20180910-HP-Kids-DESK.jpg' }}
                >
                  <View style={{ justifyContent: 'center', alignItems: 'center', borderColor: '#fff', borderWidth: 2, width: 200, height: 50 }}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#ff198f' }}>Trẻ em</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
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
