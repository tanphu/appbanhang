import React from 'react';
import { StyleSheet, View , Button } from 'react-native';
class Man extends React.Component {
  static navigationOptions = {
    title: "Nam",

  };

  _list = (item) => {
    this.props.navigation.navigate('List', { kind: item, })
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title='t-shirt' onPress={() => this._list('t-shirt')} />
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
