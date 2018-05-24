import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

export default class App extends React.Component {

  state = {
    lightIsOn: 0
  }

  componentWillMount() {
    fetch('http://158.108.138.46:2403/status/05e1f6adbf864b39')
    .then(res=>res.json())
    .then(state=>this.setState(state))
  }

  toggleLight() {
    const new_state = {
      lightIsOn: 1-this.state.lightIsOn
    }
    this.setState(new_state)
    fetch('http://158.108.138.46:2403/status/05e1f6adbf864b39', {
      method: 'put',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(new_state)
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Light Bulb 4.0</Text>
        <TouchableHighlight onPress={() => this.toggleLight()}>
            {this.state.lightIsOn===1
              ? <Image 
              style={styles.imagestyle} 
              source={{
                uri: 'https://www.w3schools.com/js/pic_bulbon.gif'
              }} 
              />
              : <Image 
              style={styles.imagestyle} 
              source={{
                uri: 'https://www.w3schools.com/js/pic_bulboff.gif'
              }} 
              />
            }
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagestyle: {
    width: 100,
    height: 200
  }
});
