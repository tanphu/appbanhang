import React from 'react';
import {ScrollView, Text, Image, StyleSheet, View, TouchableOpacity, Alert} from 'react-native'

class ManScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    };

    onButtonPress(){
        Alert.alert("hello");
    }
    

    render(){
        return(
            <ScrollView>
            <TouchableOpacity
            onPress={this.onButtonPress}>    
            <Text
                style={
                        {
                            width:'100%',
                            height: 250,
                            fontSize: 30,
                            padding: 20,
                            backgroundColor: "red",
                            marginBottom:10
                        }
                    }>
                    Tao là Hùng xe ôm
                </Text>
                <Text
                style ={
                    {
                    fontSize:20,
                    marginBottom:10,
                    marginLeft:10,
                    fontWeight:'bold',
                    
                    }
                }>
                    Cập nhật xu hướng
                    </Text>
                </TouchableOpacity>

                <ScrollView style ={{height:200, marginBottom: 10}} horizontal='true'>
                <View style= {{flex:1,flexDirection:"row"}}>
                <TouchableOpacity
                onPress={this.onButtonPress}>
                <Text
                    style={
                        {
                            flex:3,
                            width:200,
                            fontSize: 30,
                            padding: 20,
                            marginRight:10,
                            backgroundColor: "green"
                        
                        }
                    }>
                    Đệ tử của Lâm chó điên
                </Text>
                {/* <Image
                source={require('../Image/jang gyuri example.jpg')}
                style={
                    {
                        flex:3,
                        width:200,
                    }
                }>
                    </Image> */}
                </TouchableOpacity>
                <TouchableOpacity
                onPress={this.onButtonPress}>
                <Text
                    style={
                        {
                            flex:3,
                            width:200,
                            fontSize: 30,
                            padding: 20,
                            marginRight:10,
                            backgroundColor: "blue"
                            
                        }
                    }>
                    Đệ tử của Lâm chó điên
                </Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={this.onButtonPress}>
                <Text
                    style={
                        {
                            flex:3,
                            width:200,
                            fontSize: 30,
                            padding: 20,
                            backgroundColor: "yellow"
                        }
                    }>
                    Đệ tử của Lâm chó điên
                </Text>
                </TouchableOpacity>
                </View>
                </ScrollView>
                <Text
                style={
                    {
                        fontSize:20,
                        marginBottom:10,
                        marginLeft:10,
                        fontWeight:'bold',
                    }
                }>
                    Sản phẩm bán chạy
                    </Text>
                <TouchableOpacity
                onPress= {this.onButtonPress}>
                <Image
                    source={require('../Image/NinjaLead.jpg')}
                    style={
                        {
                            width: '100%',
                            height: 250,
                            marginBottom: 20

                        }
                    }
                    >
                </Image>
                </TouchableOpacity>
                <Text
                    style={
                        {
                            width:'100%',
                           fontSize: 30,
                           padding:20,
                           //justifyContent:'center',
                            height: 500,
                            backgroundColor:"blue"
                        }

                    }>
                    1 mình tao chấp hết
                    </Text>
                    <Text
                    style={
                        {
                            width:'100%',
                           fontSize: 30,
                           padding:20,
                           //justifyContent:'center',
                            height: 500,
                            backgroundColor:"pink"
                        }

                    }>
                    1 mình tao chấp hết
                    </Text>
                    <Text
                    style={
                        {
                            width:'100%',
                           fontSize: 30,
                           padding:20,
                           //justifyContent:'center',
                            height: 500,
                            backgroundColor:"green"
                        }

                    }>
                    1 mình tao chấp hết
                    </Text>
                    
                 
                
              
              
                </ScrollView>





        )






    }
}

const styles = StyleSheet.create({


})

export default ManScreen;