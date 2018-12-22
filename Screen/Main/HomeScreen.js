import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';


class HomeScreen extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: "Trang chủ",
    headerLeft: (
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Feather name='menu' size={30} style={{ color: '#EEEEEE', marginLeft: 20 }} />
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
