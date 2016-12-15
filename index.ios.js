// index.ios.js place code here for IOS, try to copy everything to android

// import a library to help create Component
import React from 'react';
import { AppRegistry, View } from 'react-native';

import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// create a Component
const App = () => (
  <View>
    <Header headerText={'Albumss'} />
    <AlbumList />
  </View>

);

// render it to the device
AppRegistry.registerComponent('albums', () => App);
