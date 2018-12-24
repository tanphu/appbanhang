import React from 'react';
import { View, ScrollView, Text, AsyncStorage, TouchableOpacity, TextInput } from 'react-native'
import StarRating from 'react-native-star-rating';
import firebase from 'firebase';
class DetailProduct extends React.Component {
    static navigationOptions = () => ({
        title: "Chi Tiết",
    })

    constructor(props) {
        super(props);
        this.state = {
            starCount: 0,
            userinfo: null,
            text: '',
            comment: [],
        };
    }

    onStarRatingPress(rating) {
        this.setState({
            starCount: rating
        });
    }

    componentDidMount() {
        AsyncStorage.getItem("User").then(value => {
            this.setState({ userinfo: JSON.parse(value) });
        })
        const item = this.props.navigation.getParam('item', 'no item')
        this.readcomment(item)
    }

    comment = (name, rate, text, item) => {
        firebase.database().ref('/Product/' + item.who + '/' + item.type + '/' + item.id + '/comment/').push({
            user: name,
            star: rate,
            comment: text
        })
        this.readcomment(item)
    }

    readcomment = (item) => {
        var array = []
        firebase.database().ref('/Product/' + item.who + '/' + item.type + '/' + item.id + '/comment/').once('value').then(snapshot => {
            snapshot.forEach(cartSnapshot => {
                array.push(cartSnapshot.val())
            })
            this.setState({ comment: array })
            console.log(this.state.comment)
        })
    }


    renderComment = (comment) => {

        return comment.map((e, index) => {
            return (
                <View key={index} style={{ marginTop: 10, marginBottom: 10, backgroundColor: index % 2 == 0 ? '#d9d9d9' : '#f2f2f2' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 5, paddingRight: 5 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{e.user} {index}</Text>
                        <StarRating
                            disabled={false}
                            emptyStar={'ios-star-outline'}
                            fullStar={'ios-star'}
                            halfStar={'ios-star-half'}
                            iconSet={'Ionicons'}
                            maxStars={5}
                            rating={e.star}
                            fullStarColor={'red'}
                            starSize={20}
                        />
                    </View>
                    <Text style={{ paddingLeft: 5, fontSize: 18 }}>{e.comment}</Text>
                </View>
            )
        })
    }
    render() {
        const item = this.props.navigation.getParam('item', 'no item');
        return (
            <View styles={{ flex: 1, paddingLeft: 10 }}>
                <ScrollView>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', paddingTop: 10, paddingBottom: 10, paddingLeft: 10 }}>Mô tả sản phẩm</Text>
                    {
                        item.sale != 0 ?
                            <View style={{ flexDirection: 'row', paddingLeft: 10 }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#ff1919', paddingRight: 10 }}>{item.price - (item.price * item.sale)} VND</Text>
                                <Text style={{ fontSize: 20, textDecorationLine: 'line-through', textDecorationStyle: 'solid', color: 'gray' }}>{item.price} VND</Text>
                            </View>
                            :
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#ff1919', paddingLeft: 10 }}>{item.price}</Text>
                    }
                    <Text style={{ paddingLeft: 10, fontSize: 15, fontWeight: 'bold' }}>{item.trademark}</Text>
                    <Text style={{ paddingLeft: 10, fontSize: 15 }}>{item.name}</Text>

                    <Text style={{ paddingLeft: 15, fontSize: 15, paddingTop: 10, fontWeight: 'bold' }}>Được cung cấp bới {item.trademark} và giao hàng bởi nhà vận chuyển</Text>
                    <Text style={{ paddingLeft: 15, fontSize: 15, fontWeight: 'bold' }}>Sẽ có tại nhà bạn từ <Text style={{ color: '#01b200' }}> từ 1-3 ngày làm việc</Text> </Text>
                    <Text style={{ paddingLeft: 15, fontSize: 15, fontWeight: 'bold', color: '#01b200' }}>Miễn phí vận chuyển</Text>



                    <View style={{ paddingLeft: 15, paddingTop: 20, flexDirection: 'row' }}>
                        <Text style={{ fontSize: 15, paddingRight: 5, fontWeight: 'bold' }}>Chất liệu:</Text>
                        <Text style={{ fontSize: 15, paddingRight: 5 }}>{item.material}</Text>
                    </View>

                    <View style={{ paddingLeft: 15, flexDirection: 'row' }}>
                        <Text style={{ fontSize: 15, paddingRight: 5, fontWeight: 'bold' }}>Xuất xứ:</Text>
                        <Text style={{ fontSize: 15, paddingRight: 5 }}>{item.origin}</Text>
                    </View>
                    <Text style={{ paddingLeft: 15, paddingTop: 30, fontSize: 15 }}>{item.description.toString()}</Text>

                    <View style={{ paddingLeft: 15, paddingTop: 30, flexDirection: 'row' }}>
                        <Text style={{ fontSize: 15, paddingRight: 10, fontWeight: 'bold' }}>Màu sắc:</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            {
                                item.color.split('-').map((e, index) => {
                                    return (
                                        <View key={index} style={{ width: 38, height: 38, backgroundColor: '#' + e, marginRight: 5, borderWidth: 1, borderColor: 'black' }}>
                                        </View>
                                    )
                                })
                            }
                        </View>
                    </View>
                    <View style={{ paddingLeft: 15, paddingTop: 5, flexDirection: 'row' }}>
                        <Text style={{ fontSize: 15, paddingRight: 5, fontWeight: 'bold' }}>Kích cỡ</Text>
                        <Text style={{ fontSize: 15, paddingRight: 5 }}>{item.size}</Text>
                    </View>

                    <Text style={{ paddingLeft: 15, paddingTop: 20, fontSize: 15 }}>
                        -Dịch vụ đổi hàng hiện chưa áp dụng cho các sản phẩm cung cấp bởi NHÀ BÁN HÀNG , tuy nhiên bạn vẫn có thể tận hưởng dịch vụ 30 ngày trả hàng miễn phí , quy trình trả hàng đơn giản và nhanh chóng, với điều kiện sản phẩm chưa qua suwe dụng còn nguyên bao bì
                        và hóa đơn. Bạn có thể trả hàng tại bất kỳ bưu điện nào trên toàn quốc hoặc văn phòng của cưa hàng tại TP.Hồ Chí Minh và Tp.Hà Nội.
                    </Text>

                    <Text style={{ paddingLeft: 15, paddingTop: 20, fontSize: 15 }}>
                        -Nếu bạn có thắc mắc về sản phẩm vui lòng liên hệ với bộ phận chăm sóc khách hàng tại <Text style={{ textDecorationLine: 'underline', color: 'blue' }}>customer@shop.vn</Text>
                    </Text>

                    <Text style={{ paddingLeft: 15, paddingTop: 20, paddingBottom: 20, fontSize: 15, fontWeight: 'bold' }}>
                        **Lưu ý: Thời gian giao hàng không bao gồm ngày lễ, Tết
                    </Text>
                    {
                        this.state.userinfo != null ?
                            <View style={{ paddingLeft: 15, paddingRight: 15, paddingTop: 20, backgroundColor: '#ccffcc', margin: 20 }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Đánh Giá sản phẩm</Text>
                                <View style={{ width: '30%' }}>
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
                                <View style={{ paddingBottom: 5 }}>
                                    <Text style={{ fontSize: 15 }}>{this.state.starCount} trên 5</Text>
                                </View>

                                <TextInput
                                    placeholder='Nhận xét'
                                    placeholderTextColor='#292929'
                                    editable={true}
                                    maxLength={200}
                                    multiline={true}
                                    numberOfLines={4}
                                    onChangeText={(text) => this.setState({ text: text })}
                                    value={this.state.text}
                                    style={{
                                        fontSize: 15,
                                        backgroundColor: '#fff',

                                    }}
                                    underlineColorAndroid={'transparent'} />
                                <View style={{ paddingTop: 10, shadowOpacity: 1 }}>
                                    <TouchableOpacity style={{ paddingTop: 10, height: 50, backgroundColor: '#42FF41', alignItems: 'center', justifyContent: 'center' }} onPress={() => this.comment(this.state.userinfo.name, this.state.starCount, this.state.text, item)}>
                                        <Text style={{ fontSize: 20, color: '#fff' }}>Thêm nhận xét</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>
                            :
                            null
                    }
                    <Text style={{ paddingLeft: 15, fontSize: 20 }}>Bình luận</Text>
                    <View style={{ paddingLeft: 15, paddingRight: 15 }}>
                        {this.renderComment(this.state.comment)}
                    </View>

                </ScrollView>
            </View >
        );
    }
}

export default DetailProduct;



