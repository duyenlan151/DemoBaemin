// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

import * as React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ListCategory from './src/screens/Category/ListCategory';
import CustomDrawerContent from './src/components/CustomDrawerContent';
import Detail from './src/screens/Category/Detail';
import NotFound from './src/screens/NotFound';
import RNBootSplash from "react-native-bootsplash";

const Drawer = createDrawerNavigator<any>();

export default function App() {
  return (
    // <SafeAreaView>
      <NavigationContainer onReady={() => RNBootSplash.hide()}>
        <Drawer.Navigator
          screenOptions={{headerShown: false}}
          drawerContent={props => <CustomDrawerContent {...props} />}>
          <Drawer.Screen name="Home" component={ListCategory} />
          <Drawer.Screen name="Detail" component={Detail} />
          <Drawer.Screen name="NotFound" component={NotFound} />
        </Drawer.Navigator>
      </NavigationContainer>
    // </SafeAreaView>
  );
}
