import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, ImageBackground } from 'react-native';
import Swiper from 'react-native-swiper';
import firebase from 'firebase';
import Loading from '../../../Component/Loading';
import ListItem from '../../../Component/ListItem';
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
                  <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} source={{ uri: 'https://static.robins.vn/cms/image/20181224-WH-buy2get10-H1.jpg' }} />
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
                      <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} source={{ uri: 'https://static.robins.vn/cms/image/20181224-women-D1.jpg' }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 3, width: 220, height: 220, marginLeft: 5, marginRight: 5 }} >
                      <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} source={{ uri: 'https://static.robins.vn/cms/image/20181224-women-D2.jpg' }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 3, width: 220, height: 220, marginLeft: 5, marginRight: 5 }} >
                      <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} source={{ uri: 'https://static.robins.vn/cms/image/20181224-women-D8.jpg' }} />
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
                        <View style={{ paddingLeft: 10, paddingRight: 10 }}>
                          <ListItem item={e} />
                        </View>
                      )
                    })}
                  </View>
                </ScrollView>
              </View>

              <Text
                style={{ fontSize: 20, marginBottom: 10, marginLeft: 10, fontWeight: 'bold', color: '#1B7FDF' }}
              >
                Danh mục sản phẩm
            </Text>

              <View>
                <View style={{ flex: 1, flexDirection: 'row', marginBottom: 10, paddingLeft: 10, paddingRight: 10, marginTop: 10, justifyContent: 'space-between' }}>
                  <TouchableOpacity style={{ width: '48%', height: 100, backgroundColor: 'red' }} onPress={() => { this.props.navigation.navigate('List', { who: 'Woman', type: 'dress' }) }}>
                    <ImageBackground
                      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                      blurRadius={0.2}
                      source={require('../../../Image/longdress.png')}
                    >
                      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#01b200' }}>Đầm</Text>
                      </View>
                    </ImageBackground>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ width: '48%', height: 100, backgroundColor: 'green' }} >
                    <ImageBackground
                      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                      blurRadius={0.2}
                      source={require('../../../Image/dress1.png')}
                    >
                      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#01b200' }}>Váy</Text>
                      </View>
                    </ImageBackground>
                  </TouchableOpacity>
                </View>

                <View style={{ flex: 1, flexDirection: 'row', paddingLeft: 10, paddingRight: 10, justifyContent: 'space-between' }}>
                  <TouchableOpacity style={{ width: '48%', height: 100, backgroundColor: 'blue' }} >
                    <ImageBackground
                      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                      blurRadius={0.2}
                      source={require('../../../Image/tshirtwoman.png')}
                    >
                      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#01b200' }}>Áo thun</Text>
                      </View>
                    </ImageBackground>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ width: '48%', height: 100, backgroundColor: 'yellow' }} >
                    <ImageBackground
                      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                      blurRadius={0.2}
                      source={require('../../../Image/coat.png')}
                    >
                      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#01b200' }}>Áo khoác</Text>
                      </View>
                    </ImageBackground>
                  </TouchableOpacity>
                </View>

              </View>


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
