import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, ImageBackground } from 'react-native';
import Swiper from 'react-native-swiper';
import firebase from 'firebase';
import Loading from '../../../Component/Loading';
import ListItem from '../../../Component/ListItem';

class Kid extends React.Component {
  static navigationOptions = {
    title: "Trẻ em",
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
              <Swiper style={{ height: 230 }} showsButtons={false} autoplay={true} autoplayTimeout={8}>
                <TouchableOpacity style={styles.slide}>
                  <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} source={{ uri: 'https://static.robins.vn/cms/20170710-kids-girls-H1.jpg' }} />
                </TouchableOpacity>
              </Swiper>

              <Text
                style={{ fontSize: 20, paddingTop: 5, paddingBottom: 5, marginLeft: 10, fontWeight: 'bold', color: '#1B7FDF' }}
              >
                Mua sắm sản phẩm theo nhóm tuổi
          </Text>

              <View style={{ width: '100%', height: 800, flexDirection: 'column', justifyContent: 'space-between' }}>

                <TouchableOpacity style={{ flex: 1, backgroundColor: 'green', margin: 5 }}>
                  <ImageBackground
                    style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}

                    source={{ uri: 'https://static.robins.vn/cms/kids/ag_24m_f.jpg' }}
                  >
                  </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity style={{ flex: 1, backgroundColor: 'green', margin: 5 }}>
                  <ImageBackground
                    style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}

                    source={{ uri: 'https://static.robins.vn/cms/kids/ag_6-12y_f.jpg' }}
                  >
                  </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity style={{ flex: 1, backgroundColor: 'green', margin: 5 }}>
                  <ImageBackground
                    style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}

                    source={{ uri: 'https://static.robins.vn/cms/kids/ag_24m.jpg' }}
                  >
                  </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity style={{ flex: 1, backgroundColor: 'green', margin: 5 }}>
                  <ImageBackground
                    style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}

                    source={{ uri: 'https://static.robins.vn/cms/kids/ag_6-12y.jpg' }}
                  >
                  </ImageBackground>
                </TouchableOpacity>

              </View>

            </ScrollView>
        }
      </View>
    );
  }
}

export default Kid;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
