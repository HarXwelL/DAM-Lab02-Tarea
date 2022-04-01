import * as React from 'react';
import {Component} from 'react';
import { 
  Text, View, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: '',
      inicio: 'Bienvenido',
    };
  }

  changeTextInput = text => {
    this.setState({textValue: text});
  };

  onPress = () => {
    this.setState({
      inicio: this.state.inicio,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.text}>
          <Text style={styles.logo}> Login MI ORGANIZACION </Text>
        </View>

        <Image style={styles.box} source={require('./img/logo.png')}/>
        <Text style={styles.textbar}>UserName: </Text>
        <TextInput
          style={{height: 40, borderColor: 'gray',backgroundColor: 'white', borderWidth: 1}}
          />
        <Text style={styles.textbar}>Password: </Text>
        <TextInput
          style={{height: 40, borderColor: 'gray',backgroundColor: 'white', borderWidth: 1}}
          />

        <TouchableOpacity style={styles.button} onPress={this.onPress}>
          <Text> Inicie Sesion </Text>
        </TouchableOpacity>
        <View style={[styles.countContainer]}>
          <Text style={[styles.countText]}>
            {this.state.inicio}
          </Text>
      </View>
    </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
    backgroundColor: '#bdf',
  },
  text: {
    alignItems: "center",
    padding: 10,
  },
  button: {
    top: 10,
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  box: {
    width: 200,
    height: 300,
    marginRight: 40,
    marginLeft:50,
    marginBottom: 20,
    marginTop: 20
  },
  logo: {
    alignItems: "center",
    padding: 10,
    color: '#FF00FF',
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
  textbar: {
    alignItems: "center",
    padding: 10,
    color: 'black',
    fontWeight: 'bold',
  },
});
