import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native'
import { createMaterialTopTabNavigator } from 'react-navigation';
import DetailTab from './Detail/DetailTab';
import CommentTab from './Detail/CommentTab';
import StarRating from 'react-native-star-rating';
class DetailProduct extends React.Component {
    static navigationOptions = () => ({
        title: "Chi Tiết",
    })

    constructor(props) {
        super(props);
        this.state = {
            starCount: 3
        };
    }

    onStarRatingPress(rating) {
        this.setState({
            starCount: rating
        });
    }

    render() {
        const item = this.props.navigation.getParam('item', 'no item');
        return (
            // <TabSign />
            <View styles={{ flex: 1 }}>
                <ScrollView>
                    <Text>Mô tả sản phẩm</Text>
                    <Text>{item.price}</Text>
                    <Text>giảm giá</Text>
                    <Text >{item.description.toString()}</Text>
                    <Text>Bình Luận</Text>
                    <View style={{width:'50%'}}>
                        <StarRating
                            disabled={false}
                            emptyStar={'ios-star-outline'}
                            fullStar={'ios-star'}
                            halfStar={'ios-star-half'}
                            iconSet={'Ionicons'}
                            maxStars={5}
                            rating={this.state.starCount}
                            selectedStar={(rating) => this.onStarRatingPress(rating)}
                            fullStarColor={'red'}
                            starSize={30}
                        />
                    </View>

                    <Text>{this.state.starCount}</Text>
                </ScrollView>
            </View>
        );
    }
}

const TabSign = createMaterialTopTabNavigator(
    {
        DetailTab: DetailTab,
        CommentTab: CommentTab,
    },
    {
        swipeEnabled: true,
    }
);

export default DetailProduct;



