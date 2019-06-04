import React, { Component } from 'react'
import { Text, View,StyleSheet,Button } from 'react-native'
import {StackActions} from 'react-navigation'

class Home extends Component {
    handlePress = (params) => {
        //this.props.navigation.navigate('Login')
        /* 
        {
            type: 'NAVIGATE', 
            payload: {
                screen: 'Login',
                params: {
                    name: 'keko'
                }
            } 
        }
        */
        this.props.navigation.dispatch(StackActions.push({
            routeName: 'Login', 
            params: {
                name: 'keko'
            }
        }))
    }
    
    render() {
        return (
            <View style = {styles.container}>
                <Text> Home </Text>
                <Button 
                    title = 'Ir al login'
                    onPress = {this.handlePress}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Home