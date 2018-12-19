import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import Swiper from 'react-native-swiper';
class Women extends React.Component {

  static navigationOptions = {
    title: "Nữ",

  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Swiper style={{ height: 200 }} showsButtons={true} autoplay={true} autoplayTimeout={8}>
            <TouchableOpacity style={styles.slide1}>
              <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} source={require('../../../Image/Slider1.jpg')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.slide2}>
              <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} source={require('../../../Image/Slider2.jpg')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.slide3}>
              <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} source={require('../../../Image/Slider3.jpg')} />
            </TouchableOpacity>
          </Swiper>

          <Text
            style={{ fontSize: 20, paddingTop: 5, paddingBottom: 5, marginLeft: 10, fontWeight: 'bold', color: '#002264' }}
          >
            Cập nhật xu hướng
        </Text>

          <View style={styles.container}>
            <ScrollView horizontal='true'>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <TouchableOpacity style={{ flex: 3, width: 200, height: 200, padding: 2 }} >
                  <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} source={{ uri: 'https://static.robins.vn/cms/image/20181217-women-D1.jpg' }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 3, width: 200, height: 200, padding: 2 }} >
                  <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} source={{ uri: 'https://static.robins.vn/cms/image/20181217-women-D3.jpg' }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 3, width: 200, height: 200, padding: 2 }} >
                  <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} source={{ uri: 'https://static.robins.vn/cms/image/20181217-women-D5.jpg' }} />
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>


          <Text
            style={{ fontSize: 20, marginBottom: 10, marginLeft: 10, fontWeight: 'bold', }}
          >
            Sản phẩm bán chạy
          </Text>

          <TouchableOpacity onPress={this.onButtonPress}>
            <Image
              source={require('../../../Image/drawerImage.jpg')}
              style={{ width: '100%', height: 250, marginBottom: 20 }}
            />
          </TouchableOpacity>

          <Text
            style={{ fontSize: 20, marginBottom: 10, marginLeft: 10, fontWeight: 'bold', }}
          >
            Thương hiệu nổi bật
          </Text>
          <Text
            style={{ width: '100%', fontSize: 30, padding: 20, height: 500, backgroundColor: "blue" }}
          >
            1 mình tao chấp hết
          </Text>

          <Text
            style={{ fontSize: 20, marginBottom: 10, marginLeft: 10, fontWeight: 'bold', }}
          >
            Danh mục sản phẩm
          </Text>

          <Text
            style={{ width: '100%', fontSize: 30, padding: 20, height: 500, backgroundColor: "pink" }}
          >
            1 mình tao chấp hết
          </Text>
          <Text
            style={{ width: '100%', fontSize: 30, padding: 20, height: 500, backgroundColor: "green" }}
          >
            1 mình tao chấp hết
          </Text>
        </ScrollView>
      </View>
    );
  }
}

export default Women;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
});
