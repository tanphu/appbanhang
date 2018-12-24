import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Dimensions, ImageBackground, Share, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Entypo } from '@expo/vector-icons';
import AddCart from './AddCart';
import StarRating from 'react-native-star-rating';
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
            <TouchableOpacity style={styles.container} onPress={() => { this.props.navigation.navigate('Detail', { item: this.props.item, trademark: this.props.item.trademark }) }}>
                <ImageBackground
                    style={{ width: ITEM_WIDTH / 2 - 10, height: ITEM_HEIGHT / 2 - 150 }}
                    source={{ uri: this.props.item.image.i1 }}
                >
                    <View style={{ flexDirection: 'row-reverse', justifyContent: 'space-between', height: 35, paddingTop: 5 }}>
                        <View>
                            <AddCart set={false} item={this.props.item} size={this.props.item.size.split('-')[0].trim()} /></View>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => this.OnShare(this.props.item)}>
                                <Entypo name='share' size={30} color='#01b200' />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.btnFavorite}>
                                <Entypo name={this.state.select ? 'heart' : 'heart-outlined'} size={30} color={this.state.select ? '#b2005b' : '#01b200'} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
                {
                    this.props.item.sale != 0 ?
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', borderWidth: 1, borderColor: '#767f76', marginBottom: 15 }}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ marginLeft: 10, fontSize: 15, color: '#000' }}>{this.props.item.trademark}</Text>
                                <View style={{ marginLeft: 10 }}>
                                    <StarRating
                                        disabled={true}
                                        emptyStar={'ios-star-outline'}
                                        fullStar={'ios-star'}
                                        halfStar={'ios-star-half'}
                                        iconSet={'Ionicons'}
                                        maxStars={5}
                                        rating={this.props.item.rate}
                                        fullStarColor={'yellow'}
                                        starSize={15}
                                    />
                                </View>
                                <Text style={{ marginLeft: 10, fontSize: 15, color: '#ff1919' }}>{this.props.item.price - (this.props.item.price * this.props.item.sale)} VND</Text>
                                <Text style={{ marginLeft: 10, fontSize: 10, color: 'grey', textDecorationLine: 'line-through', textDecorationStyle: 'solid' }}>{this.props.item.price} VND</Text>
                            </View>
                            <View style={{ marginRight: 5, width: 40 }}>
                                <Image style={{ width: 40, height: '100%', resizeMode: 'center' }} source={require('../Image/sale.png')} />
                            </View>
                        </View>
                        :
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', borderWidth: 1, borderColor: '#767f76', marginBottom: 15 }}>
                            <View>
                                <Text style={{ marginLeft: 10, fontSize: 15, color: '#000' }}>{this.props.item.trademark}</Text>
                                <View style={{ marginLeft: 10 }}>
                                    <StarRating
                                        disabled={true}
                                        emptyStar={'ios-star-outline'}
                                        fullStar={'ios-star'}
                                        halfStar={'ios-star-half'}
                                        iconSet={'Ionicons'}
                                        maxStars={5}
                                        rating={this.props.item.rate}
                                        fullStarColor={'yellow'}
                                        starSize={15}
                                    />
                                </View>
                                <Text style={{ marginLeft: 10, fontSize: 15, color: '#ff1919' }}>{this.props.item.price} VND</Text>
                            </View>
                        </View>
                }

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
