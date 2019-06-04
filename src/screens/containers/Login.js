import React, { Component } from 'react'
import { Text, View,StyleSheet,Button } from 'react-native'
import { NavigationActions } from 'react-navigation'

class Login extends Component {
    handlePress = (params) => {
        this.props.navigation.dispatch(
            NavigationActions.navigate({
                routeName: 'About',
            })
        )
    }
    render() {
        return (
            <View style = {styles.container}>
                <Text> Login </Text>
                <Button 
                    title = 'Ir a About'
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

export default Login