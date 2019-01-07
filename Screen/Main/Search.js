import React from 'react';
import { StyleSheet, Text, View, Picker, TextInput, FlatList, TouchableOpacity } from 'react-native';
import Loading from '../../Component/Loading';
import ListItem from '../../Component/ListItem';
import firebase from 'firebase';
class Search extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [],
      loading: true,
      loadinglist: true,
      PickerValue: 'Woman',
      text: '',
    }
  }

  renderItem(item) {
    return (
      <View style={{ paddingLeft: 5, paddingRight: 5 }}>
        <ListItem item={item} />
      </View>
    )
  }

  readData = (searchtext) => {
    this.setState({ loading: true })
    this.setState({ loadinglist: true })
    firebase.database().ref('/' + this.state.PickerValue ).once('value').then(snapshot => {
      this.setState({ data: snapshot.val() })
      this.setState({ temp: this.state.data.filter(item => item.trademark.indexOf(searchtext) != -1)})
    })
    setTimeout(() => {
      this.setState({ loading: false })
    }, 1000)
    setTimeout(() => {
      this.setState({ loadinglist: false })
    }, 3000)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ height: '10%', flexDirection: 'row', justifyContent: 'center' }}>
          <Picker style={{ width: 100, height: 40 }}
            selectedValue={this.state.PickerValue}
            onValueChange={(itemValue, itemIndex) => this.setState({ PickerValue: itemValue })}>
            <Picker.Item label='Nữ' value='Woman' />
            <Picker.Item label='Nam' value='Man' />
            <Picker.Item label='Trẻ em' value='Kid' />
          </Picker>
          <TextInput
            placeholderTextColor='#292929'
            editable={true}
            maxLength={200}
            style={{
              width: 200, height: 40,
              fontSize: 15,
              backgroundColor: '#fff',
            }}
            onChangeText={(text) => this.setState({ text })}
            underlineColorAndroid={'#000'} />
          <TouchableOpacity style={{ height: 40, justifyContent: 'center' }} onPress={() => this.readData(this.state.text)}>
            <Text>Search</Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: '90%' }}>
          {
            this.state.loading ?
              null
              :

              this.state.loadinglist ?
                <Loading />
                :
                <FlatList
                  numColumns={2}
                  data={this.state.temp}
                  renderItem={({ item }) => this.renderItem(item)}
                  keyExtractor={(item) => item.id.toString()}
                />

          }
        </View>
      </View>
    );
  }
}

export default Search;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
