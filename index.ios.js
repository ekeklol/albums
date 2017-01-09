// index.ios.js place code here for IOS, try to copy everything to android

// import a library to help create Component
import React from 'react';
import { AppRegistry, View } from 'react-native';

import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// create a Component of stuff
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

// render it to the device
AppRegistry.registerComponent('albums', () => App);
