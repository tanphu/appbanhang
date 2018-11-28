import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  Alert,
  Image,
  TouchableOpacity
} from 'react-native';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = { email: 'Test@test.com', password: '123456', error: '', loading: false, userinfo:null };
}
  static navigationOptions = () => ({
        title: "Đăng nhập",
  })

  async logInFB() {
    try {
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions,
      } = await Expo.Facebook.logInWithReadPermissionsAsync('719830388383557', {
        permissions: ['public_profile'],
      });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,name,picture.type(large)`);
        const userinfo= await response.json();
        this.setState({userinfo})
        Alert.alert('Logged in!', `Hi ${userinfo.name}!`);
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
     console.log(message);
    }
  }
  LogoutFB(){
    this.setState({userinfo:null});
  }

  renderuserInfo=()=>{
    return(
      <View style={{alignItems:'center'}}>
      <Image 
      source={{uri:this.state.userinfo.picture.data.url}}
      style={{width:100,height:100}}
      />
      <Text style={{fontSize:20}}>{this.state.userinfo.name}</Text>
      <TouchableOpacity style={styles.button} onPress={this.LogoutFB.bind(this)}><Text style={styles.buttonText}> Log Out</Text></TouchableOpacity>
      </View>
    )
  }

	render() {
		return(
			<View style={styles.container}>
        {!this.state.userinfo ?(	<TouchableOpacity style={styles.button} onPress={this.logInFB.bind(this)}><Text style={styles.buttonText}> Sign in with Facebook</Text></TouchableOpacity>):(this.renderuserInfo())}
			</View>	
			)
	}
}
const styles = StyleSheet.create({
  container : {
    backgroundColor:'#455a64',
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
  },
  button: {
    width:300,
    backgroundColor:'#0000FF',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  }
});