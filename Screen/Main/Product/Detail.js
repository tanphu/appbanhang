import React from 'react';
import { StyleSheet, Text, View, Share, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import AddCart from '../../../Component/AddCart';
import { Entypo } from '@expo/vector-icons'
import Swiper from 'react-native-swiper';
class Detail extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('trademark', null),
    };
  };

  OnShare = (item) => {
    Share.share({
      title: 'share',
      url: item.image.i1,
      message: item.image.i1,
    }, {
        dialogTitle: 'Share this awesome content'
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
          <View style={{ width: '61%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.name}</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'red' }}>{item.price} VND</Text>
          </View>
          <View style={{ width: '0.5%', backgroundColor: '#095763' }}></View>
          <View style={{ width: '19.5%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity>
              <Text style={{ color: '#004F92', fontSize: 20, fontWeight: 'bold' }}>Chi tiết</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ height: '0.2%', width: '100%', backgroundColor: '#095763' }}></View>
        <Swiper style={styles.wrapper} showsButtons={false} horizontal={false}>
          <Image style={styles.slide} source={{ uri: item.image.i1 }} />
          <Image style={styles.slide} source={{ uri: item.image.i2 }} />
          <Image style={styles.slide} source={{ uri: item.image.i3 }} />
        </Swiper>
        <AddCart set={true} item={item} />
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
    alignItems: 'center',
  },
  slide: {
    height: '100%',
    resizeMode: 'stretch',
  },
});
