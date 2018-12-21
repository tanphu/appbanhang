import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';
import DetailTab from './Detail/DetailTab';
import CommentTab from './Detail/CommentTab';

class DetailProduct extends React.Component {
    static navigationOptions = () => ({
        title: "Chi Tiết",
    })

    render() {
        return (
            <TabSign />
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



