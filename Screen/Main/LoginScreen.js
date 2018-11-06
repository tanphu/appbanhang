import React from 'react';
import { StyleSheet, View , TouchableOpacity , Image } from 'react-native';
import Authentication from './Authentication/Authentication';
import User from './Authentication/User'
class LoginScreen extends React.Component {
    static navigationOptions = ({ navigation}) => ({
        title: "Đăng nhập",
        headerLeft: (
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Image
              style={{ marginLeft: 20, width: 40, height: 40 }}
              source={require('/appbanhang/Image/Hamber.png')}
    
            />
          </TouchableOpacity>
        ),
      })
    constructor(props) {
        super(props);
        this.state = { user: null };
    }

    render() {
        const Sign = <User />
        const logout = <Authentication />
        return (
            <View style={styles.container}>
                {!this.state.user ? Sign : logout}
            </View>

        );
    }
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

