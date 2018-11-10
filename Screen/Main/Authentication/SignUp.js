import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class SignUp extends React.Component {
  static navigationOptions = () => ({
    title: "Đăng ký",
  })
  render() {
    return (
      <View style={styles.container}>
        <Text> Sign up screen </Text>
      </View>
    );
  }
}

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
