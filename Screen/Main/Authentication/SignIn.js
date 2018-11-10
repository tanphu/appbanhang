import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class SignIn extends React.Component {
  static navigationOptions = () => ({
    title: "Đăng nhập",
  })
  render() {
    return (
      <View style={styles.container}>
        <Text> Sign In screen </Text>
      </View>
    );
  }
}

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
