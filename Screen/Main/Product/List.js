import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import ListItem from '../../../Component/ListItem';
import firebase from 'firebase';
import Loading from '../../../Component/Loading';

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
    const who = this.props.navigation.getParam('who', 'No product');
    const itemId = this.props.navigation.getParam('type', 'No product');
    firebase.database().ref('/Product/' + who + '/' + itemId).once('value').then(snapshot => {
      this.setState({ data: snapshot.val() })
    })
  }



  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false })
    }, 2000)
    this.readData();
  }
  render() {

    return (

      <View style={styles.container}>
        {
          this.state.loading ?
            <Loading />
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
