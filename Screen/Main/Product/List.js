import React from 'react';
import { StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';
import ListItem from '../../../Component/ListItem';
import firebase from 'firebase';
class List extends React.Component {
  static navigationOptions = {
    title: "Danh mục",

  };

  constructor(props) {
    super(props)
    this.state = {
      data: [],
      loading: true,
    }
  }

  renderItem(item) {
    return (
      <View style={{ paddingLeft: 5, paddingRight: 5 }}>
        <ListItem item={item} />
      </View>
    )
  }

  readData = () => {
    const itemId = this.props.navigation.getParam('kind', 'No product');
    firebase.database().ref('/Product/Man/' + itemId).once('value').then(snapshot => {
      this.setState({ data: snapshot.val() })
    })
  }



  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false })
    }, 1000)
    this.readData();
  }
  render() {

    return (

      <View style={styles.container}>
        {
          this.state.loading ?
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <ActivityIndicator size='large' color='#B28F69' />
            </View>

            :
            <FlatList
              numColumns={2}
              data={this.state.data}
              renderItem={({ item }) => this.renderItem(item)}
              keyExtractor={(item) => item.id.toString()}
            />
        }
      </View>
    );
  }
}

export default List;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
});
