import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import firebase from 'firebase';
import Loading from '../../../Component/Loading';
class Women extends React.Component {

  static navigationOptions = {
    title: "Nữ",

  };

  constructor(props) {
    super(props)
    this.state = {
      data: [],
      loading: true,
    }
  }

  readData = () => {
    firebase.database().ref('/Product/Woman/topdeal').once('value').then(snapshot => {
      this.setState({ data: snapshot.val() })
    })
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
            <ScrollView>
              <Swiper style={{ height: 230 }} showsButtons={true} autoplay={true} autoplayTimeout={8}>
                <TouchableOpacity style={styles.slide}>
                  <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} source={require('../../../Image/Slider1.jpg')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.slide}>
                  <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} source={require('../../../Image/Slider2.jpg')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.slide}>
                  <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} source={require('../../../Image/Slider3.jpg')} />
                </TouchableOpacity>
              </Swiper>

              <Text
                style={{ fontSize: 20, paddingTop: 5, paddingBottom: 5, marginLeft: 10, fontWeight: 'bold', color: '#1B7FDF' }}
              >
                Cập nhật xu hướng
          </Text>

              <View style={styles.container}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                  <View style={{ flex: 1, flexDirection: "row" }}>
                    <TouchableOpacity style={{ flex: 3, width: 220, height: 220, marginLeft: 5, marginRight: 5 }} >
                      <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} source={{ uri: 'https://static.robins.vn/cms/image/20181217-women-D1.jpg' }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 3, width: 220, height: 220, marginLeft: 5, marginRight: 5 }} >
                      <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} source={{ uri: 'https://static.robins.vn/cms/image/20181217-women-D3.jpg' }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 3, width: 220, height: 220, marginLeft: 5, marginRight: 5 }} >
                      <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} source={{ uri: 'https://static.robins.vn/cms/image/20181217-women-D5.jpg' }} />
                    </TouchableOpacity>
                  </View>
                </ScrollView>
              </View>

              <Text
                style={{ fontSize: 20, paddingTop: 5, paddingBottom: 5, marginLeft: 10, fontWeight: 'bold', color: '#1B7FDF' }}
              >
                Sản phẩm bán chạy
            </Text>

              <View style={styles.container}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                  <View style={{ flex: 1, flexDirection: "row" }}>
                    {this.state.data.map(e => {
                      return (

                        <TouchableOpacity key={e.id.toString()} style={{ flex: 3, width: 200, height: 260, marginLeft: 10, marginRight: 10, backgroundColor: '#095763' }} >
                          <Image style={{ width: '100%', height: 210, resizeMode: 'stretch' }} source={{ uri: e.image.i1 }} />
                          <View style={{ flex: 1, paddingBottom: 20, alignItems: 'center' }}>
                            <Text style={{ color: '#EFAF58' }}>{e.trademark}</Text>
                            <Text style={{ fontSize: 15, color: '#fff' }}>{e.price} VND</Text>
                          </View>
                        </TouchableOpacity>

                      )
                    })}
                  </View>
                </ScrollView>
              </View>

              <Text
                style={{ fontSize: 20, paddingTop: 5, paddingBottom: 5, marginLeft: 10, fontWeight: 'bold', }}
              >
                Thương hiệu nổi bật
            </Text>

              <Text
                style={{ fontSize: 20, marginBottom: 10, marginLeft: 10, fontWeight: 'bold', }}
              >
                Danh mục sản phẩm
            </Text>

            </ScrollView>
        }
      </View>
    );
  }
}

export default Women;

const styles = StyleSheet.create({
  container: {
    paddingTop: 2,
    flex: 1,
    backgroundColor: '#F1EDEE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  slide: {
    flex: 1,
  },
});
