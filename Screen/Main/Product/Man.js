import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, ImageBackground } from 'react-native';
import Swiper from 'react-native-swiper';
import firebase from 'firebase';
import Loading from '../../../Component/Loading';
import ListItem from '../../../Component/ListItem';
class Man extends React.Component {
  static navigationOptions = {
    title: "Nam",

  };

  _list = (item) => {
    this.props.navigation.navigate('List', { kind: item, })
  }

  constructor(props) {
    super(props)
    this.state = {
      data: [],
      loading: true,
    }
  }

  readData = () => {
    firebase.database().ref('/Product/Man/topdeal').once('value').then(snapshot => {
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
                  <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} source={{ uri: 'https://static.robins.vn/cms/image/20181224-men-d6.jpg' }} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.slide}>
                  <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} source={require('../../../Image/Slider2.jpg')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.slide}>
                  <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} source={{ uri: 'https://static.robins.vn/cms/image/20181224-ALDO-CR-H1.jpg' }} />
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
                      <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} source={{ uri: 'https://static.robins.vn/cms/image/20181224-men-d1.jpg' }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 3, width: 220, height: 220, marginLeft: 5, marginRight: 5 }} >
                      <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} source={{ uri: 'https://static.robins.vn/cms/image/20181224-men-d2.jpg' }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 3, width: 220, height: 220, marginLeft: 5, marginRight: 5 }} >
                      <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} source={{ uri: 'https://static.robins.vn/cms/image/20181224-men-d7.jpg' }} />
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
                style={{
                  fontSize: 20, marginBottom: 10, marginLeft: 10, fontWeight: 'bold', color: '#1B7FDF'
                }}
              >
                Danh mục sản phẩm
            </Text>

              <View>
                <View style={{ flex: 1, flexDirection: 'row', marginBottom: 10, paddingLeft: 10, paddingRight: 10, marginTop: 10, justifyContent: 'space-between' }}>
                  <TouchableOpacity style={{ width: '48%', height: 100, backgroundColor: 'red' }}>
                    <ImageBackground
                      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                      blurRadius={0.2}
                      source={require('../../../Image/tshirtmen.png')}
                    >
                      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#01b200' }}>Áo thun</Text>
                      </View>
                    </ImageBackground>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ width: '48%', height: 100, backgroundColor: 'green' }} >
                    <ImageBackground
                      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                      blurRadius={0.2}
                      source={require('../../../Image/jean.png')}
                    >
                      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#01b200' }}>Quần jean</Text>
                      </View>
                    </ImageBackground>
                  </TouchableOpacity>
                </View>

                <View style={{ flex: 1, flexDirection: 'row', paddingLeft: 10, paddingRight: 10, justifyContent: 'space-between' }}>
                  <TouchableOpacity style={{ width: '48%', height: 100, backgroundColor: 'blue' }} >
                    <ImageBackground
                      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                      blurRadius={0.2}
                      source={require('../../../Image/trousers.png')}
                    >
                      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#01b200' }}>Quần tây</Text>
                      </View>
                    </ImageBackground>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ width: '48%', height: 100, backgroundColor: 'yellow' }} >
                    <ImageBackground
                      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                      blurRadius={0.2}
                      source={require('../../../Image/shirt.png')}
                    >
                      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#01b200' }}>Áo sơ mi</Text>
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

export default Man;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
