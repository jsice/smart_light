import React from 'react';
import { Platform, View, TabBarIOS, Text } from 'react-native';
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';

import LightBulb from './LightBulb'
import Ultrasonic from './Ultrasonic'

export default class App extends React.Component {

  state = {
    selectedTab: 0,
    tabs: [
      'light',
      'ultrasonic'
    ]
  }

  render() {
    const ios = (
      <TabBarIOS selectedTab={this.state.selectedTab}>
        <TabBarIOS.Item 
        selected={this.state.selectedTab===0}
        onPress={()=>this.setState({selectedTab:0})}
        title={'light'}
        >
          {this.state.selectedTab===0 ? <LightBulb /> : null }
        </TabBarIOS.Item>
        <TabBarIOS.Item 
        selected={this.state.selectedTab===1}
        onPress={()=>this.setState({selectedTab:1})}
        title={'ultrasonic'}
        >
          {this.state.selectedTab===1 ? <Ultrasonic /> : null }
        </TabBarIOS.Item>
      </TabBarIOS>
    )
    const android = (
      <ScrollableTabView
        style={{marginTop: 20, }}
        initialPage={1}
        renderTabBar={() => <DefaultTabBar />}
      >
        <LightBulb tabLabel='light' />
        <Ultrasonic tabLabel='ultrasonic' />
      </ScrollableTabView>
    )
    return Platform.OS === 'ios' ? ios : android
  }
}