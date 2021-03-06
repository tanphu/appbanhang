import React from 'react';
import { StyleSheet, Text, View, Share, TouchableOpacity, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import AddCart from '../../../Component/AddCart';
import { Entypo } from '@expo/vector-icons'
import Swiper from 'react-native-swiper';
import firebase from 'firebase';
import Modal from 'react-native-modal';
const ITEM_WIDTH = Dimensions.get('screen').width

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
      size: 'S',
      color: '',
      image: [],
    }
  }
  _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });

  OnShare = (item) => {
    Share.share({
      title: 'share',
      url: this.state.image.i1,
      message: this.state.image.i1,
    }, {
        dialogTitle: 'Share this awesome content'
      })
  }

  _detail = (item) => {
    this.props.navigation.navigate('DetailProduct', { item: item });
  }

  renderSize = (size) => {
    array = size.split('-')
    return (
      <View style={{ width: '100%', height: '100%', flexDirection: 'column' }}>
        {
          array.map((e, index) => {

            return (
              <TouchableOpacity key={index} style={{ backgroundColor: '#d9d9d9', marginTop: 5, marginBottom: 5, alignItems: 'center' }} onPress={() => this.setState({ size: e })}>
                <Text style={{ fontSize: 15 }}>{e}</Text>
              </TouchableOpacity>
            )
          })
        }
      </View>
    )
  }
  renderColor = (color, item) => {
    array = color.split('-')
    return (
      <View style={{ width: '100%', height: '100%', flexDirection: 'row', alignItems: 'center' }}>
        {
          array.map((e, index) => {
            return (
              <TouchableOpacity key={index} style={{ marginRight: 5, borderWidth: 1, borderColor: 'black' }} onPress={() => this.getImage(item, e)}>
                <View style={{ width: 38, height: 38, backgroundColor: '#' + e }}>
                </View>
              </TouchableOpacity>
            ) 
          })
        }
      </View>
    )
  }

  componentDidMount() {
    const item = this.props.navigation.getParam('item', 'no item');
    this.setState({ color: item.color.split('-')[0].trim() })
    console.log(this.state.color)
    this.getImage(item, item.color.split('-')[0].trim())
  }

  getImage = (item, color) => {
    firebase.database().ref('/Product/' + item.who + '/' + item.type + '/' + item.id + '/image/' + color).once('value').then(snapshot => {
      this.setState({ image: snapshot.val() })
    })
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
        <Swiper showsButtons={false} horizontal={true} autoplay>
          <Image style={styles.slide} source={{ uri: this.state.image.i1 }} />
          <Image style={styles.slide} source={{ uri: this.state.image.i2 }} />
          <Image style={styles.slide} source={{ uri: this.state.image.i3 }} />
        </Swiper>
        <View style={{ height: '9%', flexDirection: 'row' }} >
          <TouchableOpacity style={{ backgroundColor: '#fff', width: '30%', alignItems: 'center', justifyContent: 'center' }} onPress={this._toggleModal}>
            <Text style={{ fontSize: 20 }}>Size: {this.state.size}</Text>
          </TouchableOpacity>
          <AddCart set={true} item={item} size={this.state.size} image={this.state.image.i1} />
        </View>


        <Modal style={{ paddingLeft: ITEM_WIDTH / 2 - 170 }} onBackdropPress={() => this.setState({ isModalVisible: false })} isVisible={this.state.isModalVisible}>
          <View style={{
            backgroundColor: "white",
            flexDirection: 'column',
            width: 300,
            height: 250,
            justifyContent: 'space-between',
            borderColor: "rgba(0, 0, 0, 0.1)",
          }}>
            <View style={{ width: '100%', height: '20%', alignItems: 'center', justifyContent: 'center', backgroundColor: '#47ED73' }}>
              <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#fff' }}>Kích cỡ/ Màu sắc</Text>
            </View>
            <View style={{ width: '100%', height: '60%' }}>
              {this.renderSize(item.size)}
            </View>
            <View style={{ width: '100%', height: '20%', flexDirection: 'row', paddingBottom: 5 }}>
              <View style={{ paddingLeft: 10, width: '30%', height: '100%', justifyContent: 'center' }}>
                <Text>Màu:</Text>
              </View>
              <View style={{ paddingLeft: 20, height: '100%', justifyContent: 'center' }}>
                {this.renderColor(item.color, item)}
              </View>
            </View>
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
