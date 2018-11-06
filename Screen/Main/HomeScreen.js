import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Trang chủ",
    headerLeft: (
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Image
          style={{ marginLeft: 20, width: 40, height: 40 }}
          source={require('/appbanhang/Image/Hamber.png')}

        />
      </TouchableOpacity>
    ),
  })

  _Woman = () => {
    this.props.navigation.navigate('Woman');
  }
  _Man = () => {
    this.props.navigation.navigate('Man');
  }
  _Kid = () => {
    this.props.navigation.navigate('Kid');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Home screen </Text>
        <Button title="Go to woman product" onPress={this._Woman} />
        <Button title="Go to man product" onPress={this._Man} />
        <Button title="Go to kid product" onPress={this._Kid} />
      </View>
    );
  }
}

export default HomeScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
