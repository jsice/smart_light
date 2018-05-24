import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

export default class Ultrasonic extends React.Component {
    state = {
        ultrasonic: 0
    }

    componentDidMount() {
        this.interval = setInterval(()=>fetch('http://158.108.138.46:2403/status/05e1f6adbf864b39')
        .then(res=>res.json())
        .then(({ultrasonic})=>this.setState({ultrasonic}))
        ,20)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titleText}>Ultrasonic</Text>
                <Text style={styles.mainText}>{this.state.ultrasonic}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#abcdef',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        fontSize: 45,
    },
    mainText: {
        fontSize: 50,
    },
})