import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import ChangeInfo from './ChangeInfo';
class User extends React.Component {

  _ChangeInfo = () => {
    this.props.navigation.navigate('ChangeInfo');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> User information screen </Text>
        <Button title="Change info" onPress={this._ChangeInfo} />
      </View>
    );
  }
}

export default UserNavigator = createStackNavigator(
  {
    User: User,
    ChangeInfo: ChangeInfo,
  },
  {
    initialRouteName: 'User',
    headerMode: "none",
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
