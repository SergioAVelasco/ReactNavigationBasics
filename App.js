/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform , Text} from 'react-native';
import { createStackNavigator, createNavigationContainer } from "react-navigation";
import Home from './src/screens/containers/home'
import Login from './src/screens/containers/Login'
import About from './src/screens/containers/About'
import Profile from './src/screens/containers/Profile'

const AppNavigator = createStackNavigator(
  {
    Home:{
      screen: Home,
      path:'home/',
      navigationOptions: {
        title: 'Esta es la home'
      }
    }, Login , About, Profile
  },{
    initialRouteName: 'Home',
    initialRouteKey:'login',
    mode:'card',
    initialRouteParams: {
      Nombre: 'Sergio Velasco'
    },
    defaultNavigationOptions: {
      title: 'Un Titulo genérico', 
      headerTitleAllowFontScaling: true, 
      headerBackTitle: 'Atras', 
      gesturesEnabled: true,
    }
  })

  const Main = createStackNavigator({
    Main: {
      screen: AppNavigator
    }, 
    Login: {
      screen: Login
    }
  },{
    mode: 'modal',
    headerMode: 'none'
  })


export default createNavigationContainer(Main);