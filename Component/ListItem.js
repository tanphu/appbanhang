import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Dimensions, ImageBackground } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Entypo } from '@expo/vector-icons';
import AddCart from './AddCart';
const ITEM_WIDTH = Dimensions.get('screen').width
const ITEM_HEIGHT = Dimensions.get('screen').height
class ListItems extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            select: false,
        }
    }

    btnFavorite = () => {
        this.setState({ select: !this.state.select })
    }

    OnShare = (item) => {
        Share.share({
            title: 'share',
            url: item.image.i1,
            message: item.image.i1,
        }, {
                dialogTitle: 'Share this awesome content'
            })
    }

    render() {
        return (

            <TouchableOpacity style={styles.container} onPress={() => { this.props.navigation.navigate('Detail', { item: this.props.item }) }}>
                <ImageBackground
                    style={{ width: ITEM_WIDTH / 2 - 10, height: ITEM_HEIGHT / 2 - 150 }}
                    source={{ uri: this.props.item.image.i1 }}
                >
                    <View style={{ flexDirection: 'row-reverse', justifyContent: 'space-between', height: 35, paddingTop: 5 }}>
                        <TouchableOpacity onPress={this.btnFavorite}>
                            <Entypo name={this.state.select ? 'heart' : 'heart-outlined'} size={30} color={this.state.select ? '#B39168' : '#004F92'} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.OnShare(this.props.item)}>
                            <Entypo name='share' size={30} color='#004F92' />
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
                <View style={{ flex: 1, paddingBottom: 20 }}>
                    <Text>{this.props.item.name}</Text>
                    <Text>{this.props.item.trademark}</Text>
                    <Text style={{ fontSize: 15, color: '#ff0000' }}>{this.props.item.price} VND</Text>
                    <AddCart item={this.props.item} />
                </View>

            </TouchableOpacity>


        );
    }
}

export default withNavigation(ListItems)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
