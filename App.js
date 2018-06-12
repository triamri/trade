import React, { Component } from 'react';
import axios from 'axios';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert
} from 'react-native';


export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      daftarKontak: [],
      id: null,
      nama: null,
      nomor: null
    }
  }

  componentWillMount = () => {
    axios.get('http://156.67.214.64/api/index.php/kontak')
    .then(({ data }) => {
      this.setState({
        daftarKontak: data 
      });
    })
    .catch(error => {
      console.log(error)
    })
  }

  handleSubmit = () => {
    let kontak = {
      id: this.state.id,
      nama: this.state.nama,
      nomor: this.state.nomor
    }
    // Alert.alert('test');
    axios.post('http://156.67.214.64/api/index.php/kontak', kontak)
    .then(({ data }) => {
      console.log(data);
    })
    .catch(err => console.log(err))
  }
  
  render() {
    return (
      <View style={styles.container}>
      { this.state.daftarKontak.map((kontak, index) =>
        <Text style={styles.welcome} key={ index }>
          { kontak.nama }
        </Text>
      )}
      <TextInput
        style={{
          padding: 10,
          paddingTop: 50,
        }}
        onChangeText={id => this.setState({id})}
      />
      <TextInput
        style={{
          padding: 10,
          paddingTop: 50,
        }}
        onChangeText={nama => this.setState({nama})}
      />
      <TextInput
        style={{
          padding: 10,
          paddingTop: 50,
        }}
        onChangeText={nomor => this.setState({nomor})}
      />
      <Button
        onPress={this.handleSubmit}
        title="submit"
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
