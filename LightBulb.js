import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default class LightBulb extends React.Component {

  state = {
    lightIsOn: 0
  }

  componentDidMount() {
    fetch('http://158.108.138.46:2403/status/05e1f6adbf864b39')
    .then(res=>res.json())
    .then(({lightIsOn})=>this.setState({lightIsOn}))
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
        <TouchableOpacity onPress={() => this.toggleLight()}>
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
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cdefab',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagestyle: {
    width: 100,
    height: 200
  },
});
