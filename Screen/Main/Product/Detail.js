import React from 'react';
import { StyleSheet, Text, View, Share, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import AddCart from '../../../Component/AddCart';
import { Entypo } from '@expo/vector-icons'
import Swiper from 'react-native-swiper';
import firebase from 'firebase';
import Modal from 'react-native-modal';
class Detail extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('trademark', null),
    };
  };

  constructor(props) {
    super(props)
    this.state = {
      isModalVisible: false,
    }
  }
  _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });

  OnShare = (item) => {
    Share.share({
      title: 'share',
      url: item.image.i1,
      message: item.image.i1,
    }, {
        dialogTitle: 'Share this awesome content'
      })
  }

  _detail = (item) => {
    this.props.navigation.navigate('DetailProduct', { item: item });
  }
  render() {
    const item = this.props.navigation.getParam('item', 'no item');
    return (
      <View style={styles.container}>
        <View style={{ width: '100%', height: '9%', flexDirection: 'row' }}>
          <View style={{ width: '19.5%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => this.OnShare(item)}>
              <Entypo name='share' size={30} color='#004F92' />
            </TouchableOpacity>
          </View>
          <View style={{ width: '0.5%', backgroundColor: '#095763' }}></View>
          {
            item.sale != 0 ?
              <View style={{ width: '61%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.name}</Text>
                <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#ff1919', paddingRight: 10 }}>{item.price - (item.price * item.sale)} VND</Text>
                  <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'grey', paddingLeft: 10, textDecorationLine: 'line-through', textDecorationStyle: 'solid' }}>{item.price} VND</Text>
                </View>
              </View>
              :
              <View style={{ width: '61%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.name}</Text>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'red' }}>{item.price} VND</Text>
              </View>
          }
          <View style={{ width: '0.5%', backgroundColor: '#095763' }}></View>
          <View style={{ width: '19.5%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => this._detail(item)}>
              <Text style={{ color: '#004F92', fontSize: 20, fontWeight: 'bold' }}>Chi tiết</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ height: '0.2%', width: '100%', backgroundColor: '#095763' }}></View>
        <Swiper showsButtons={false} horizontal={false} autoplay>
          <Image style={styles.slide} source={{ uri: item.image.i1 }} />
          <Image style={styles.slide} source={{ uri: item.image.i2 }} />
          <Image style={styles.slide} source={{ uri: item.image.i3 }} />
        </Swiper>
        <View style={{ height: '9%', flexDirection: 'row' }} >
          <TouchableOpacity style={{ backgroundColor: '#fff', width: '30%', alignItems: 'center', justifyContent: 'center' }} onPress={this._toggleModal}>
            <Text>Size: {this.state.size}</Text>
          </TouchableOpacity>
          <AddCart set={true} item={item} />
        </View>


        <Modal isVisible={this.state.isModalVisible}>
          <View style={{
            backgroundColor: "white",
            height: 400,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 4,
            borderColor: "rgba(0, 0, 0, 0.1)"
          }}>
            <Text>Hello!</Text>
            <TouchableOpacity onPress={this._toggleModal}>
              <Text>Hide me!</Text>
            </TouchableOpacity>
          </View>
        </Modal>
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
  },
  slide: {
    flex: 1,
    resizeMode: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
