import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, ImageBackground } from 'react-native';
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
                SẢN PHẨM BÁN CHẠY
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
                THƯƠNG HIỆU NỔI BẬT
            </Text>

              <Text
                style={{ fontSize: 20, marginBottom: 10, marginLeft: 10, fontWeight: 'bold', }}
              >
                DANH MỤC SẢN PHẨM
            </Text>

            <View>

              <View style={{flex: 1, flexDirection: 'row', marginBottom:10, paddingLeft:10, paddingRight:10, marginTop:10, justifyContent:'space-between'}}>
              <TouchableOpacity
                style={{width: '48%', height: 100}}>
                <ImageBackground style={{ width: '100%', height: '100%', resizeMode:'stretch' }} source={{ uri: 'https://static.robins.vn/cms/image/20181217-women-D1.jpg' }} />
                <View style ={{position:'absolute', alignItems:'center', justifyContent:'center'}}>
                 <Text style ={{fontSize:30, fontWeight:'bold', textAlign:'center',color:'red'}}>
                   HÙNG ĐẸP TRAI
                   </Text>
                   </View>
              </TouchableOpacity>
              <TouchableOpacity
                 style={{width: '48%', height: 100}} >
                 <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} source={{ uri: 'https://static.robins.vn/cms/image/20181217-women-D1.jpg' }} />
                  <Text style ={{fontSize:30, fontWeight:'bold', textAlign:'center',color:'white'}}>
                   AHIHI
                   </Text>
              </TouchableOpacity>
            </View>

            <View style ={{flex:1, flexDirection:'row',paddingLeft:10, paddingRight:10, justifyContent:'space-between'}}>
            <TouchableOpacity
               style={{width: '48%', height: 100}} >
               <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} source={{ uri: 'https://static.robins.vn/cms/image/20181217-women-D1.jpg' }} />
                <Text style ={{fontSize:30, fontWeight:'bold', textAlign:'center',color:'white'}}>
                   AHIHI
                   </Text>
            </TouchableOpacity>
             <TouchableOpacity
               style={{width: '48%', height: 100}} >
               <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} source={{ uri: 'https://static.robins.vn/cms/image/20181217-women-D1.jpg' }} />
                <Text style ={{fontSize:30, fontWeight:'bold', textAlign:'center',color:'white'}}>
                   HÙNG ĐẸP TRAI
                   </Text>
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
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  slide: {
    flex: 1,
  },
});
